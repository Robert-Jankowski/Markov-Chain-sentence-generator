# Markov-Chain-sentence-generator
A Javascript implementation of Markov Chain used to generate sentences based on text file.

Documentation:

1. How it works ?
.TXT file is transformed into an array of words (unnecesary commas, hyphens, multiple spaces are being cut).
Then the array without duplicates is transformed into array of Word objects(key: String, next: Arr[Object]).
Words from previous array are being used as index of Word objects, the one-way connections are made.

2. File system
  
   Node.js project:
  -src: 
    index.js - user interface file
    read.js - read-from-file function is stored here
    chain.js - all other functions are stored here
  -data:
    A directory for .TXT files
    Imported .TXT files:
    - Harry Potter and the Sorcerer's Stone by J.K. Rowlings
    - Hamlet by William Shakespeare
    - Lalka by Bolesław Prus
  -es5out
    A directory with ES5 versions of .js files.
    
3. Depedencies
  -lodash
  -nodemon
  -eslint
  -babel
  -fs
  -axios (not used yet)
  
4. How to use
Available functions:
  const chainName = chain.fileToChain("file.txt");  -returns array of objects
  chain.printSentences(chainName, n-of sentences, high length limiter, low length limiter); -does not return anything, just print
  const ArrayName = chain.getNextArr(word,chainName);   -returns array of words
  
    Instruction: 
    1. Put your .txt file into data directory
    2. Create chain using fileToChain("yourfile.txt") function
    3. You can print sentences by using printSentences function
    4. You can get array of following words using getNextArr function
