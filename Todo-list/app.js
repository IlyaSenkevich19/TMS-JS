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

document.addEventListener('DOMContentLoaded', render);

const todos = JSON.parse(localStorage.getItem('todos')) || [];

function Todo (title, createdDate, id, isChecked ) {
    this.id = id || Date.now();
    this.createdDate = createdDate || new Date().toLocaleDateString();
    this.title = title;
    this.isChecked = isChecked || false;
};

function buildTodoTemplate(e) {
    const date = e.createdDate;
    const chekedAttr = e.isChecked ? 'checked' : '';
    const title = e.title || inputElement.value;
    const isChecked = chekedAttr ? 'V' : '';
    return `
    <div class='todo ${chekedAttr}' id='${e.id}'>
        <button class='checkbox'>${isChecked}</button>
        <div class='innerText'>${title}</div>
        <div class='innerDiv'>
            <button class='reset'>X</button>
            <div class='date'>${date}</div>
        </div>
    </div>`;
};

function handleSubmitForm() {
    const titleValue = inputElement.value;
    if (titleValue) {
        const todo = new Todo(titleValue);
        todos.unshift(todo);
        inputElement.value = '';
        updateLocaleStorage(todos);
        render();
    };
};

function updateLocaleStorage(data){
    const todos = JSON.stringify(data);
    localStorage.setItem('todos', todos);
};

function render() {
    const data = getItems('todos');
    // const allCounter = JSON.parse(localStorage.getItem('todos'));
    const allCounter = todos;

    if (!!allCounter) {
        const completedCounter = allCounter.filter(el => el['isChecked']);

        textOneElement.innerText = `All: ${allCounter.length}`;
        textTwoElement.innerText = `Completed: ${completedCounter.length}`;
    } else {
        textOneElement.innerText = `All: 0`;
        textTwoElement.innerText = `Completed: 0`;
    };

    if (data) {
        const todos = JSON.parse(data);
        const html = todos.reduce ((total, item) => {
            const template = buildTodoTemplate(item);
            return total + template;
        }, '');
        wrapperTodoElement.innerHTML = html;
    };
};

function getItems() {
    const items = JSON.stringify(localStorage.getItem('todos'));
    return items ? JSON.parse(items) : [];
};

function toggleCheckbox({target}) {
    if (target.classList.contains('checkbox')) {
        todos.forEach(el => {
            if (+target.parentElement.id === el.id) {
                if (el['isChecked']) {
                    el['isChecked'] = false;
                    target.parentElement.classList.remove('checked');
                    target.innerText = '';
                } else {
                    el['isChecked'] = true; 
                    target.parentElement.classList.add('checked');
                    target.innerText = 'V';
                }
            };
        })
    };
    const count = todos.filter(el => el['isChecked']).length;
    textTwoElement.innerText = `Completed: ${count}`;
    updateLocaleStorage(todos);
};

function deleteTodo({target}) {
    if (target.classList.contains('reset')) {
        const storageTodos = JSON.parse(localStorage.getItem('todos'));
        const deleteId = target.parentElement.parentElement.id;
        const updateTodos = storageTodos.filter(({id}) => id !== +deleteId);
        todos.length = 0;
        updateTodos.forEach(item => todos.unshift(item));
        updateLocaleStorage(updateTodos);
        render();
    };
};

function deleteAll() {
    localStorage.clear();
    wrapperTodoElement.innerHTML = '';
    todos.length = 0;
    render();
};

function deleteLast() {
    const todos = JSON.parse(getItems());
    todos.pop();
    updateLocaleStorage(todos);
    render();
};

function showAll() {
    render();
};

function showCompleted() {
    const todos = JSON.parse(getItems());
    const completedTodos = todos.filter(el => el['isChecked']);
    updateLocaleStorage(completedTodos);
    render();
    updateLocaleStorage(todos);
};

function searchTodos(e) {
    const todos = document.querySelectorAll('.todo');

    todos.forEach(el => {

        const elText = el.querySelector('.innerText').innerText;

        if (elText.includes(e.target.value)) {
            el.setAttribute('style', 'display: flex')
        } else el.setAttribute('style', 'display: none')
    });
};

buttonOneElement.addEventListener('click', deleteAll);
buttonOneElement.addEventListener('Enter', deleteAll);
wrapperTodoElement.addEventListener('click', toggleCheckbox);
wrapperTodoElement.addEventListener('click', deleteTodo);
buttonAddElement.addEventListener('click', handleSubmitForm);
buttonAddElement.addEventListener('Enter', handleSubmitForm);
buttonTwoElement.addEventListener('click', deleteLast);
buttonFourElement.addEventListener('click', showAll);
buttonFiveElement.addEventListener('click', showCompleted);
inputTwoElement.addEventListener('keyup', searchTodos);
inputElement.addEventListener('keypress', function (e) {
    if(e.key === 'Enter') {
        handleSubmitForm();
    };
});
