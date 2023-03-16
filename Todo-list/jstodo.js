let mainDiv = document.querySelector("#root");

let section = document.createElement("div");
section.style.cssText = `
        width: 1000px;
        height: 800px;
        margin: 100px auto;
        background: #C8C8C8;
        border-radius: 5%;
        border: 6px solid black;

`;
mainDiv.append(section);

let upperBlock = document.createElement("div");
upperBlock.style.cssText = `
        width: 90%;
        height: 100px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

`;
section.append(upperBlock);
let firstUpperDiv = document.createElement("button");

firstUpperDiv.style.cssText = `
        width: 23%;
        height: 80%;
        background: aqua;
        border: 5px solid black;
        border-radius: 10px;
        font-size: 30px;
        color: Grey;
`;
firstUpperDiv.innerHTML = "Delete All";

let secondUpperDiv = document.createElement("input");
secondUpperDiv.style.cssText = `
        width: 40%;
        height: 70%;
        border: 5px solid black;
        border-radius: 10px;
        font-size: 30px;
        text-align: center;
        color: silver;
        outline-style: none;
    `;

secondUpperDiv.setAttribute("placeholder", "Enter todo...");
let thirdUpperDiv = firstUpperDiv.cloneNode();
thirdUpperDiv.innerHTML = "Add";
upperBlock.append(firstUpperDiv);
upperBlock.append(secondUpperDiv);
upperBlock.append(thirdUpperDiv);

let mediumDiv = document.createElement("div");
mediumDiv.style.cssText = `
        width: 90%;
        height: 150px;
        margin: 50px auto;
        border: 5px solid black;
        border-radius: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2%;

`;
section.append(mediumDiv);

let firstMediumDiv = document.createElement("button");

firstMediumDiv.style.cssText = `
        width: 10%;
        height: 35%;
        background: aqua;
        border: 5px solid black;
        border-radius: 10px;
        font-size: 30px;
        color: Grey;
`;
firstMediumDiv.innerHTML = ` <img src="D:/js TMS/lesson 1/TMS-JS/Todo-list/resurs/free-icon-check-mark-3489824.png" alt="" width="30%" height="50%">`;
let secondMediumDiv = secondUpperDiv.cloneNode();
secondMediumDiv.style.color = "black";
secondMediumDiv.placeholder = "Todo text";
secondMediumDiv.style.height = "50%";
secondMediumDiv.style.width = "60%";
secondMediumDiv.style.color = "DimGrey";
secondMediumDiv.style.border = "none";
let thirdMediumDiv = document.createElement("div");
thirdMediumDiv.style.cssText = `
        width: 20%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
`;
let upDiv = document.createElement("div");
upDiv.style.cssText = `
        height:40%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
`;
let cross = document.createElement("button");
cross.style.cssText = `
        width: 50%;
        height: 95%;
        background: aqua;
        border: 5px solid black;
        border-radius: 10px;
        font-size: 30px;
        color: Grey;
        text-align: center;
`;
cross.innerHTML = `<img src="D:/js TMS/lesson 1/TMS-JS/Todo-list/resurs/free-icon-cross-sign-8212742.png" alt="" width="40%" height="50%">`;
let dateDiv = document.createElement("input");
dateDiv.style.cssText = `
        height:40%;
        width: 97%;
        border-radius: 10px;
        font-size: 30px;
        text-align: center;
        color: grey;
        border: none;
        outline-style: none;
`;
dateDiv.setAttribute("placeholder", "Date");

mediumDiv.append(firstMediumDiv);
mediumDiv.append(secondMediumDiv);
mediumDiv.append(thirdMediumDiv);
thirdMediumDiv.append(upDiv);
upDiv.append(cross);
thirdMediumDiv.append(dateDiv);

let lowerDiv = mediumDiv.cloneNode(true);
section.append(lowerDiv);

// Extreme Level

let secondSection = document.createElement("div");
secondSection.style.cssText = `
        width: 1500px;
        height: 800px;
        margin: 100px auto;
        background: #C8C8C8;
        border-radius: 50px;
        border: 6px solid black;

`;
mainDiv.append(secondSection);

let firstBlock = upperBlock.cloneNode();
secondSection.append(firstBlock);

let deleteAll = firstUpperDiv.cloneNode(true);
deleteAll.style.width = "15%";
let deleteLast = firstUpperDiv.cloneNode();
deleteLast.style.width = " 15%";
deleteLast.innerHTML = " Delete Last";
let enterTodo = secondUpperDiv.cloneNode(true);
enterTodo.style.width = " 50%";
let add = firstUpperDiv.cloneNode(true);
add.style.width = " 15%";
firstBlock.append(deleteAll);
firstBlock.append(deleteLast);
firstBlock.append(enterTodo);
firstBlock.append(add);

let secondDiv = upperBlock.cloneNode();

secondSection.append(secondDiv);

let all = document.createElement("p");
all.innerHTML = "All: 2";
all.style.cssText = `
        width: 8%;
        color: DimGrey;
        font-size: 35px;
        padding-left: 30px;
`;
let complete = all.cloneNode();
complete.innerHTML = " Completed: 1";
complete.style.width = "15%";
secondDiv.append(all);
secondDiv.append(complete);

let showAll = deleteAll.cloneNode();
showAll.innerHTML = "Show All";
showAll.style.width = "20%";
secondDiv.append(showAll);

let showComplited = showAll.cloneNode();
showComplited.innerHTML = "Show Complited";
secondDiv.append(showComplited);


let search = enterTodo.cloneNode();
search.style.width = "25%";
search.placeholder = "Search";

secondDiv.append(search);

let secondBlock = lowerDiv.cloneNode(true);
secondSection.append(secondBlock);
secondBlock.style.width = "60%";
secondBlock.style.background = "DimGrey";

let thirdBlock = lowerDiv.cloneNode(true);
thirdBlock.style.width = "60%";
secondSection.append(thirdBlock);



