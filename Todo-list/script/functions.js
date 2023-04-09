import { todos, modaleElement } from '../app.js';

import { Todo } from './constructor.js';

import { updateLocaleStorage } from './localstorage.js';

import { buildTodoTemplate } from './template.js';

import { 
    inputElement,
    wrapperTodoElement,
    textOneElement,
    textTwoElement,
} from './layout.js';

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

function render() {
    const data = getItems('todos');
    const allCounter = JSON.parse(localStorage.getItem('todos'));

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
    modaleElement.classList.remove('active');
    wrapperTodoElement.innerHTML = '';
    todos.length = 0;
    render();
};

function deleteLast() {
    if(todos.length >= 1) {
        const todos = JSON.parse(getItems());
        todos.pop();
        updateLocaleStorage(todos);
        render();
    }
};

function showAll() {
    render();
};

function showCompleted() {
    const todos = document.querySelectorAll('.todo');

    todos.forEach(el => el.classList.contains('checked')
    ? el.setAttribute('style', 'display: flex')
    : el.setAttribute('style', 'display: none'));
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

function deleteAllElementsModale() {
    modaleElement.classList.add('active');
};

function hideModale() {
    modaleElement.classList.remove('active');
};


export { 
    handleSubmitForm,
    render,
    getItems,
    toggleCheckbox,
    deleteTodo,
    deleteAll,
    deleteLast,
    showAll,
    showCompleted,
    searchTodos,
    deleteAllElementsModale,
    hideModale,
};