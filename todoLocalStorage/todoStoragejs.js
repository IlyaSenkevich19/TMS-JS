let mainDiv = document.querySelector("#root");

let section = document.createElement("div");
section.style.cssText = `
        width: 1000px;
        min-height: 800px;
        margin: 100px auto;
        background: #C8C8C8;
        border-radius: 5%;
        border: 6px solid black;

`;
section.id = "section";
mainDiv.append(section);

let upperBlock = document.createElement("div");
upperBlock.classList.add("upperBlock");
section.append(upperBlock);

let firstUpperDiv = document.createElement("button");
firstUpperDiv.classList.add("upButton");
firstUpperDiv.innerHTML = "Delete All";

let upperInput = document.createElement("input");
upperInput.classList.add("upperInput");
upperInput.setAttribute("placeholder", "Enter todo...");

let thirdUpperDiv = firstUpperDiv.cloneNode();
thirdUpperDiv.innerHTML = "Add";

upperBlock.append(firstUpperDiv);
upperBlock.append(upperInput);
upperBlock.append(thirdUpperDiv);

let container = document.createElement("div");
section.append(container);

const todos = [];

function getName(str) {
  return JSON.parse(localStorage.getItem(str));
}
function setName(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// Создание карточки на странице
function createDiv(obj) {
  let div = document.createElement("div");
  div.id = obj.id;
  obj.htmlText = `<button class='${obj.isCheked}'>✓</button>
  <input class="upperInput mediumInput" value='${obj.text}' placeholder="Todo text"/>
  <div class="thirdMediumDiv">
    <div class="upDiv">
      <button class="cross">X</button>
    </div>
    <input class="date" placeholder="Date" value='${obj.date}' />
  </div> `;
  div.innerHTML = obj.htmlText;
  if (obj.isCheked === "unchecked") {
    div.classList.add("mediumDiv");
  }
  else{
    div.classList.add("mediumDivChek");
  }
  
  return div;
}
// Карточка
function Todo(value) {
  this.text = value;
  this.id = new Date();
  this.date = new Date().toLocaleDateString();
  this.isCheked = "unchecked";
}

// Загрузка страницы
document.addEventListener("DOMContentLoaded", (event) => {
  if (getName("todos")) {
    let control = getName("todos");
    control.forEach(function (elem) {
      todos.push(elem);
    });
    todos.forEach(function (elem) {
      container.append(createDiv(elem));
    });
  }
});

// Верхний input И кнопка Add
thirdUpperDiv.addEventListener("click", function (e) {
  if (upperInput.value) {
    let todo = new Todo(upperInput.value);
    todos.push(todo);
    container.append(createDiv(todo));
    setName("todos", todos);
  }
});

// Кнопка Delete All
firstUpperDiv.addEventListener("click", function (e) {
  let remov = document.querySelectorAll(".mediumDiv");
  remov.forEach((elem) => elem.remove());
  let removChek = document.querySelectorAll(".mediumDivChek");
  removChek.forEach((elem) => elem.remove());
  todos.length = 0;
  setName("todos", todos);
});
// Удаление одной карточки
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("cross")) {
    event.target.parentElement.parentElement.parentElement.remove();
  }
  todos.forEach(function (elem, index) {
    if (String(elem.id) === String(event.target.parentElement.parentElement.parentElement.id)) {
      todos.splice(index, 1);
    }
  });
  setName("todos", todos);

});

// Нажатие на cheked
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("unchecked")) {
    event.target.parentElement.childNodes[2].style.textDecoration =
      "line-through";
    event.target.parentElement.classList.remove("mediumDiv");
    event.target.parentElement.classList.add("mediumDivChek");
    event.target.classList.remove("unchecked");
    event.target.classList.add("checked");
   
    todos.forEach(function (elem) {
      if (String(elem.id) === String(event.target.parentElement.id)) {
        elem.isCheked = "checked";
      }
    });
    setName("todos", todos);
  } else if (
    event.target.classList.contains("checked") &&
    event.target.parentElement.classList.contains("mediumDivChek")
  ) {
    event.target.parentElement.classList.remove("mediumDivChek");
    event.target.parentElement.classList.add("mediumDiv");
    event.target.classList.remove("checked");
    event.target.classList.add("unchecked");
    event.target.parentElement.childNodes[2].style.textDecoration = "none";
    event.target.parentElement.isCheked = "unchecked";
    todos.forEach(function (elem) {
      if (String(elem.id) === String(event.target.parentElement.id)) {
        elem.isCheked = "unchecked";
      }
    });
    setName("todos", todos);
  }
});
