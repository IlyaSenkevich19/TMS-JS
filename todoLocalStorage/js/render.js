import { todos, Todo } from "./todo.js";
import { container } from "./layout.js";
import { setName, getName } from "./localstorage.js";
import { upperInput } from "./layout.js";

//Загрузка страницы
function render (event) {
    if (getName("todos")) {
      todos.push(...getName("todos"));
      todos.forEach(function (elem) {
        container.append(createDiv(elem));
      });
    }
  }

  //Функция создания карточки
  function createDiv(obj) {
    let div = document.createElement("div");
    div.id = obj.id;
    obj.htmlText = `<button class='unchecked ${obj.isCheked}'>✓</button>
    <input class="mediumInput ${obj.isCheked}" value='${obj.text}' placeholder="Todo text"/>
    <div class="thirdMediumDiv">
      <div class="upDiv">
        <button class="cross">X</button>
      </div>
      <input class="date" placeholder="Date" value='${obj.date}' />
    </div> `;
    div.innerHTML = obj.htmlText;
    div.classList.add("mediumDiv");
    if (obj.isCheked === "checked") {
      div.classList.add("checked");
    }
    return div;
  }

//Создание карточки по клику
  function clickAdd(e) {
    if (upperInput.value) {
      let todo = new Todo(upperInput.value);
      todos.push(todo);
      container.append(createDiv(todo));
      setName("todos", todos);
    }
    upperInput.value = "";
  }

  export {render, createDiv, clickAdd}