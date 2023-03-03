// Task 1

let obj = {
  name: "Kate",
  age: 25,
};

console.log(obj);

delete obj.age;
delete obj.name;

console.log(obj);

// Task 2

let obj2 = {
  name: "Kate",
  age: 25,
};

if (obj2.name === undefined) {
  console.log("false");
} else {
  console.log("true");
}

// Task 3

const student = {
  name: "John",
  age: 19,
  isHappy: true,
};

for (let key in student) {
  console.log(key);
}

for (let key in student) {
  console.log(student[key]);
}

// Task 4

const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);

// Task 5

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey2: 664, //пришлось долго страдать из-за двух Андреев в задании
  alexandra: 199,
};

let sum = 0;
let keyHM = 1;
for (let key in salaries) {
  sum += salaries[key];
  keyHM++;
}

console.log(keyHM);

let averageSalary = sum / keyHM;

console.log(averageSalary);

// Task 6

let user = {};

if (confirm("Хотите зарегистрироваться?")) {
  let login = prompt("Создайте логин");
  let password = prompt("Создайте пароль");
  user.loginUs = login;
  user.passwordUs = password;
} else {
  alert("До встречи!");
}

if (confirm("Желаете войти?")) {
  let log = prompt("Введите логин");
  let pas = prompt("Введите пароль");

  if (log === user.loginUs && pas === user.passwordUs) {
    alert("Добро пожаловать!");
  } else {
    alert("Увы, вам придется зарегистрироваться или ввести верные данные(");
  }
} else {
  alert("До встречи!");
}

console.log(user);

////////////////////////////////////////////////////////////////////////////////////

// Task 1

let check = "9:9";
let arr = check.split("");
let teams = {};
teams.team1 = arr[0];
teams.team2 = arr[2];

if (teams.team1 === teams.team2) {
  console.log("Ничья!");
} else if (teams.team1 == 9 && teams.team1 > teams.team2) {
  console.log("Поздравляем команду номер 1");
} else if (teams.team2 == 9 && teams.team2 > teams.team1) {
  console.log("Поздравляем команду номер 2");
} else {
  console.log("Неверный исход матча");
}

// Task 2

let student1 = {
  name: "Polina",
  age: 27,
};

let student2 = {
  name: "Polina",
  age: 27,
};

console.log(JSON.stringify(student1) === JSON.stringify(student2));

// Task 3

const animals = {
  cat: {
    name: "Енчик",
    age: 3,
  },
  dog: {
    name: "Орео",
    age: 2,
  },
};

let animal = prompt("Введите животное на английском языке");

for (let key in animals) {
  if (key === animal) {
    alert(animals[key].name);
  } else if (key === animal) {
    alert(animals[key].name);
  } else if (key === animal) {
    alert(animals[key].name);
  } else {
    alert("К сожалению, таких животных у нас нет");
  }
}
