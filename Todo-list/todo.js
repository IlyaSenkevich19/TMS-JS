//Start reset HTML style
const html = document.querySelector("html");
html.style.cssText = `
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
`;
const body = document.querySelector("body");
body.style.cssText = `
    height: 100vh;
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
`;
const root = document.getElementById("root");
root.style.cssText = `
    width: 100%;
    height: 100vh;
`
//End reset HTML style

//main
const main = document.createElement("div");
main.classList.add("main");
root.append(main);
main.style.cssText = `
    border: 4px solid black;
    border-radius: 10px;
    width: 98%;
    height: 93vh;
    margin: 0 auto;
    background-color: rgb(192, 192, 192);
`;

//mainMenu
const mainMenu = document.createElement("div");
mainMenu.classList.add("main_menu");
main.append(mainMenu);
mainMenu.style.cssText = `
    width: 97%;
    height: 25%;
    margin: 2% 2%;
`;

//mainText
const mainText = document.createElement("div");
main.append(mainText);
mainText.classList.add("main_Text");
mainText.style.cssText = `
    width: 90%;
    height:60%;
    margin-left: 5%;
`;


// textList
const textList = document.createElement("ul");
textList.classList.add("text_list");
mainText.append(textList);
textList.style.cssText = `
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

//mainMenu_first
const mainMenu_first = document.createElement("div");
mainMenu_first.classList.add("mainMenu_first");
mainMenu.append(mainMenu_first);
mainMenu_first.style.height = "70%";
//formFirst
const formFirst = document.createElement("form");
formFirst.classList.add("form");
mainMenu_first.append(formFirst);
formFirst.style.cssText = `
    display:flex;
    justify-content: space-around;
    height: 65%;
`;


//buttonControl
const buttonControl_Text = ["Add", "Delete All", "Delete Last"]
for(let i = 0; i < 3; i++){
    const buttonControl = document.createElement("button");
    buttonControl.classList.add(`button_${i}`)
    formFirst.append(buttonControl);
    buttonControl.style.cssText = `
    width: 15%;
    height: 90%;
    border-radius: 10px;
    border: 4px solid black;
    margin-top: auto;
    background-color: rgb(3, 196, 183);
    font-size: 30px;
`;
    buttonControl.textContent = buttonControl_Text[i]
    if(i === 0){
    buttonControl.style.order = "1";
    }
}

//input_todo
const input_todo = document.createElement("input");
input_todo.classList.add("input_todo");
formFirst.append(input_todo);
input_todo.placeholder = "Enter todo...";
input_todo.type = "text";
input_todo.style.cssText = `
    width: 45%;
    margin-top: 1%;
    border-radius: 10px;
    text-align: center;
    font-size: 30px;
    border: 4px solid black;
`;

//mainMenu_second
const mainMenu_second = document.createElement("div");
mainMenu_second.classList.add("mainMenu_second");
mainMenu.append(mainMenu_second);
mainMenu_second.style.cssText = `
    height:  55%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

//information
const information = document.createElement("div");
information.classList.add("information");
mainMenu_second.append(information);
information.style.cssText = `
    display: flex;
    justify-content: space-around;
    width: 25%;
`;



//pAll
const pAll = document.createElement("p");
pAll.classList.add("All");
information.append(pAll);
pAll.style.cssText = `
    width: 25%;
    height: 40%;
    font-size: 20px;
`;
pAll.textContent = `All: ###`;


//pDone
const pDone = document.createElement("p");
pDone.classList.add("Done");
information.append(pDone);
pDone.style.cssText = `
    width:50%;
    height:40%;
    font-size: 20px;
`;
pDone.textContent = `Completed: ###`;

//formSecond
const formSecond = document.createElement("form");
formSecond.classList.add("formSecond");
mainMenu_second.append(formSecond);
formSecond.style.cssText = `
    display: flex;
    width: 75%;
    justify-content: space-between;
    height:80%;
`

//buttonSecond
const buttonSecond_Text = ["Show All", "Show Completed"]
for(let j = 0; j < 2; j++){
    const buttonSecond = document.createElement("button");
    buttonSecond.classList.add("button_second");
    formSecond.append(buttonSecond);
    buttonSecond.textContent = buttonSecond_Text[j];
    buttonSecond.style.cssText = `
        width: 28%;
        height: 100%;
        border-radius: 10px;
        border: 4px solid black;
        font-size: 30px;
        background-color: rgb(3, 196, 183);
    `;
}

//search
const search = document.createElement("input");
search.classList.add("search");
formSecond.append(search);
search.placeholder = "Search...";
search.style.cssText = `
  text-align: center;
  font-size: 30px; 
  border-radius: 10px;
  border: 4px solid black;
`;

//boxTodo + formThird + buttonThird + inputTodo
for(let y = 0; y < 2; y++){
    const boxTodo = document.createElement("li");
    boxTodo.classList.add("todo_box");
    textList.append(boxTodo);
    boxTodo.style.cssText = `
        display: none; 
        justify-content: center;
        border-radius: 10px;
        border: 4px solid black;
        width: 100%;
        height: 40%;
    `;
    const formThird = document.createElement("form")
    formThird.classList.add("formThird");
    boxTodo.append(formThird);
    formThird.style.cssText = `
        width: 100%;
        height:100%;
        display: flex; 
        justify-content: space-around;
    `;

    for(let n = 0; n < 2; n++){
        const buttonThird = document.createElement("button");
        buttonThird.classList.add("button_Third");
        formThird.append(buttonThird);
        // buttonThird.textContent = "✓"
        buttonThird.style.cssText = `
            width: 10%;
            height: 40%;
            border-radius: 10px;
            border: 4px solid black;
            margin-top: auto;
            background-color: rgb(3, 196, 183);
            font-size: 50px;
            margin-bottom: 5%;
            text-align: center;
            
        `;
        if (n % 2 !== 0){
            buttonThird.textContent = "X";
            buttonThird.style.cssText = `
            width: 8%;
            height: 40%;
            border-radius: 10px;
            border: 4px solid black;
            margin-top: auto;
            background-color: rgb(3, 196, 183);
            font-size: 50px;
            position:relative;
            bottom: 50%;
            left: 13%;
            text-size:30px;

            `;
        }
        
       
    const spanTodo = document.createElement("span");
    spanTodo.classList.add("spanTodo");
    formThird.append(spanTodo);
    spanTodo.style.cssText = `
        width:60%;
        height:50%;
        margin-top: 4%;
        border-radius: 10px;
        border:none;
        background-color: white;
    `;
        if (n % 2 !== 0) {
            spanTodo.style.cssText += `
              width: 12%;
              height: 30%;
              border-radius: 10px;
              position: relative;
              top:35%;
              right:10%
            `;
          }  
}}

//Logics Enter input todo and btnAdd

const enterInput = document.querySelector(".input_todo");
const btnAdd = document.querySelector(".button_0");


// console.log(enterInput);
// console.log(btnAdd)
btnAdd.addEventListener("click", () => {
    const valueEnter = enterInput.value;
    console.log(valueEnter)

});







