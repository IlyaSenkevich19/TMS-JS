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
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.id + ' ' + item.title;
        list.append(listItem);
    });
};

getTodos();