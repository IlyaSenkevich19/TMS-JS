const mainDiv = document.createElement("div");
mainDiv.classList.add("wrapper");

const body = document.body;

body.appendChild(mainDiv);

const topButton = document.createElement("div");
const bottomButton = document.createElement("div");
const toDoText = document.createElement("div");
mainDiv.appendChild(topButton);
mainDiv.appendChild(bottomButton);
mainDiv.appendChild(toDoText);

topButton.classList.add("topButton");
bottomButton.classList.add("bottomButton");
toDoText.classList.add("toDoText");

const topButtonDeleteAll = document.createElement("button");
const topButtonDeleteLast = document.createElement("button");
const topButtonEnterTodo = document.createElement("input");
const topButtonAdd = document.createElement("button");

topButtonDeleteAll.classList.add("topButtonDeleteAll");
topButtonDeleteLast.classList.add("topButtonDeleteLast");
topButtonEnterTodo.classList.add("topButtonEnterTodo");
topButtonAdd.classList.add("topButtonAdd");

topButtonEnterTodo.placeholder = "Enter todo...";

topButton.appendChild(topButtonDeleteAll);
topButton.appendChild(topButtonDeleteLast);
topButton.appendChild(topButtonEnterTodo);
topButton.appendChild(topButtonAdd);

topButtonDeleteAll.textContent = `Delete All`;
topButtonDeleteLast.textContent = `Delete Last`;
topButtonEnterTodo.textContent = `Enter todo`;
topButtonAdd.textContent = `Add`;

const bottomButtonAll = document.createElement("input");
const bottomButtonCompleted = document.createElement("input");
const bottomButtonShowAll = document.createElement("button");
const bottomButtonShowCompleted = document.createElement("button");
const bottomButtonSearch = document.createElement("input");

bottomButtonAll.classList.add("bottomButtonAll");
bottomButtonCompleted.classList.add("bottomButtonCompleted");
bottomButtonShowAll.classList.add("bottomButtonShowAll");
bottomButtonShowCompleted.classList.add("bottomButtonShowCompleted");
bottomButtonSearch.classList.add("bottomButtonSearch");

bottomButton.appendChild(bottomButtonAll);
bottomButton.appendChild(bottomButtonCompleted);
bottomButton.appendChild(bottomButtonShowAll);
bottomButton.appendChild(bottomButtonShowCompleted);
bottomButton.appendChild(bottomButtonSearch);

bottomButtonAll.placeholder = "All: ";
bottomButtonCompleted.placeholder = "Completed: 1";
bottomButtonShowAll.textContent = "Show All";
bottomButtonShowCompleted.textContent = "Show Completed";
bottomButtonSearch.placeholder = "Search...";

const todoListFirst = document.createElement("div");
const todoListSecond = document.createElement("div");

todoListFirst.classList.add("todoListFirst");
todoListSecond.classList.add("todoListSecond");

//toDoText.appendChild(todoListFirst);
// toDoText.appendChild(todoListSecond);

const todoListFirstDone = document.createElement("button");
const todoListFirstText = document.createElement("div");
const todoListFirstDate = document.createElement("div");

todoListFirstDone.classList.add("todoListFirstDone");
todoListFirstText.classList.add("todoListFirstText");
todoListFirstDate.classList.add("todoListFirstDate");

const todoListFirstDateExit = document.createElement("button");
const todoListFirstDateD = document.createElement("div");

todoListFirstDateExit.classList.add("todoListFirstDateExit");
todoListFirstDateD.classList.add("todoListFirstDateD");

todoListFirstDone.textContent = "V";
todoListFirstText.placeholder = "Todo text";
todoListFirstDateD.placeholder = "Date";
todoListFirstDateExit.textContent = "X";

const id = new Date();
    const todos = topButtonEnterTodo.value;
    const data = new Date();
    let todosText = null;

function enter() {
  if (topButtonEnterTodo.value) {
    ++bottomButtonAll.value;
    
     todosText = `<div class = 'todoListFirst' id'${id}'>
        <button class = "todoListFirstDone"></button>
        <div class = 'todoListFirstText'>${topButtonEnterTodo.value}</div>
        <div class = "todoListFirstDate">
        <button class = 'todoListFirstDateExit'>X</button>
        <div class = 'todoListFirstDateD'>${data.toLocaleDateString()}</div>
        </div>
        </div>
        `;
    const wrar = document.createElement("div");
    wrar.classList.add("wrarr");
    wrar.innerHTML = todosText;
    topButtonEnterTodo.value = "";
    return toDoText.append(wrar);
  }
}

function DeleteAll() {
  bottomButtonAll.value = 0;
  bottomButtonCompleted.value = 0;
  return (toDoText.innerHTML = "");
}

function DeleteLast() {
   return toDoText.lastChild.remove(), --bottomButtonAll.value;

    
}

function deleteTodo({ target }) {
  if (target.classList.contains("todoListFirstDateExit")) {
    --bottomButtonAll.value;
    return target.parentElement.parentElement.parentElement.remove();
  }
}

function done({ target }) {
  if (target.classList.contains("todoListFirstDone") && !target.parentElement.parentElement.classList.contains("done1")){
    target.parentElement.parentElement.classList.add("done1");
  ++bottomButtonCompleted.value;
  }
  
  else if (target.parentElement.parentElement.classList.contains("done1")){
    target.parentElement.parentElement.classList.remove("done1");
    --bottomButtonCompleted.value;
  
  }

  else if (!target.parentElement.parentElement.classList.contains("done1")){
    bottomButtonCompleted.value = 0;
  }
}


function ShowCompleted(){

let elee = toDoText.childNodes;
for (i = 0; i < elee.length; i++){

if(elee[i].classList.contains("done1")){
  console.log(elee[i])
  console.log("1")
}
else if(!elee[i].classList.contains("done1")){
console.log("2")
  return alert("Нет выполненных задач")

}
else if (toDoText){
  console.log("3")
  return alert("Нет задач")
}
}
}


topButtonAdd.addEventListener("click", enter);
topButtonDeleteAll.addEventListener("click", DeleteAll);
topButtonDeleteLast.addEventListener("click", DeleteLast);
toDoText.addEventListener("click", deleteTodo);
toDoText.addEventListener("click", done);
bottomButtonShowCompleted.addEventListener("click", ShowCompleted)

