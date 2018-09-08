const fs = require("fs");

  getFileData = (fileName, type, key) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        console.error(
          "There's no dictionary file , please set a new key/value pair to initialize it \n"
        );
        return console.error(err);
        // throw err;
      } else {
        // if get
        contents = JSON.parse(data);
        if (type === "get") {
          key !== undefined
            ? console.log(`the value of ${key} is ${contents[key]}`)
            : console.log("no key was provided \n pssst.. Do you mean [list]");
        } else if (type === "list") {
          //if list
          console.log(
            `ALL Dictionary file List : \n ${JSON.stringify(
              contents,
              null,
              "\t"
            )}`
          );
        } else {
          return data;
        }
      }
    });
  }
// exports function above so that other modules can use it  
module.exports = { getFileData };
