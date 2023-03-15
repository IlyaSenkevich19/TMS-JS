const parentElement = document.querySelector("#root");
let wrapper = document.createElement("div");
parentElement.append(wrapper);
wrapper.style.cssText = `margin: 0 auto;
background-color: rgb(211,211,211);
padding: 30px;
width: 600px;
border: 3px solid #000000;
border-radius: 15px;
`;

let buttonDelete = document.createElement("button");
buttonDelete.innerHTML = "Delete All";
buttonDelete.style.cssText = `margin: 10px;
background-color: rgb(48, 213, 200);
padding: 20px;
border: 2px solid #000000;
border-radius: 5px;
width: 120px;
`;

let buttonAdd = document.createElement("button");
buttonAdd.innerHTML = "Add";
buttonAdd.style.cssText = `margin: 10px;
background-color: rgb(48, 213, 200);
padding: 20px;
border: 2px solid #000000;
border-radius: 5px;
width: 120px;
`;

let inputText = document.createElement("input");
inputText.setAttribute("placeholder", "Enter todo ...");
inputText.style.cssText = `margin: 10px;
background-color: rgb(255, 255, 255);
padding: 20px;
border: 2px solid #000000;
border-radius: 5px;
width: 250px;
`;

wrapper.append(buttonDelete);
wrapper.append(inputText);
wrapper.append(buttonAdd);

let wrappetToDo = document.createElement("div");
parentElement.append(wrappetToDo);
wrappetToDo.style.cssText = `
display: flex;
align-items: center;
    text-align: center;
    justify-content: space-around;
    border: 3px solid #000000;
    border-radius: 15px;
    margin-top: 20px;
`;

let checkboxInput = document.createElement("input");
checkboxInput.setAttribute("type", "checkbox");
wrappetToDo.append(checkboxInput);
checkboxInput.style.cssText = `
width: 40px;
    height: 40px;
    background: rgb(48, 213, 200);
    border: 2px solid #000000;    
    text-align: center;
`;

let toText = document.createElement("input");
wrappetToDo.append(toText);
toText.setAttribute("placeholder", "Todo text");
toText.style.cssText = `margin: 10px;
background-color: rgb(255, 255, 255);
padding: 20px;
border: 2px solid #FFFFFF;
border-radius: 5px;
width: 250px;
`;

let wrappetBreak = document.createElement("div");
wrappetToDo.append(wrappetBreak);
wrappetBreak.style.cssText = `
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;
    text-align: center;
`;

let buttonX = document.createElement("button");
buttonX.innerHTML = "X";
wrappetBreak.append(buttonX);
buttonX.style.cssText = `margin: 10px;
background-color: rgb(48, 213, 200);
padding: 5px;
border: 2px solid #000000;
border-radius: 5px;
width: 40px;
    height: 25px;
    text-align: center;
`;


let date = document.createElement("div");
wrappetBreak.append(date);
// let dateNow = new Date();
// date.innerHTML = dateNow;
date.innerHTML = "15.03.2023";
date.style.cssText = `margin: 10px;
background-color: rgb(211,211,211);
padding-top: 5px;
border: 2px solid #000000;
border-radius: 5px;
width: 100px;
    height: 25px;
    text-align: center;
`;

wrapper.append(wrappetToDo);

