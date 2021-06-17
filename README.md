# Markov-Chain-sentence-generator
---
A JavaScript implementation of Markov Chain used to generate sentences based on text file.

## How it works ?
---
.TXT file is transformed into an array of words (unnecessary commas, hyphens, multiple spaces are being cut).Then the array without duplicates is transformed into array of Word objects(key: String, next: Arr[Object]).Words from previous array are being used as index of Word objects, the one-way connections are made.

## File system
---

### src
- index.js -user interface
- fileread.js -read-from-file function is stored here
- chain.js -all other functions are stored here

### data
A directory for .TXT files.
Imported .TXT files:
- Harry Potter and the Sorcerer's Stone by J.K. Rowlings
- Hamlet by William Shakespeare
- Lalka by Bolesław Prus

### es5out
A directory with ES5 versions of .js files.

## Dependencies
---
- lodash
- nodemon
- eslint
- babel
- fs

## How to use
---
Available functions:
- ```const chainName = chain.fileToChain("file.txt")``` - returns array of objects
- ```chain.printSentences(chainName, n-of sentences, high length limiter, low length limiter)``` - does not return anything, just print
- ```const ArrayName = chain.getNextArr(word,chainName)``` - returns array of words

### Steps
- Put your .txt file into data directory
- Create chain using fileToChain("yourfile.txt") function
- You can print sentences by using printSentences function
- You can get array of following words using getNextArr function