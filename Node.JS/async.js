fs = require("fs");
//const data = fs.readFileSync("read.txt", 'utf-8');
//console.log(data);
//console.log("After the data");
fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(err);
    console.log(data);
});
console.log("After the data");