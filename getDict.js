const fs = require("fs");

module.exports = {
  getFileData: (fileName, key) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        return console.error(err);
      } else {
        if (key) {
          contents = JSON.parse(data);
          console.log(`the value of ${key} is ${contents[key]}`);
        } else {
          // if list
          console.log("Asynchronous read: " + data);
        }
      }
    });
  }
};
