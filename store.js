const fs = require("fs");
const process = require("process");
const getDict = require("./getDict.js");
const setDict = require("./setDict.js");

const FILE_NAME = "dictionary.json";
let arg_array = [FILE_NAME];

process.argv.forEach((val, index) => {
  if (index > 1) {
    arg_array.push(val);
  }
});
const chosenType = arg_array[1]; // typeof process (add , get , list , .. )

//IIFE for better switching ;)
(function() {
  if (chosenType === "get" || chosenType === "list") {
    getDict.getFileData(...arg_array);
    console.log(`staring ${chosenType} process`);
  } else if (
    chosenType === "add" ||
    chosenType === "remove" ||
    chosenType === "clear"
  ) {
    setDict.setFileData(...arg_array);
    console.log(`staring ${chosenType} process`);
  } else {
    console.log(
      ` What's [${chosenType}] ??? \n  I have never heard about that before !! .. would u try again plz :) `
    );
  }
})(chosenType);
