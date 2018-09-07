const fs = require("fs");

module.exports = {
    setFileData: (fileName , dict) => {
       fs.writeFileSync(fileName, JSON.stringify(dict), (err) => {
           if (err) {
               return console.error(err);
           }
           console.log("this");
       });
    }
};