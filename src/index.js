"use strict";

const _ = require("lodash");
const fs = require("fs");

function fileToArray() {
    const text = fs.readFileSync("../data/text.txt", "utf-8")
        .split(" ");
    const dotToNone = _.map(text, function (n) {
        return (n== ".") ? null : n;
    })
    const removeUndefined = _.filter(dotToNone, (n) => n !== "" && n != undefined);
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

function makeSentence(node, sentence = "") {
    console.log("key",node.key);
    const takeRandom = node.next[Math.floor(Math.random() * node.next.length)];
    console.log("next",takeRandom.key);
    return (node.key == null ) ? sentence : makeSentence(takeRandom, (`${sentence} ${node.key}`));
}

// const sentence1 = makeSentence(listOfObjects[123]);
// console.log(sentence1);
console.log(_.find(listOfObjects, {key: null}));