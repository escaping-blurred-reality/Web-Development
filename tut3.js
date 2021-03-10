const nam="Riya";
const greeting="Good Afternnon";
console.log(greeting+' '+ nam);
//String functions
let html="<h1>This is h1 tag.</h1><p>This sis paragraph tag</p>";
console.log(html.length);
console.log(html);
console.log(html.indexOf('<'));
console.log(html.toUpperCase());
console.log(html.charAt(5));
console.log(html[9]);
console.log(html.substring(1,4));
console.log(html.slice(-10));
//console.log(html.replace('this','it'));
console.log(html.split('>'));
//Template Literals
let fruits=['mango','kiwi'];
let myhtml=`<h1>This is heading</h1>
            <p>This is Riya</p>
            <p>I like $(fruits[1]) and 
            $(fruits[0])
            `;
document.body.innerHTML=myhtml;
