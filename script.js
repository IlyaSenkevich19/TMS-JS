
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
=======
// Task_1

let x = 20;
let y = 58;
let z = 42;
let sum = x + y + z;
console.log(sum);

// Task_2

let sec = 60;
let min = 60;
let hour = 24;
let day = 365;
let myAgeInSeconds = 25 * day * hour * min * sec;
console.log(myAgeInSeconds);

// Task_3

let count = 42;
let userName = "42";

console.log("" + count, +userName);
console.log(count.toString(), Number(userName));

// Task_4

let a = 1;
let b = 2;
let c = "белых медведей";
console.log(a + "" + b + " " + c);

// Task_5

let w1 = "доступ";
let w2 = "морпех";
let w3 = "наледь";
let w4 = "попрек";
let w5 = "рубило";

let lengthWords = w1.length + w2.length + w3.length + w4.length + w5.length;
console.log(lengthWords);

// Task_6

let num = 2;
let str = "home";
let bol = true;

console.log(`Variable: num have type: ${typeof num}`);
console.log(`Variable: str have type: ${typeof str}`);
console.log(`Variable: bol have type: ${typeof bol}`);

// Task_7

let name = prompt("Как тебя зовут, лапочка?");
let age = prompt("Сколько тебе лет?");

console.log("Имя: ", name, "Возраст: ", age);

// Task_1

let p = 4;
let r = 3;

p = p + r;
r = p - r;
p = p - r;

console.log("p = ", p, "r = ", r);

// Task_2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher =
  codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);

