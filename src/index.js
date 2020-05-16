"use strict";
const _ = require("lodash");
const fs = require("fs");
const read = require('./read.js');

function buildChain(listOfObjects,data) {
     _.forEach(data, (n,i) => {
         const current = _.findIndex(listOfObjects, {key : n});
         const following = _.findIndex(listOfObjects, {key: data[i+1]});
         listOfObjects[current].next = [...listOfObjects[current].next, listOfObjects[following]];
    });
}
function buildListOfObjects(data) {
    const noDuplicates = [... new Set(data)];
    return _.map(noDuplicates,(n) =>  n = new Word(n))
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

function printSentences(listOfObjects,n,highLimiter,lowLimiter) {
    _.forEach(_.range(0,n), () => {
        const randomNumber = Math.floor(Math.random() * listOfObjects.length);
        const randomWord = listOfObjects[randomNumber];
        const sentence = makeSentence(randomWord,highLimiter);
        if(sentence.split(" ").length > lowLimiter ) {
            console.log(sentence);
            console.log();
        }
    })
}

const data = read.fileToArray("harrypotter.txt");
const listOfObjects = buildListOfObjects(data);
buildChain(listOfObjects,data);
printSentences(listOfObjects,20,20, 3);