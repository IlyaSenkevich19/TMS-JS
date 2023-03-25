import { chek } from "./js/chek.js";
import { container, thirdUpperDiv, firstUpperDiv } from "./js/layout.js";
import { render,clickAdd } from "./js/render.js";
import { deleteAll, deleteOne } from "./js/delete.js";

// Загрузка страницы
document.addEventListener("DOMContentLoaded", render);
// Верхний input и кнопка Add
thirdUpperDiv.addEventListener("click", clickAdd);
// Кнопка Delete All
firstUpperDiv.addEventListener("click", deleteAll);
// Удаление одной карточки
container.addEventListener("click", deleteOne);
// Нажатие на cheked
container.addEventListener("click", chek);


