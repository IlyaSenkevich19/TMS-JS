const mainDivElement = document.createElement('div');
mainDivElement.classList.add('main');

document.getElementById('root').append(mainDivElement);
const buttonOneElement = document.createElement('button');
buttonOneElement.classList.add('button');
buttonOneElement.textContent = 'Delete All';
const buttonTwoElement = document.createElement('button');
buttonTwoElement.classList.add('button');
buttonTwoElement.textContent = 'Delete Last';
const inputElement = document.createElement('input');
inputElement.classList.add('input');
inputElement.setAttribute('placeholder', 'Enter todo...');
const buttonAddElement = document.createElement('button');
buttonAddElement.classList.add('button');
buttonAddElement.textContent = 'Add';
const textOneElement = document.createElement('div');
textOneElement.classList.add('text');
textOneElement.textContent = 'All: ';
const countAllElement = document.createElement('div');
const textTwoElement = document.createElement('div');
textTwoElement.classList.add('text');
textTwoElement.textContent = `Completed: `;
const buttonFourElement = document.createElement('button');
buttonFourElement.classList.add('button');
buttonFourElement.textContent = 'Show All';
buttonFourElement.style.cssText = 'width: 250px;';
const buttonFiveElement = document.createElement('button');
buttonFiveElement.classList.add('button');
buttonFiveElement.textContent = 'Show Comleted';
buttonFiveElement.style.cssText = 'width: 250px;';
const inputTwoElement = document.createElement('input');
inputTwoElement.classList.add('input');
inputTwoElement.style.cssText = 'width: 250px';
inputTwoElement.setAttribute('placeholder', 'Search...');
const innerOneElement = document.createElement('div');
innerOneElement.classList.add('todo');
innerOneElement.style.backgroundColor = 'rgb(146, 146, 146)';
const innerTwoElement = document.createElement('div');
innerTwoElement.classList.add('todo');
const wrapperTodoElement = document.createElement('div');

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
    wrapperTodoElement
);

textOneElement.prepend(countAllElement);

const checkboxOneElement = document.createElement('button');
checkboxOneElement.classList.add('checkbox');
checkboxOneElement.textContent = 'V';
checkboxOneElement.style.cssText = 'margin-top: 54px';
const innerTextOneElement = document.createElement('div');
innerTextOneElement.classList.add('innerText');
innerTextOneElement.textContent = 'Todo text';
const innerDivOneElement = document.createElement('div');
innerDivOneElement.classList.add('innerDiv');

innerOneElement.prepend(
    checkboxOneElement,
    innerTextOneElement,
    innerDivOneElement
);

const resetOneElement = document.createElement('button');
resetOneElement.classList.add('reset');
resetOneElement.textContent = 'X';
const dateOneElement = document.createElement('div');
dateOneElement.classList.add('date');
dateOneElement.textContent = 'Date';

innerDivOneElement.prepend(
    resetOneElement,
    dateOneElement
);

const checkboxTwoElement = document.createElement('button');
checkboxTwoElement.classList.add('checkbox');
checkboxTwoElement.textContent = ' ';
checkboxTwoElement.style.marginTop = '50px';
const innerTextTwoElement = document.createElement('div');
innerTextTwoElement.classList.add('innerText');
innerTextTwoElement.textContent = 'Todo text';
const innerDivTwoElement = document.createElement('div');
innerDivTwoElement.classList.add('innerDiv');

innerTwoElement.prepend(
    checkboxTwoElement,
    innerTextTwoElement,
    innerDivTwoElement
);

const resetTwoElement = document.createElement('button');
resetTwoElement.classList.add('reset');
resetTwoElement.textContent = 'X';
const dateTwoElement = document.createElement('div');
dateTwoElement.classList.add('date');
dateTwoElement.textContent = 'Date';

innerDivTwoElement.prepend(
    resetTwoElement,
    dateTwoElement
);

function buildTodoTemplate() {
    if (inputElement.value) {
        const todoText = inputElement.value;
        const idTodo = Date.now();
        const date = new Date().toLocaleDateString();
        const template = `<div class='todo' id='${idTodo}'>
                                <button class='checkbox'></button>
                                <div class='innerText'>${todoText}</div>
                                <div class='innerDiv'>
                                    <button class='reset'>X</button>
                                    <div class='date'>${date}</div>
                                </div>
                            </div>`
        const wrapper = document.createElement('div');
        wrapper.innerHTML = template;
        inputElement.value = '';
        return wrapperTodoElement.append(wrapper);
    };
};

function toggleCheckbox({target}){
    if (target.classList.contains('checkbox') && target.parentElement.classList.contains('checked')) {
        target.parentElement.classList.remove('checked');
        target.innerText = '';
    } else if (target.classList.contains('checkbox'))  {
        target.parentElement.classList.add('checked');
        target.innerText = 'V';
    };
};

function deleteTodo({target}){
    if (target.classList.contains('reset')) {
        target.parentElement.parentElement.parentElement.innerHTML = ''
    };
};

function deleteAll() {
    wrapperTodoElement.innerHTML = ''
}

buttonOneElement.addEventListener('click', deleteAll)
wrapperTodoElement.addEventListener('click', toggleCheckbox);
wrapperTodoElement.addEventListener('click', deleteTodo);
buttonAddElement.addEventListener('click', buildTodoTemplate);

