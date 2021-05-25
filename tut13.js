console.log('This is the demonstration of Local and Session Storage')
localStorage.setItem('Name1', 'Riya');
localStorage.setItem('Name', 'Soniya')
let name = localStorage.getItem('Name');
let name1 = localStorage.getItem('Name1');
console.log(name);
console.log(name1);
localStorage.removeItem('Name');
let todo = ['CP', 'Web Development', 'Internship'];
localStorage.setItem('task', JSON.stringify(todo));
let tasks = JSON.parse(localStorage.getItem('task'));
console.log(tasks);
//localStorage.clear();