const todos = [];

// Карточка
function Todo(value) {
    this.text = value;
    this.id = new Date();
    this.date = new Date().toLocaleDateString();
    this.isCheked = '';
  }

  export {todos, Todo};