const _ = require("lodash");
const read = require('./read.js');

exports.fileToChain = function fileToChain(filename) {
    const data = read.fileToArray(filename);
    const listOfObjects = buildListOfObjects(data);
    buildChain(listOfObjects,data);
    return listOfObjects;
}

function buildListOfObjects(data) {
    const noDuplicates = [... new Set(data)];
    return _.map(noDuplicates,(n) =>  n = new Word(n))
}

function buildChain(listOfObjects,data) {
    _.forEach(data, (n,i) => {
        const current = _.findIndex(listOfObjects, {key : n});
        const following = _.findIndex(listOfObjects, {key: data[i+1]});
        listOfObjects[current].next = [...listOfObjects[current].next, listOfObjects[following]];
    });
}

function Word(key) {
    this.key = key;
    this.next = [];
}

function makeSentence(node,limiter, sentence = "") {
    const takeRandom = node.next[Math.floor(Math.random() * node.next.length)];
    if(node.key == "." || node.key == "!" || node.key == "?") return (`${sentence}${node.key}`);
    if(limiter > 0) {
        return makeSentence(takeRandom,limiter-1, (`${sentence} ${node.key}`));
    }
    else {
        const endOfWord = _.find(node.next,{key: "!" || "?" || "."});
        if(endOfWord != undefined){
            return makeSentence(endOfWord,limiter,(`${sentence} ${node.key}`));
        }
        else {
            return makeSentence(takeRandom,limiter, (`${sentence} ${node.key}`));
        }
    }
}

exports.printSentences = function printSentences(chain,n,highLimiter,lowLimiter) {
    _.forEach(_.range(0,n), () => {
        const randomNumber = Math.floor(Math.random() * chain.length);
        const randomWord = chain[randomNumber];
        const sentence = makeSentence(randomWord,highLimiter);
        if(sentence.split(" ").length > lowLimiter ) {
            console.log(sentence);
            console.log();
        }
    })
}
exports.getNextArr = function getNextArr(word,listOfObjects) {
    const node = _.find(listOfObjects,{key: word})
    return (node == undefined) ? null : _.reduce(node.next, (acc,a) => [...acc, a.key] ,[])
}

