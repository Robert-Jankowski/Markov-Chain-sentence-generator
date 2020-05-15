"use strict";

const _ = require("lodash");
const fs = require("fs");

function fileToArray() {
    const text = fs.readFileSync("../data/text.txt", "utf-8")
        .replace("-","")
        .replace(",","")
        .replace("."," .")
        .replace("--","")
        .split(" ");

    return text
}

const data = fileToArray()