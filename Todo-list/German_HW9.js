
const mainDiv = document.querySelector("#root");

const section = document.createElement("div");
mainDiv.append(section);
section.classList.add('section');

const app = document.createElement("div");
section.append(app);
app.classList.add('app');


// Menu


const toDoMenu = document.createElement("div");
app.append(toDoMenu);
toDoMenu.classList.add('menu');

const menuButtonDel = document.createElement("button");
toDoMenu.append(menuButtonDel);
menuButtonDel.classList.add('menuButton');
menuButtonDel.innerHTML = "Delete All";

const menuInput = document.createElement("input");
toDoMenu.append(menuInput);
menuInput.classList.add('input');
menuInput.setAttribute('placeholder', 'Enter todo...')

const menuButtonAdd = menuButtonDel.cloneNode();
toDoMenu.append(menuButtonAdd);
menuButtonAdd.innerHTML = "Add";

// ToDo Items

const toDoItem = document.createElement("div");
app.append(toDoItem);
toDoItem.classList.add('item');

const itemChek = document.createElement("button");
toDoItem.append(itemChek);
itemChek.classList.add('item__chek');
itemChek.innerHTML = "✓";

const itemText = document.createElement("p");
toDoItem.append(itemText);
itemText.classList.add('item__text');
itemText.innerHTML = "Todo text";

const itemEnd = document.createElement("div");
toDoItem.append(itemEnd);
itemEnd.classList.add('item__end');

const itemClose = itemChek.cloneNode();
itemEnd.append(itemClose);
itemClose.classList.add('item__close');
itemClose.innerHTML = "X";

const itemDate = document.createElement("p");
itemEnd.append(itemDate);
itemDate.innerHTML = "Date";
itemDate.classList.add('item__date');

// ToDo Item Clone

const toDoItemClone = toDoItem.cloneNode(true);
app.append(toDoItemClone);

