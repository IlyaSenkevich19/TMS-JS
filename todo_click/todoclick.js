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

let tod = document.createElement("div");
section.append(tod);

function Card(value) {
  this.value = value;
  this.firstMediumDiv = document.createElement("button");
  this.firstMediumDiv.classList.add("cheked");
  this.firstMediumDiv.innerHTML = `✓`;

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
  this.cross.innerHTML = `X`;
  this.dateDiv = document.createElement("input");
  this.dateDiv.classList.add("date");
  this.dateDiv.setAttribute("placeholder", "Date");
  this.dateDiv.value = new Date().toLocaleDateString();
  this.thirdMediumDiv.append(this.upDiv);
  this.upDiv.append(this.cross);
  this.thirdMediumDiv.append(this.dateDiv);

  this.div = document.createElement("div");
  this.div.classList.add("mediumDiv");
  this.div.append(this.firstMediumDiv);
  this.div.append(this.secondMediumDiv);
  this.div.append(this.thirdMediumDiv);
  return this.div
}


thirdUpperDiv.addEventListener("click", function (e) {
  tod.append(new Card(upperInput.value));
});

firstUpperDiv.addEventListener("click", function (e) {
  let remov = document.querySelectorAll(".mediumDiv");
  remov.forEach((elem) => elem.remove());
  let removChek = document.querySelectorAll(".mediumDivChek");
  removChek.forEach((elem) => elem.remove());
});

tod.addEventListener("click", function (event) {
  if (event.target.classList.contains("cross")) {
    event.target.parentNode.parentNode.parentNode.remove();
  }
 
});

tod.addEventListener("click", function(event){
  if (event.target.classList.contains("cheked")) {
    event.target.parentNode.childNodes[1].style.textDecoration = "line-through";
    event.target.parentNode.classList.remove("mediumDiv");
    event.target.parentNode.classList.add("mediumDivChek");
    event.target.classList.remove("cheked");
    event.target.classList.add("chekedOn");
  }
  else if (event.target.classList.contains("chekedOn") && event.target.parentNode.classList.contains("mediumDivChek")){
    event.target.parentNode.classList.remove("mediumDivChek");
    event.target.parentNode.classList.add("mediumDiv");
    event.target.classList.remove("chekedOn");
    event.target.classList.add("cheked");
    event.target.parentNode.childNodes[1].style.textDecoration = "none";
  }
})



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
