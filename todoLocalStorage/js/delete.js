import { todos } from "./todo.js";
import { setName } from "./localstorage.js";


function deleteAll(e) {
    let remov = document.querySelectorAll(".mediumDiv");
    remov.forEach((elem) => elem.remove());
    todos.length = 0;
    setName("todos", todos);
  }

  function deleteOne (event) {
    if (event.target.classList.contains("cross")) {
      event.target.parentElement.parentElement.parentElement.remove();
    }
    todos.forEach(function (elem, index) {
      if (String(elem.id) === String(event.target.parentElement.parentElement.parentElement.id)) {
        todos.splice(index, 1);
      }
    });
    setName("todos", todos);
  }
  export {deleteAll, deleteOne}