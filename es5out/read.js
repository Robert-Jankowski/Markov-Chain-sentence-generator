"use strict";

const fs = require("fs");

exports.fileToArray = function fileToArray(fileName) {
  const newFileName = `../data/${fileName}`;
  return fs.readFileSync(newFileName, "utf-8").toLowerCase().replace(/,/g, "").replace(/\./g, ' .').replace(/--/g, "").replace("...", " ").replace(/\)/g, "").replace(/\(/g, "").replace(/- /g, " ").replace(/;/g, " ").replace(",", " ").replace(/!/g, ' !').replace(/\?/g, ' ?').replace(/['"]+/g, '').replace(10, "").replace(13, "").replace(/\n/g, '').replace(/\r/g, '').replace(/   /g, " ").replace(/  /g, " ").split(" ");
};