const mainDivElement = document.createElement('div');

mainDivElement.classList.add('main');

document.getElementById('root').append(mainDivElement);

const buttonOneElement = document.createElement('button');
const buttonTwoElement = document.createElement('button');
const inputElement = document.createElement('input');
const buttonAddElement = document.createElement('button');
const textOneElement = document.createElement('div');
const countAllElement = document.createElement('div');
const textTwoElement = document.createElement('div');
const buttonFourElement = document.createElement('button');
const buttonFiveElement = document.createElement('button');
const inputTwoElement = document.createElement('input');
const innerOneElement = document.createElement('div');
const innerTwoElement = document.createElement('div');
const wrapperTodoElement = document.createElement('div');

buttonOneElement.classList.add('button');
buttonOneElement.textContent = 'Delete All';
buttonTwoElement.classList.add('button');
buttonTwoElement.textContent = 'Delete Last';
inputElement.classList.add('input');
inputElement.setAttribute('placeholder', 'Enter todo...');
buttonAddElement.classList.add('button');
buttonAddElement.textContent = 'Add';
textOneElement.classList.add('text');
textOneElement.textContent = 'All: ';
textTwoElement.classList.add('text');
textTwoElement.textContent = `Completed: `;
buttonFourElement.classList.add('button');
buttonFourElement.textContent = 'Show All';
buttonFourElement.style.cssText = 'width: 250px;';
buttonFiveElement.classList.add('button');
buttonFiveElement.textContent = 'Show Comleted';
buttonFiveElement.style.cssText = 'width: 250px;';
inputTwoElement.classList.add('input');
inputTwoElement.style.cssText = 'width: 250px';
inputTwoElement.setAttribute('placeholder', 'Search...');
innerOneElement.classList.add('todo');
innerOneElement.style.backgroundColor = 'rgb(146, 146, 146)';
innerTwoElement.classList.add('todo');
wrapperTodoElement.classList.add('wrapper');

mainDivElement.prepend(
    buttonOneElement,
    buttonTwoElement,
    inputElement,
    buttonAddElement,
    textOneElement,
    textTwoElement,
    buttonFourElement,
    buttonFiveElement,
    inputTwoElement,
    // innerOneElement,
    // innerTwoElement,
    wrapperTodoElement,
);

textOneElement.prepend(countAllElement);

const checkboxOneElement = document.createElement('button');
const innerTextOneElement = document.createElement('div');
const innerDivOneElement = document.createElement('div');

checkboxOneElement.classList.add('checkbox');
checkboxOneElement.textContent = 'V';
checkboxOneElement.style.cssText = 'margin-top: 54px';
innerTextOneElement.classList.add('innerText');
innerTextOneElement.textContent = 'Todo text';
innerDivOneElement.classList.add('innerDiv');

innerOneElement.prepend(
    checkboxOneElement,
    innerTextOneElement,
    innerDivOneElement,
);

const resetOneElement = document.createElement('button');
const dateOneElement = document.createElement('div');

resetOneElement.classList.add('reset');
resetOneElement.textContent = 'X';
dateOneElement.classList.add('date');
dateOneElement.textContent = 'Date';

innerDivOneElement.prepend(
    resetOneElement,
    dateOneElement,
);

const checkboxTwoElement = document.createElement('button');
const innerTextTwoElement = document.createElement('div');
const innerDivTwoElement = document.createElement('div');

checkboxTwoElement.classList.add('checkbox');
checkboxTwoElement.textContent = ' ';
checkboxTwoElement.style.marginTop = '50px';
innerTextTwoElement.classList.add('innerText');
innerTextTwoElement.textContent = 'Todo text';
innerDivTwoElement.classList.add('innerDiv');

innerTwoElement.prepend(
    checkboxTwoElement,
    innerTextTwoElement,
    innerDivTwoElement,
);

const resetTwoElement = document.createElement('button');
const dateTwoElement = document.createElement('div');

resetTwoElement.classList.add('reset');
resetTwoElement.textContent = 'X';
dateTwoElement.classList.add('date');
dateTwoElement.textContent = 'Date';

innerDivTwoElement.prepend(
    resetTwoElement,
    dateTwoElement,
);

export {
    inputElement,
    inputTwoElement,
    buttonAddElement,
    buttonOneElement,
    wrapperTodoElement,
    buttonTwoElement,
    textOneElement,
    buttonFourElement,
    textTwoElement,
    buttonFiveElement,
    };