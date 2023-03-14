const mainDiv = document.createElement("div");
mainDiv.classList.add("wrapper");

const body = document.body;

body.appendChild(mainDiv);

body.style.cssText = `
    margin: 0 auto;
    max-width:1500px;
    height: 1000px;
    display: flex;
    justifay-constant: space-between;
    align-items: center;
`
mainDiv.style.cssText = `
    display: flex;  
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    width: 85%;
    height: 60%;
    margin: 0 auto;
    background-color: #D3D3D3;
    border-radius: 20px;
    border: 4px solid black;
`
const topButton = document.createElement('div');
const bottomButton = document.createElement('div');
const toDoText = document.createElement('div');
mainDiv.appendChild(topButton);
mainDiv.appendChild(bottomButton);
mainDiv.appendChild(toDoText);

topButton.style.cssText = `
    display:flex;
    justify-content: space-between;
    width: 90%;
    height: 15%;
    margin: 0 auto;
    margin-top: 10px;
`
bottomButton.style.cssText = `
    display:flex;
    justify-content: space-between;
    width: 90%;
    height: 15%;
    margin: 0 auto;
    margin-top: 10px;
`
toDoText.style.cssText =`
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    width: 90%;
    height: 70%;
    margin: 0 auto;
   
`


const topButtonDeleteAll = document.createElement('div');
const topButtonDeleteLast = document.createElement('div');
const topButtonEnterTodo = document.createElement('input' );
const topButtonAdd = document.createElement('div');


topButtonEnterTodo.placeholder = "Enter todo...";


topButton.appendChild(topButtonDeleteAll);
topButton.appendChild(topButtonDeleteLast);
topButton.appendChild(topButtonEnterTodo);
topButton.appendChild(topButtonAdd);

topButtonDeleteAll.textContent = `Delete All`;
topButtonDeleteLast.textContent = `Delete Last`;
topButtonEnterTodo.textContent = `Enter todo`;
topButtonAdd.textContent = `Add`;

topButtonDeleteAll.style.cssText =`
    display:flex;
    align-items: center;
    justify-content: space-around;
    align-self: center;
    width: 15%;
    height: 70px;
    color: black;
    background-color: #7FFFD4;
    border-radius: 10px;
    border: 4px solid black;
    font-size: 20px;
`
topButtonDeleteLast.style.cssText = `
display:flex;
align-items: center;
justify-content: space-around;
align-self: center;
width: 15%;
height: 70px;
color: black;
background-color: #7FFFD4;
border-radius: 10px;
border: 4px solid black;
font-size: 20px;
`
topButtonEnterTodo.style.cssText = `
display:flex;
align-items: center;
text-align: center;
justify-content: space-around;
align-self: center;
width: 45%;
height: 70px;
color: black;
background-color: white;
border-radius: 10px;
border: 4px solid black;
font-size: 20px;
`
topButtonAdd.style.cssText = `
display:flex;
align-items: center;
justify-content: space-around;
align-self: center;
width: 15%;
height: 70px;
color: black;
background-color: #7FFFD4;
border-radius: 10px;
border: 4px solid black;
font-size: 20px;
`


const bottomButtonAll = document.createElement('div');
const bottomButtonCompleted = document.createElement('div');
const bottomButtonShowAll = document.createElement('div');
const bottomButtonShowCompleted = document.createElement('div');
const bottomButtonSearch = document.createElement('input');


bottomButton.appendChild(bottomButtonAll);
bottomButton.appendChild(bottomButtonCompleted);
bottomButton.appendChild(bottomButtonShowAll);
bottomButton.appendChild(bottomButtonShowCompleted);
bottomButton.appendChild(bottomButtonSearch);


bottomButtonAll.textContent = "All: 2";
bottomButtonCompleted.textContent = "Completed: 1";
bottomButtonShowAll.textContent = "Show All";
bottomButtonShowCompleted.textContent = "Show Completed";
bottomButtonSearch.placeholder = "Search..."

bottomButtonAll.style.cssText = `
display:flex;
align-items: center;
justify-content: space-around;
align-self: center;
width: 6%;
height: 70px;
font-size: 22px;
color: grey;
`
bottomButtonCompleted.style.cssText = `
display:flex;
align-items: center;
justify-content: space-around;
align-self: center;
width: 12%;
height: 70px;
font-size: 20px;
color: grey;
`
bottomButtonShowAll.style.cssText = `
display:flex;
align-items: center;
justify-content: space-around;
align-self: center;
width: 23%;
height: 70px;
color: black;
background-color: #7FFFD4;
border-radius: 10px;
border: 4px solid black;
font-size: 20px;
`
bottomButtonShowCompleted.style.cssText = `
display:flex;
align-items: center;
justify-content: space-around;
align-self: center;
width: 23%;
height: 70px;
color: black;
background-color: #7FFFD4;
border-radius: 10px;
border: 4px solid black;
font-size: 20px;
`
bottomButtonSearch.style.cssText = `
display:flex;
text-align: center;
align-items: center;
justify-content: space-around;
align-self: center;
width: 23%;
height: 70px;
color: black;
border-radius: 10px;
border: 4px solid black;
font-size: 20px;
`


const todoListFirst = document.createElement('div');
const todoListSecond = document.createElement('div');

toDoText.appendChild(todoListFirst);
toDoText.appendChild(todoListSecond);

todoListFirst.style.cssText = `
display:flex;
align-items: center;
justify-content: space-around;
align-self: center;
width: 70%;
height: 40%;
margin: 0 auto;
border-radius: 10px;
border: 4px solid black;
margin-top: 20px;
background-color: grey;
`

todoListSecond.style.cssText = `
display:flex;
align-items: center;
justify-content: space-around;
align-self: center;
width: 70%;
height: 40%;
margin: 0 auto;
border-radius: 10px;
border: 4px solid black;
margin-bottom: 20px
`


const todoListFirstDone = document.createElement('div');
const todoListFirstText = document.createElement('input');
const todoListFirstDate = document.createElement('div');


todoListFirst.appendChild(todoListFirstDone);
todoListFirst.appendChild(todoListFirstText);
todoListFirst.appendChild(todoListFirstDate);

const todoListFirstDateExit = document.createElement('div');
const todoListFirstDateD = document.createElement('input');

todoListFirstDate.appendChild(todoListFirstDateExit);
todoListFirstDate.appendChild(todoListFirstDateD);


todoListFirstText.placeholder = "Todo text"
todoListFirstDateD.placeholder = "Date"
todoListFirstDateExit.textContent = "X"



todoListFirstDone.style.cssText = `
    width: 8%;
    height: 25%;
    background-color: #7FFFD4;
    border-radius: 10px;
    border: 4px solid black;
    font-size: 20px;
`

todoListFirstText.style.cssText = `
display:flex;
text-align: center;
align-items: center;
justify-content: space-around;
align-self: center;
width: 55%;
height: 70px;
color: black;
border-radius: 10px;
border: 1px solid white;
font-size: 20px;
`

todoListFirstDate.style.cssText = `
    display: flex;
    justify-content: space-between;    
    flex-direction: row-reverse; 
    flex-wrap: wrap;
    width: 20%;
    height: 90%;
  
`
todoListFirstDateExit.style.cssText = `
width: 35%;
height: 22%;
display: flex;
justify-content: center;
align-items: center;
background-color: #7FFFD4;
border-radius: 10px;
border: 4px solid black;
font-size: 20px;

`
todoListFirstDateD.style.cssText = `
display: flex;
text-align: center;
width: 70%;
height: 20%;
border-radius: 6px;
border: 1px solid white;
font-size: 20px;
margin-bottom: 10px;
`



const todoListSecondDone = document.createElement('div');
const todoListSecondText = document.createElement('input');
const todoListSecondDate = document.createElement('div');


todoListSecond.appendChild(todoListSecondDone);
todoListSecond.appendChild(todoListSecondText);
todoListSecond.appendChild(todoListSecondDate);

const todoListSecondDateExit = document.createElement('div');
const todoListSecondDateD = document.createElement('input');

todoListSecondDate.appendChild(todoListSecondDateExit);
todoListSecondDate.appendChild(todoListSecondDateD);


todoListSecondText.placeholder = "Todo text"
todoListSecondDateD.placeholder = "Date"
todoListSecondDateExit.textContent = "X"



todoListSecondDone.style.cssText = `
    width: 8%;
    height: 25%;
    background-color: #7FFFD4;
    border-radius: 10px;
    border: 4px solid black;
    font-size: 20px;
`

todoListSecondText.style.cssText = `
display:flex;
text-align: center;
align-items: center;
justify-content: space-around;
align-self: center;
width: 55%;
height: 70px;
color: black;
border-radius: 10px;
border: 1px solid white;
font-size: 20px;
`

todoListSecondDate.style.cssText = `
    display: flex;
    justify-content: space-between;    
    flex-direction: row-reverse; 
    flex-wrap: wrap;
    width: 20%;
    height: 90%;
  
`
todoListSecondDateExit.style.cssText = `
width: 35%;
height: 22%;
display: flex;
justify-content: center;
align-items: center;
background-color: #7FFFD4;
border-radius: 10px;
border: 4px solid black;
font-size: 20px;

`
todoListSecondDateD.style.cssText = `
display: flex;
text-align: center;
width: 70%;
height: 20%;
border-radius: 6px;
border: 1px solid white;
font-size: 20px;
margin-bottom: 10px;
`