import { 
    inputElement,
    inputTwoElement,
    buttonOneElement,
    buttonAddElement,
    wrapperTodoElement,
    buttonTwoElement,
    buttonFourElement,
    buttonFiveElement,
} from './script/layout.js';

import { 
    handleSubmitForm,
    render,
    toggleCheckbox,
    deleteTodo,
    deleteAll,
    deleteLast,
    showAll,
    showCompleted,
    searchTodos,
    deleteAllElementsModale,
    hideModale,
} from './script/functions.js';

document.addEventListener('DOMContentLoaded', render);

const todos = JSON.parse(localStorage.getItem('todos')) || [];

const removeAllElement = document.querySelector('.modale-1__delete');
const modaleElement = document.querySelector('.wrapper-modale-1');
const cancelModaleElement = document.querySelector('.modale-1__cancel');

cancelModaleElement.addEventListener('click', hideModale);
cancelModaleElement.addEventListener('Enter', hideModale);
removeAllElement.addEventListener('click', deleteAll);
removeAllElement.addEventListener('Enter', deleteAll);
buttonOneElement.addEventListener('click', deleteAllElementsModale);
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

export { todos, modaleElement };