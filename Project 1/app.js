console.log("Welcome to TO-DO App");
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = " ";
    console.log(notesObj);
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach((element, index) => {
        html += `<div class="card custom-card my-2 mx-2" style="width: 18rem;">
       <div class="card-body">
           <h5 class="card-title">Task ${index + 1}</h5>
           <p class="card-text">${element}</p>
           <button id="${index}" onclick="deleteTask(this.id)"class="btn btn-primary">Delete Task</button>
       </div>
   </div>`
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

    }
    else {
        notesElm.innerHTML = `Hurray!! Nothing stacked here!  <br>Want to add some To-Do , add it above 
        and GET IT DONE!`
    }

}
function deleteTask(index) {
    console.log('I am going to delete as I completed', index, `th/st/nd/rd`, 'task');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}
searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input', searchFunc);
function searchFunc() {
    let searchval = searchTxt.value;
    let cards = document.getElementsByClassName('custom-card');
    let cardsObj = Array.from(cards);
    console.log(cardsObj);
    for (i in cardsObj) {
        let cardTxt = cardsObj[i].getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(searchval)) {
            cardsObj[i].style.display = 'block';
        }
        else {
            cardsObj[i].style.display = 'none';
        }
    }
}