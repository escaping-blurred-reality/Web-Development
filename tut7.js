console.log("Demonstration of functions in javasctipt");
function greet(name, wish="Thanks!")
{
    console.log(`Hey ${name}!, Have a nice  day. \n${wish}`);
    return `Hey ${name}!, Have a nice  day. \n${wish}`;
}
str=greet("riya","Thank you so much");
console.log(str);
//Initialising variable via a function
let mmyFuncVar=function(name, wish="Thanks!")
{
    console.log(`Hey ${name}!, Have a nice  day. \n${wish}`);
}
let val=mmyFuncVar("riya","Than you so much!" );
let i=100;
if(1){
    
    console.log(i);
}
console.log(i);
function f(name)
{
    i=10;
    console.log(i);
    console.log(`This is ${name}`);
}
f("riya");
console.log(i);

