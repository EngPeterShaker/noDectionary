const fs = require("fs");

module.exports = {
    getFileData: (fileName) => {
           fs.readFile(fileName, (err, contents) => {
               if (err) {
                   return console.error(err);
               }
               // dict = JSON.parse(contents)
               console.log("Asynchronous read: " + contents);
           });
        //    console.log(contents);
           
    }
};