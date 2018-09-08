const fs = require("fs");

let content;
module.exports = {
  getFileData: (fileName, type, key) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        throw err;
      } else {
        // if get
        if (type === "get") {
          contents = JSON.parse(data);
          console.log(`the value of ${key} is ${contents[key]}`);
        } else if (type === "list") {
          //if list
          console.log("Asynchronous read: " + data);
        } else {
          console.log("elese");
          return data;
        }
      }
    });
  },
  getFileDataSync: fileName => {
    function readContent(cb) {
      fs.readFile(fileName, "utf-8", function(err, content) {
        if (err) return cb(err);
        cb(null, content);
      });
    }
    readContent(function(err, content) {
      return content;
    });
  }
};
