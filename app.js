const fs = require("fs");
const process = require("process");
const path = require('path');
const getDict = require("./getDict.js");
const setDict = require("./setDict.js");

const FILENAME = 'dictionary.json';
// var myPath = path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// console.log(myPath);
let arg_array = [];

process.argv.forEach((val, index) => {
    if (index > 1) {
        arg_array.push(val);
        // console.log(`${index}: ${val}`);
    }
});

switch (arg_array[0]) {
    case 'add':
        text = "Today is add";
        addFn(arg_array[1], arg_array[2]);
        break;
    case 'list':
        text = "Today is list";
        break;
    case 'get':
        text = "Today is get";
        break;
    case 'remove':
        text = "Today is remove";
        break;
    case 'clear':
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
    let ifFileExists= false;

     fs.exists(FILENAME, (exists) => {
         return exists ? true : false;
     });
   
    getDict.getFileData(FILENAME);

    dict[mykey] = myvalue;

   setDict.setFileData(FILENAME , dict)
    
}
