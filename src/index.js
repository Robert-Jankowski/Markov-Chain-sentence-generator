"use strict";

const _ = require("lodash");
const fs = require("fs");

function fileToArray() {
    const text = fs.readFileSync("../data/text.txt", "utf-8")
        .split(" ");
    const dotToNone = _.map(text, function (n) {
        return (n=== ".") ? null : n;
    })
    return dotToNone;
}

const data = fileToArray();
const noDuplicates = [... new Set(data)].filter((n) => (n!== null));