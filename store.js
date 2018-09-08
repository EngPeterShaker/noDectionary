const fs = require("fs");
const process = require("process");
const path = require("path");
const getDict = require("./getDict.js");
const setDict = require("./setDict.js");

const FILENAME = "dictionary.json";
// var myPath = path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// console.log(myPath);
let arg_array = [];

process.argv.forEach((val, index) => {
  if (index > 1) {
    arg_array.push(val);
    // console.log(`${index}: ${val}`);
  }
});

//::Todo::
fs.exists(FILENAME, exists => {
  if (!exists) {
    console.log("new file is created");
    setDict.setFileData(FILENAME, {});
  }
  // return exists ? true : false;
});

switch (arg_array[0]) {
  case "add":
    // text = "Today is add";
    setDict.setFileData(FILENAME, arg_array[0], arg_array[1], arg_array[2]); //todo : spread
    break;
  case "list":
    // text = "Today is list";
    getDict.getFileData(FILENAME, arg_array[0]);
    break;
  case "get":
    // text = "Today is get";
    getDict.getFileData(FILENAME, arg_array[0], arg_array[1]);
    break;
  case "remove":
    // text = "Today is remove";
    setDict.setFileData(FILENAME, arg_array[0], arg_array[1]); //todo : spread

    break;
  case "clear":
    // text = "Today is clear";
    setDict.setFileData(FILENAME, arg_array[0]); //todo : spread
    break;
  default:
    text = "Looking forward to a newsss trial";
}
console.log(`Successful ${arg_array[0]} process`);