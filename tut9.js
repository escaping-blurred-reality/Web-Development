console.log("This is the demonstration of DOM and website layout");
let a = document;
let b = document.forms;
let c = document.links;
let d = document.images;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
let elem = document.querySelector('.myclass');
console.log(elem);
console.log(elem.childNodes);
console.log(elem.children);
let nodeName = elem.children[0].nodeName;
console.log(nodeName);
let nodeType = elem.children[0].nodeType;
console.log(nodeType);
let t = document.querySelector('.container');
console.log(t.parentNode);
console.log(elem.firstChild);
console.log(elem.firstElementChild);
console.log(elem.lastChild);
console.log(elem.lastElementChild);
console.log(elem.childElementCount);
console.log(elem.firstElementChild.nextSibling);
console.log(elem.firstElementChild.nextElementSibling);