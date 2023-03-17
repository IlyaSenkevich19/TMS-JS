let mainDiv = document.querySelector("#root");

let section = document.createElement("div");
section.style.cssText = `
        width: 1000px;
        min-height: 800px;
        margin: 100px auto;
        background: #C8C8C8;
        border-radius: 5%;
        border: 6px solid black;

`;
section.id = "section";
mainDiv.append(section);

let upperBlock = document.createElement("div");
upperBlock.classList.add("upperBlock");
section.append(upperBlock);

let firstUpperDiv = document.createElement("button");
firstUpperDiv.classList.add("upButton");
firstUpperDiv.innerHTML = "Delete All";

let upperInput = document.createElement("input");
upperInput.classList.add("upperInput");
upperInput.setAttribute("placeholder", "Enter todo...");

let thirdUpperDiv = firstUpperDiv.cloneNode();
thirdUpperDiv.innerHTML = "Add";

upperBlock.append(firstUpperDiv);
upperBlock.append(upperInput);
upperBlock.append(thirdUpperDiv);

function Card(value) {
  this.value = value;
  this.firstMediumDiv = document.createElement("button");
  this.firstMediumDiv.classList.add("cheked");
  this.firstMediumDiv.innerHTML = ` <img src="D:/js TMS/lesson 1/TMS-JS/todo_click/resurs_click/free-icon-check-mark-3489824.png" id = "chekedImg" alt="" width="30%" height="50%">`;

  this.secondMediumDiv = upperInput.cloneNode();
  this.secondMediumDiv.classList.add("mediumInput");
  this.secondMediumDiv.placeholder = "Todo text";
  this.secondMediumDiv.value = this.value;

  this.thirdMediumDiv = document.createElement("div");
  this.thirdMediumDiv.classList.add("thirdMediumDiv");
  this.upDiv = document.createElement("div");
  this.upDiv.classList.add("upDiv");
  this.cross = document.createElement("button");
  this.cross.classList.add("cross");
  this.cross.innerHTML = `<img src="D:/js TMS/lesson 1/TMS-JS/todo_click/resurs_click/free-icon-cross-sign-8212742.png" id = "crossImg" alt="" width="40%" height="50%">`;
  this.dateDiv = document.createElement("input");
  this.dateDiv.classList.add("date");
  this.dateDiv.setAttribute("placeholder", "Date");
  this.dateDiv.value = `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`;
  this.thirdMediumDiv.append(this.upDiv);
  this.upDiv.append(this.cross);
  this.thirdMediumDiv.append(this.dateDiv);

  this.div = document.createElement("div");
  this.div.classList.add("mediumDiv");
  this.div.append(this.firstMediumDiv);
  this.div.append(this.secondMediumDiv);
  this.div.append(this.thirdMediumDiv);
}

let cards = [];
let i = 0;

thirdUpperDiv.addEventListener("click", function (e) {
  cards.push(new Card(upperInput.value));
  section.append(cards[i].div);
  i++;
});

firstUpperDiv.addEventListener("click", function (e) {
  let remov = document.querySelectorAll(".mediumDiv");
  remov.forEach((elem) => elem.remove());
});

section.addEventListener("click", function (event) {
  let arrMediumDiv = document.getElementsByClassName("mediumDiv");

  for (let i of arrMediumDiv) {
    i.addEventListener("click", function (event) {
      if (event.target.className === "cross") {
        i.remove();
      }
      if (event.target.id === "crossImg") {
        i.remove();
      }
      if (event.target.className === "cheked") {
        i.childNodes[1].style.textDecoration = "line-through";
        i.style.background = "DimGrey";
      }
      if (event.target.id === "chekedImg") {
        i.childNodes[1].style.textDecoration = "line-through";
        i.style.background = "DimGrey";
      }
    });
  }
});



// Extreme Level

// let secondSection = document.createElement("div");
// secondSection.style.cssText = `
//         width: 1500px;
//         height: 800px;
//         margin: 100px auto;
//         background: #C8C8C8;
//         border-radius: 50px;
//         border: 6px solid black;

// `;
// mainDiv.append(secondSection);

// let firstBlock = upperBlock.cloneNode();
// secondSection.append(firstBlock);

// let deleteAll = firstUpperDiv.cloneNode(true);
// deleteAll.style.width = "15%";
// let deleteLast = firstUpperDiv.cloneNode();
// deleteLast.style.width = " 15%";
// deleteLast.innerHTML = " Delete Last";
// let enterTodo = upperInput.cloneNode(true);
// enterTodo.style.width = " 50%";
// let add = firstUpperDiv.cloneNode(true);
// add.style.width = " 15%";
// firstBlock.append(deleteAll);
// firstBlock.append(deleteLast);
// firstBlock.append(enterTodo);
// firstBlock.append(add);

// let secondDiv = upperBlock.cloneNode();

// secondSection.append(secondDiv);

// let all = document.createElement("p");
// all.innerHTML = "All: 2";
// all.style.cssText = `
//         width: 8%;
//         color: DimGrey;
//         font-size: 35px;
//         padding-left: 30px;
// `;
// let complete = all.cloneNode();
// complete.innerHTML = " Completed: 1";
// complete.style.width = "15%";
// secondDiv.append(all);
// secondDiv.append(complete);

// let showAll = deleteAll.cloneNode();
// showAll.innerHTML = "Show All";
// showAll.style.width = "20%";
// secondDiv.append(showAll);

// let showComplited = showAll.cloneNode();
// showComplited.innerHTML = "Show Complited";
// secondDiv.append(showComplited);

// let search = enterTodo.cloneNode();
// search.style.width = "25%";
// search.placeholder = "Search";

// secondDiv.append(search);

// let secondBlock = document.createElement("div");
// secondBlock.classList.add("mediumDiv");


// secondSection.append(secondBlock);
// secondBlock.style.width = "60%";
// secondBlock.style.background = "DimGrey";

// let thirdBlock = document.createElement("div");
// thirdBlock.classList.add("mediumDiv");
// thirdBlock.style.width = "60%";
// secondSection.append(thirdBlock);
