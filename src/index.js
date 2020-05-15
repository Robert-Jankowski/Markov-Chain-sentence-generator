"use strict";

const _ = require("lodash");
const fs = require("fs");

function fileToArray() {
    const text = fs.readFileSync("../data/text.txt", "utf-8")
        .split(" ");
    const removeUndefined = _.filter(text, (n) => n !== "" && n != undefined);
    return removeUndefined;
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

const data = fileToArray();
const noDuplicates = [... new Set(data)];

const listOfObjects = noDuplicates.map((n) =>  n = new Word(n));

buildChain(listOfObjects,data);

function makeSentence(node,limiter, sentence = "") {
    const takeRandom = node.next[Math.floor(Math.random() * node.next.length)];
    if(node.key == "." || node.key == "!" || node.key == "?") return (`${sentence}${node.key}`)
    if(limiter > 0) {
        return (node.key == "." || node.key == "!" || node.key == "?") ? (`${sentence}${node.key}`) : makeSentence(takeRandom,limiter-1, (`${sentence} ${node.key}`));
    }
    else {
        const endOfWord = _.find(node.next,{key: "!" || "?" || "."})
        if(endOfWord != undefined){
            return makeSentence(endOfWord,limiter,(`${sentence} ${node.key}`))
        }
        else {
            makeSentence(takeRandom,limiter-1, (`${sentence} ${node.key}`))
        }
    }
}

function printSentences(n) {
    _.forEach(_.range(0,n), _ => {
        console.log(makeSentence(listOfObjects[Math.floor(Math.random() * listOfObjects.length)],20))
        console.log()
    })
}


printSentences(10);