const body = document.querySelector("body");
const URL = "https://jsonplaceholder.typicode.com/todos";

function getTodos() {
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(new Error("Err"));
        }
      })
  });
}

function printTodos(todos) {
  const ul = document.createElement("ul");
  ul.classList.add("ul__list");
  body.append(ul);

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    li.classList.add("li__item");
    li.textContent = `${i+1}. ${todos[i].title}`;
    ul.append(li);
    li.style.listStyleType = "none";
  }
}

getTodos().then(todos => {
  printTodos(todos);
});
