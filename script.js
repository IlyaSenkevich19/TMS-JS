//     Task 1

const str = "true";
const boo = false;
const num = 17;
const und = undefined;
const nul = null;

console.log(typeof str, typeof boo, typeof num, typeof und, typeof nul);

//     Task 2

let height = 15;
let width = 20;

if (height > width) {
  console.log(height);
} else {
  console.log(width);
}

//     Task 3

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//     Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);

//     Task 5

let numFB = +prompt("Введите число");

if (numFB % 5 === 0 && numFB % 3 === 0) {
  console.log("FizBuz");
} else if (numFB % 3 === 0) {
  console.log("Buz");
} else if (numFB % 5 === 0) {
  console.log("Fiz");
} else {
  console.log("not Fiz, not Buz, not FizBuz");
}

//     Task 6

let age = prompt("Укажите ваш возраст");

if (age > 18) {
  alert("Попей пивка");
} else if (age >= 16 && age <= 18) {
  alert("Можешь выкурить сигаретку, только маме не говори");
} else {
  alert("Пей колу");
}

//     Task 7

const south = "юг";
const north = "север";
const west = "запад";
const east = "восток";

let side = prompt(
  "В какую сторону света вы хотели бы отправиться?"
).toLocaleLowerCase();

switch (side) {
  case south:
    alert("на юг пойдешь счастье найдешь");
    break;
  case north:
    alert("на север пойдешь много денег найдешь");
    break;
  case west:
    alert("на запад пойдешь верного друга найдешь");
    break;
  case east:
    alert("на восток пойдешь разработчиком станешь");
    break;
  default:
    alert("попробуйте еще раз");
}

//     Task 1

let firstName = prompt("Введите имя").toLocaleLowerCase();
let lastName = prompt("Введите фамилию").toLocaleLowerCase();
let firstNameOk = firstName[0].toLocaleUpperCase() + firstName.slice(1);
let lastNameOk = lastName[0].toLocaleUpperCase() + lastName.slice(1);

alert(`Привет, ${firstNameOk} ${lastNameOk} !`);

//     Task 2

let numb = +prompt("Введите число");
let subtract = +prompt("Сколько отнять");
let fold = +prompt("Сколько прибавить");
let multiply = +prompt("На сколько умножить");
let divide = +prompt("На сколько разделить");

let result = ((numb - subtract + +fold) * multiply) / divide;

alert(
  `((((${numb} - ${subtract}) + ${fold}) * ${multiply}) / ${divide} = ${result})`
);

//     Task 3

let stage = "#";

for (let i = 0; i <= 5; i++) {
  console.log(stage);
  stage += "#";
}
