const fs = require("fs");
const util = require("util");

const setFileData = (fileName, type, key, value) => {
  const readFile = util.promisify(fs.readFile);

  fs.exists(fileName, exists => {
    if (!exists) {
      console.log("No Dictionaries file found ");
      let newObj = {};
      newObj[key] = value;

      fs.writeFileSync(fileName, JSON.stringify(newObj), err => {
        console.log(err);
      });
      console.log("No Problem \n A new file is created");
    } 
  });

  async function getStuff() {
    return await readFile(fileName, "utf-8");
  }
  getStuff()
    .then(data => {
      let newsss = JSON.parse(data);
      if (type === "add") {
        newsss[key] = value;
      } else if (type === "remove") {
        delete newsss[key];
      } else if (type === "clear") {
        newsss = {};
      }

      fs.writeFile(fileName, JSON.stringify(newsss), err => {
        if (err) {
          return console.error(err);
        }
      });
    })
    .catch(err => {
      //console.log(err);
    });
};
// exports function above so that other modules can use it
module.exports = { setFileData };
