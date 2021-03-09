const marks=12
console.log(`The Data type of "12 " is `+ (typeof marks));
let myVar=String(90);
console.log(myVar,(typeof myVar));
let date= String(new Date());
console.log(date,(typeof date));
let k=true;
console.log(k.toString());
let string=Number("343f3");
console.log(string, (typeof string));
let number=parseFloat('34.098');
console.log(number, (typeof number));
console.log(number.toFixed(20));
string="698";
number=34;
//type coercion
console.log(string+number);