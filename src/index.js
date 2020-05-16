"use strict";
const chain = require('./chain.js');

//Available functions:
//const chainName = chain.fileToChain("file.txt");  -returns array of objects
//chain.printSentences(chainName, n-of sentences, high length limiter, low length limiter); -does not return anything, just print
//const ArrayName = chain.getNextArr(word,chainName);   -returns array of words

const harrychain = chain.fileToChain("harrypotter.txt");
const hamletchain = chain.fileToChain("hamlet.txt");
const lalkachain = chain.fileToChain("lalka.txt");

chain.printSentences(harrychain,5,20, 3);
chain.printSentences(hamletchain,5,20, 3);
chain.printSentences(lalkachain,5,20, 3);

// const harryNexts = chain.getNextArr("harry",harrychain);
// console.log(harryNexts)