const URL = 'https://jsonplaceholder.typicode.com/todos';

const todos = [];

function getTodos() {
    fetch(URL).then(res => res.json()).then(res => {
        todos.push(...res);
        printTodos(todos);
    })
};

function printTodos(items) {
    const list = document.createElement('ul');
    document.body.prepend(list);
    items.forEach(({id, title}) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${id} ${title}`;
        list.append(listItem);
    });
};

getTodos();