console.log('This is the java script file for learning more on Events');
btn = document.getElementById('btn');
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown', func3);
ria = document.querySelector('.ria');
ria.addEventListener('mouseenter', func4);
ria.addEventListener('mouseleave', func5);
container = document.querySelector('.container');
console.log(container);
container.addEventListener('mousemove', func6);
function func1(e) {
    console.log('Thanks', e);
    e.preventDefault();
}
function func2(e) {
    console.log('Thanks, it is double click', e);
    e.preventDefault();
}
function func3(e) {
    console.log("This is mouse down event", e);
    console.log('It considers both right click and mouse down');
}
function func4(e) {
    console.log('Mouse Entered');
}
function func5(e) {
    console.log('Mouse Exit');
}
function func6(e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 154)`;
}