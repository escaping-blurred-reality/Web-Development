const fs = require("fs");
//fs.mkdir("Thapa", (err) => {
//    console.log("directory succesfully created");
//    console.log(err);
//});
//fs.writeFile("Thapa/bio.txt", "I am Riya", (err) => {
//    console.log(err);
//    console.log("Successfully created file");
//});
//fs.appendFile("Thapa/bio.txt", " I love FSWD and CP and soon i be placed in a tech giant", (err) => {
//    console.log(err);
//    console.log("Successfully appened the data to file");
//});
//fs.readFile("Thapa/bio.txt", "utf-8", (err, data) => {
//    console.log(err);
//    console.log(data);
//});
//fs.rename("Thapa/bio.txt", "Thapa/mybio.txt", (err) => {
//fs.unlink("Thapa/mybio.txt", (err) => {
//    console.log(err);
//    console.log("File successfully deleted");
//});
fs.rmdir("Thapa", (err) => {
    console.log(err);
    console.log("directory successfully deleted");
});
