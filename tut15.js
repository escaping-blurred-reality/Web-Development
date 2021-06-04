console.log("This is the demonstration of Date and Time Object in Javascript");
let date = new Date();
console.log(date);
console.log(typeof (date));
let otherDate = new Date('june 18 1987');
//otherDate = new Date('8-2-2003 04:54:08')
otherDate = new Date('09/16/1976');
console.log(otherDate);
let a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getHours();
a = otherDate.getTime();
otherDate = new Date();
a = otherDate.getTime();
//a = otherDate.getMilliSeconds();
a = otherDate.getMonth();// indexing starts from 0;
console.log(a);// 0=sunday, 1=monday and so on
otherDate.setDate(3);
otherDate.setMonth(6);
otherDate.setFullYear(2021);
otherDate.setMinutes(0);
otherDate.setSeconds(0);
otherDate.setHours(0);
console.log(otherDate);
