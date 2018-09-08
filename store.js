const fs = require("fs");
const process = require("process");
//const path = require("path");
const getDict = require("./getDict.js");
const setDict = require("./setDict.js");

const FILENAME = "dictionary.json";
// var myPath = path.basename('/foo/bar/baz/asdf/quux.html', '.html');
let arg_array = [];

process.argv.forEach((val, index) => {
  if (index > 1) {
    arg_array.push(val);
  }
});

switch (arg_array[0]) {
  case "add":
    setDict.setFileData(FILENAME, ...arg_array);
    console.log(`Successful ${arg_array[0]} process`);
    break;
  case "list":
  getDict.getFileData(FILENAME, ...arg_array);
    console.log(`Successful ${arg_array[0]} process`);
    break;
  case "get":
    getDict.getFileData(FILENAME, ...arg_array);
    console.log(`Successful ${arg_array[0]} process`);
    break;
  case "remove":
    setDict.setFileData(FILENAME, ...arg_array);
    console.log(`Successful ${arg_array[0]} process`);
    break;
  case "clear":
    setDict.setFileData(FILENAME, ...arg_array); //todo : spread
    console.log(`Successful ${arg_array[0]} process`);
    break;
  default:
    console.log(` What's [${arg_array[0]}] ??? \n  I have never heard of that before !! .. would u try again plz :) `);
}

