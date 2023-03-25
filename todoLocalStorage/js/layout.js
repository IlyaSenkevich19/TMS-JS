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

let container = document.createElement("div");
section.append(container);

export {container, thirdUpperDiv, upperInput, firstUpperDiv}