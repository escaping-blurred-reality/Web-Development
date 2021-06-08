const fs = require("fs");
fs.writeFileSync('read.txt', "Welcome to my website");
fs.writeFileSync('read.txt', "Hey User! Welcome to my Website");
fs.appendFileSync('read.txt', " How are you ? I am fine, Thank you");
const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);
org_data = buf_data.toString();
console.log(org_data);
fs.renameSync('read.txt', 'readWrite.txt');
