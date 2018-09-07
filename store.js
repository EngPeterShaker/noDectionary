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
    text = "Today is add";
    addFn(arg_array[1], arg_array[2]);
    break;
  case "list":
    text = "Today is list";
    getDict.getFileData(FILENAME);
    break;
  case "get":
    text = "Today is get";
    getDict.getFileData(FILENAME, arg_array[1]);
    break;
  case "remove":
    text = "Today is remove";
    break;
  case "clear":
    text = "Today is clear";
    break;
  default:
    text = "Looking forward to a newsss trial";
}
console.log(text);

function addFn(mykey, myvalue) {
  // var mykey = key.toString();
  //var myvalue = value.toString()
  let dict = {};
  //let ifFileExists = false;

  getDict.getFileData(FILENAME);

  dict[mykey] = myvalue;

  setDict.setFileData(FILENAME, dict);
}