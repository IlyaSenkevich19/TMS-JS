const main = document.createElement("div");
main.classList.add("main");
root.append(main); 

const mainMenu = document.createElement("div");
mainMenu.classList.add("main_menu");
main.append(mainMenu);

let count = 0;
let completed = 0;

// START todoControl_First
const mainMenu_control = document.createElement("form");
mainMenu_control.classList.add("mainMenu_control");
mainMenu.append(mainMenu_control);

const todoControl_First = document.createElement("div");
todoControl_First.classList.add("todoControl_First");
mainMenu_control.append(todoControl_First);

const btnDelete_All = document.createElement("button");
btnDelete_All.classList.add("btnDelete_All");
todoControl_First.append(btnDelete_All);
btnDelete_All.textContent = "Delete All";

const btnDelete_Last = document.createElement("button");
btnDelete_Last.classList.add("btnDelete_Last");
todoControl_First.append(btnDelete_Last);
btnDelete_Last.textContent = "Delete Last";

const inputEnter = document.createElement("input");
inputEnter.classList.add("input_Enter");
todoControl_First.append(inputEnter);
inputEnter.placeholder = "Enter todo...";
inputEnter.value = "";

const btn_Add = document.createElement("button");
btn_Add.classList.add("btn_Add");
todoControl_First.append(btn_Add);
btn_Add.textContent = "Add";

// END todoControl_First

// START todoControl_Second
const todoControl_Second = document.createElement("div");
todoControl_Second.classList.add("todoControl_Second");
mainMenu_control.append(todoControl_Second);

const allCounter_Card = document.createElement("div");
allCounter_Card.classList.add("All_card");
allCounter_Card.textContent = `All: ${count}`;
todoControl_Second.append(allCounter_Card);

const completedTask = document.createElement("div");
completedTask.classList.add("completed");
completedTask.textContent = `Completed:${completed}`;
todoControl_Second.append(completedTask);

const btnShowAll = document.createElement("button");
btnShowAll.classList.add("showAll");
todoControl_Second.append(btnShowAll);
btnShowAll.textContent = "Show All";

const btnShowCompleted = document.createElement("button");
btnShowCompleted.classList.add("show_completed");
todoControl_Second.append(btnShowCompleted);
btnShowCompleted.textContent = "Show Completed";

const inputSearch = document.createElement("input");
inputSearch.classList.add("input_Search");
todoControl_Second.append(inputSearch);
inputSearch.placeholder = "Search..."
// END todoControl_Second



//START main_Card
const mainText = document.createElement("div");
main.append(mainText);
mainText.classList.add("main_text");

const textList = document.createElement("ul");
textList.classList.add("text_list");
mainText.append(textList);

//START logic TODO

//Creat clean array
const todos = [];

//Creat coun card
// let count = 0;

//SpecialId
function specialId(length){
    let uniqueId = "";
    const idSymbols = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm123456789";
    const idymbolsLength = idSymbols.length;
    for(let i = 0; i < length; i++){
        uniqueId += idSymbols.charAt(Math.floor(Math.random() * idymbolsLength))
    }
    return uniqueId
};

//Click Add - create li START
btn_Add.addEventListener("click", (event) => {
    event.preventDefault();
    const itemCard = document.createElement("li");
    itemCard.classList.add("item_Card");

    const allCard = document.querySelector(".All_card");  
    count++ // count +1 li
    allCard.textContent = `All:${count}`;

    
    textList.appendChild(itemCard);
    const randomId = specialId(10); // run specialId function
    itemCard.setAttribute("data-Id", randomId);

    const btnDone = document.createElement("button");
    btnDone.classList.add("button_Done");
    itemCard.append(btnDone);

    //btn li Done
    btnDone.addEventListener("click", (event) => {
        const btnCompleted = event.target; 
        const isChecked = btnCompleted.classList.toggle("completed_item");
        if(isChecked){
            btnCompleted.textContent = "✔";
        }else{
            btnCompleted.textContent = "";
        };
        btnCompleted.textContent = "✔";
        TextCard.style.textDecoration = "line-through";
        event.target.closest(".item_Card").style.backgroundColor = "rgb(41, 173, 34)";

        const completedCard = document.querySelector(".completed")
        completed++ ;
        completedCard.textContent = `Completed:${completed}`;
        // ПРОБЛЕМА НЕ РЕШЕНА isChecked!!!!
       
    });

      
      

    const TextCard = document.createElement("span");
    TextCard.classList.add("textTodo")
    TextCard.textContent = inputEnter.value;
    itemCard.append(TextCard);
    inputEnter.value = "";

    const btnEsc = document.createElement("button");
    btnEsc.classList.add("Esc");
    btnEsc.textContent = "X";
    itemCard.append(btnEsc);

    btnEsc.addEventListener("click", (event) => {
        itemCard.remove();
    });

    const spanDate = document.createElement("span");
    let nowDate = new Date().toLocaleDateString(); // create nowDate
    spanDate.classList.add("Date");
    itemCard.append(spanDate);
    spanDate.textContent = nowDate;

// Create new Obj and push todos
    const todo = {
        id: randomId,
        Date: nowDate ,
        text: TextCard.textContent,
        // isChecked: isChecked,
    }
    todos.push(todo)

    
    
});


// END li

// Delete All li
btnDelete_All.addEventListener("click", () => {
     itemCard.remove()
});

//Delete Last li
console.log(todos);
btnDelete_Last.addEventListener("click", (event) => {
    event.preventDefault();
    const lastItem = textList.lastElementChild
    if(lastItem){
    lastItem.remove()
}  
});




// const mainMenu_first = document.createElement("div");
// mainMenu_first.classList.add("mainMenu_first");
// mainMenu.append(mainMenu_first);
// mainMenu_first.style.height = "55%";



// const buttonControl_Text = ["Add", "Delete All", "Delete Last"]
// for(let i = 0; i < 3; i++){
//     const buttonControl = document.createElement("button");
//     buttonControl.classList.add("batton_" + i)
//     formFirst.append(buttonControl);
//     buttonControl.style.cssText = `
    
// `;
//     buttonControl.textContent = buttonControl_Text[i]
//     if(i === 0){
//     buttonControl.style.order = "1";
//     };
// };


// formFirst.append(input_todo);
// input_todo.placeholder = "Enter todo...";


// const mainMenu_second = document.createElement("div");
// mainMenu_second.classList.add("mainMenu_second");
// mainMenu.append(mainMenu_second);
// mainMenu_second.style.cssText = `
//     height:  50%;
//     width: 100%;
//     display: flex;
//     justify-content: space-around;
// `;

// const information = document.createElement("div");
// information.classList.add("information");
// mainMenu_second.append(information);
// information.style.cssText = `
//     display: flex;
//     justify-content: space-around;
//     width: 25%;
// `;

// const pAll = document.createElement("p");
// pAll.classList.add("All");
// information.append(pAll);
// pAll.style.cssText = `
//     width: 25%;
//     height: 40%;
//     font-size: 20px;
// `;
// pAll.textContent = `All: ###`;

// const pDone = document.createElement("p");
// pDone.classList.add("Done");
// information.append(pDone);
// pDone.style.cssText = `
//     width:50%;
//     height:40%;
//     font-size: 20px;
// `;
// pDone.textContent = `Completed: ###`;

// const formSecond = document.createElement("form");
// formSecond.classList.add("formSecond");
// mainMenu_second.append(formSecond);
// formSecond.style.cssText = `
//     display: flex;
//     width: 70%;
//     justify-content: space-around;
//     height:65%;
// `;

// const buttonSecond_Text = ["Show All", "Show Completed"]
// for(let j = 0; j < 2; j++){
//     const buttonSecond = document.createElement("button");
//     buttonSecond.classList.add("button_second");
//     formSecond.append(buttonSecond);
//     buttonSecond.textContent = buttonControl_Text[j];
//     buttonSecond.style.cssText = `

//     `;
// };

// const search = document.createElement("input");
// search.classList.add("search");
// formSecond.append(search);
// search.placeholder = "Search...";
// search.style.cssText = `
  
// `;

// // for(let y = 0; y < 2; y++){
// //     const boxTodo = document.createElement("li");
// //     boxTodo.classList.add("todo_box");
// //     textList.append(boxTodo);
    
    
// //     boxTodo.style.cssText = `
        // display: flex; 
        // justify-content: center;
        // border-radius: 10px;
        // border: 4px solid black;
        // width: 100%;
        // height: 40%;
//     `;

//     const formThird = document.createElement("form")
//     formThird.classList.add("formThird");
//     boxTodo.append(formThird);
//     formThird.style.cssText = `
//         width: 100%;
//         height:100%;
//         display: flex; 
//         justify-content: space-around;
//     `;

//     for(let n = 0; n < 2; n++){
//         const buttonThird = document.createElement("button");
//         buttonThird.classList.add("button_Third");
//         formThird.append(buttonThird);
//         buttonThird.style.cssText = `
//             width: 10%;
//             height: 40%;
//             border-radius: 10px;
//             border: 4px solid black;
//             margin-top: auto;
//             background-color: rgb(3, 196, 183);
//             font-size: 50px;
//             margin-bottom: 5%;
//             text-align: center;
            
//         `;
//         if (n % 2 !== 0){
//             buttonThird.textContent = "X";
//             buttonThird.style.cssText = `
//             width: 8%;
//             height: 40%;
//             border-radius: 10px;
//             border: 4px solid black;
//             margin-top: auto;
//             background-color: rgb(3, 196, 183);
//             font-size: 50px;
//             position:relative;
//             bottom: 50%;
//             left: 13%;
//             text-size:30px;

//             `;
//         };

//     const spanTodo = document.createElement("span");
//     spanTodo.classList.add("spanTodo");
//     formThird.append(spanTodo);
//     spanTodo.style.cssText = `
//         width:60%;
//         height:50%;
//         margin-top: 4%;
//         border-radius: 10px;
//         border:none;
//         background-color: white;
//     `;
//         if (n % 2 !== 0) {
//             spanTodo.style.cssText += `
//               width: 12%;
//               height: 30%;
//               border-radius: 10px;
//               position: relative;
//               top:35%;
//               right:10%
//             `;
//           }  
// }};

// // Layout End

// // Logic Start
// const battonAdd = document.querySelector(".batton_0");
// const todoList = document.querySelector(".text_list")
// battonAdd.addEventListener("click", function(){
//     const boxTodo = document.createElement("li");
//     boxTodo.classList.add("todo_box");
//     textList.append(boxTodo);
//     boxTodo.style.cssText = `
//         display: flex; 
//         justify-content: center;
//         border-radius: 10px;
//         border: 4px solid black;
//         width: 100%;
//         height: 40%;
//     `;
    
// });

// //date
// let nowDate = new Date().toLocaleDateString()

// //specialId
// function specialId(length){
//     let uniqueId = "";
//     const idSymbols = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm123456789";
//     const idymbolsLength = idSymbols.length;
//     for(let i = 0; i < length; i++){
//         uniqueId += idSymbols.charAt(Math.floor(Math.random() * idymbolsLength))
//     }
//     return uniqueId
// }
// const randomId = specialId(10)

// //
// const todos = [];
// //
// const todo = {
//     id: randomId,
//     Date: nowDate ,
//     text:'Play video games',
//     isChecked: true,
// }
// console.log(todo)
// //
// function setName(){
//     const todo = {
//         id: randomId,
//         Date: nowDate ,
//         text:'Play video games',
//         isChecked: true,
//     }
// // }
