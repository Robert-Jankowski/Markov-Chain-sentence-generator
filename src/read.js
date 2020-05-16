"use strict";
const fs = require("fs");

exports.fileToArray = function fileToArray() {
    return fs.readFileSync("../data/test.txt", "utf-8")
        .toLowerCase()
        .replace(/,/g, "")
        .replace(/\./g, ' .')
        .replace(/--/g,"")
        .replace("..."," ")
        .replace(/\)/g,"")
        .replace(/\(/g,"")
        .replace("- "," ")
        .replace(/;/g," ")
        .replace(","," ")
        .replace(/!/g, ' !')
        .replace(/\?/g, ' ?')
        .replace(/['"]+/g, '')
        .replace(10,"")
        .replace(13,"")
        .replace(/\n/g, '')
        .replace(/\r/g, '')
        .replace("   "," ")
        .replace(/  /g," ")
        .split(" ");
}
