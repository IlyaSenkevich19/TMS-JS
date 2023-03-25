import { setName } from "./localstorage.js";
import { todos } from "./todo.js";

export function chek ({target}) {
    if (target.classList.contains("checked")) {
      target.parentElement.classList.remove("checked");
      target.classList.remove("checked");
      target.parentElement.childNodes[2].classList.remove("checked");
      todos.forEach(function (elem) {
        if (String(elem.id) === String(target.parentElement.id)) {
          elem.isCheked = '';
        }
      });
      setName("todos", todos);
    }
    else if (target.classList.contains("unchecked")) {
      target.parentElement.childNodes[2].classList.add("checked");
      target.parentElement.classList.add("checked");
      target.classList.add("checked");
      todos.forEach(function (elem) {
        if (String(elem.id) === String(target.parentElement.id)) {
          elem.isCheked = "checked";
        }
      });
      setName("todos", todos);
    }  
  }