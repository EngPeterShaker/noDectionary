const fs = require("fs");
const util = require("util");

const getDict = require("./getDict.js");

// let dataObj = '' ;

module.exports = {
    setFileData: (fileName ,type , key , value) => {
      //  const dataObj = await getDict.getFileDataSync(fileName);
        const readFile = util.promisify(fs.readFile);
        async function getStuff() {
  return await readFile(fileName, "utf-8");
}
getStuff().then(data => {
 let  newsss = JSON.parse(data);

  if (type === 'add') {
      console.log("this is add");
  newsss[key] = value;
}else if (type=== 'remove'){
    delete newsss[key];
}else if (type === 'clear'){
    newsss = {};
}
      
        fs.writeFileSync(fileName, JSON.stringify(newsss), err => {
          if (err) {
            return console.error(err);
          }
          console.log("this");
        });
})
        //   console.log( dataObj);

        //   console.log(JSON.parse(dataObj));
        
     
    }
};