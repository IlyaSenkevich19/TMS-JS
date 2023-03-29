
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

menuButtonDel.addEventListener ('click', () => {
    let delElemen = document.querySelectorAll('.item');
    delElemen.forEach((element) => {
        element.remove();
        todos.length = 0;
        setName()
    });
});


const menuInput = document.createElement("input");
toDoMenu.append(menuInput);
menuInput.classList.add('input');
menuInput.setAttribute('placeholder', 'Enter todo...')

const menuButtonAdd = menuButtonDel.cloneNode();
toDoMenu.append(menuButtonAdd);
menuButtonAdd.innerHTML = "Add";




// Добавление блоков
let todos = [];

function setName(){
    localStorage.setItem('todos', JSON.stringify(todos));
   }

function getName(todos) {
    return JSON.parse(localStorage.getItem(todos));
}

function createDiv() {
    const toDoItem = document.createElement("div");
    toDoItem.classList.add('item');
    app.append(toDoItem)
    
    function isChecke1(){
            if (itemChek.innerHTML =' '){
                return ' '
            } else{
                return '✓'
            };
        }

    const itemChek = document.createElement("button");
    toDoItem.append(itemChek);
    itemChek.classList.add('item__chek');
    itemChek.innerHTML =' '
    let i = 0;
    itemChek.addEventListener ('click', ()=>{
    i++;   
    if( i%2===0){
        itemChek.innerHTML =' '
        setName()
    } else {
        itemChek.innerHTML ='✓'
        setName()
    };
    if (itemChek.innerHTML ==='✓' ){
        toDoItem.classList.add('itemNew');
        itemText.classList.add('item__textNew');
    } else{
        toDoItem.classList.remove('itemNew');
        itemText.classList.remove('item__textNew');
    };
    setName()
    });
    
    const itemText = document.createElement("p");
    toDoItem.append(itemText);
    itemText.classList.add('item__text');
    itemText.innerHTML = menuInput.value;
    menuInput.value = "";

    const itemEnd = document.createElement("div");
    toDoItem.append(itemEnd);
    itemEnd.classList.add('item__end');

    const itemClose = itemChek.cloneNode();
    itemEnd.append(itemClose);
    itemClose.classList.add('item__close');
    itemClose.innerHTML = "X";
    itemClose.addEventListener ('click' ,()=>{
        toDoItem.remove();
    })

    let date = new Date();
    const itemDate = document.createElement("p");
    itemEnd.append(itemDate);
    itemDate.innerHTML = date.getDate() +'.0'+ date.getMonth()  +'.'+ date.getFullYear();
    itemDate.classList.add('item__date');
    
    let todo ={
        id :  date.getMilliseconds(),
        date: itemDate.textContent,
        text: itemText.textContent,
        isChecked : isChecke1(),
    }
    todos.push(todo);

    setName();
} 
menuButtonAdd.addEventListener('click', ()=>createDiv())
 

//загрузка страницы
function createLocalDivs(obj){
    const toDoItem = document.createElement("div");
    toDoItem.classList.add('item');
    app.append(toDoItem)

   

    const itemChek = document.createElement("button");
    toDoItem.append(itemChek);
    itemChek.classList.add('item__chek');
    itemChek.innerHTML = obj.isChecked;
    let i = 0;   
    itemChek.addEventListener ('click', ()=>{
    i++;   
    if( i%2===0){
        itemChek.innerHTML =''
        setName()
    } else {
        itemChek.innerHTML ='✓'
        setName()
    };
    if (itemChek.innerHTML ==='✓' ){
        toDoItem.classList.add('itemNew');
        itemText.classList.add('item__textNew');
    } else{
        toDoItem.classList.remove('itemNew');
        itemText.classList.remove('item__textNew');
    };
    
    });
    
    const itemText = document.createElement("p");
    toDoItem.append(itemText);
    itemText.classList.add('item__text');
    itemText.innerHTML = obj.text;

    const itemEnd = document.createElement("div");
    toDoItem.append(itemEnd);
    itemEnd.classList.add('item__end');

    const itemClose = itemChek.cloneNode();
    itemEnd.append(itemClose);
    itemClose.classList.add('item__close');
    itemClose.innerHTML = "X";
    itemClose.addEventListener ('click' ,()=>{
        toDoItem.remove();
    })

    const itemDate = document.createElement("p");
    itemEnd.append(itemDate);
    itemDate.innerHTML = obj.date;
    itemDate.classList.add('item__date');
}


document.addEventListener("DOMContentLoaded", () => {
    if (getName("todos")) {
      let colect = getName("todos");
      colect.forEach(function (elem) {
        todos.push(elem);
      });
      todos.forEach(function (elem) {
        app.append(createLocalDivs(elem));
    });
  }
});