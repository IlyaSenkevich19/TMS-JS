// ### NORMAL level

// #### Task 1 💻
const Q = "true",
  W = false,
  E = 17,
  R = undefined,
  T = null;
console.log(typeof Q, typeof W, typeof E, typeof R, typeof T);

// #### Task 2 💻

const HEIGHT = 15,
  WIDTH = 20;
console.log(Math.max(HEIGHT, WIDTH));

// #### Task 3 💻

for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log(i);
  } else {
    continue;
  }
}

// #### Task 4 💻

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);

// #### Task 5 💻

let inputNumber = prompt("Введите число :");
if (inputNumber % 5 == 0 && inputNumber % 3 == 0) {
  alert("FizBuz");
} else if (inputNumber % 3 == 0) {
  alert("Buz");
} else if (inputNumber % 5 == 0) {
  alert("Fiz");
} else {
  alert("Не, введи кратное пяти или трем");
}

// #### Task 6 💻

let inputAge = prompt("Введите свой возраст");
if (inputAge >= 16 && inputAge <= 18) {
  alert("Можешь выкурить сигаретку, только маме не говори");
} else if (inputAge < 18 && inputAge > 0) {
  alert(`Пей колу`);
} else if (inputAge > 18) {
  alert(`Попей пивка`);
} else {
  alert(`Не понял, введи заново`);
}

// #### Task 7 💻

const InputSide = prompt(" В какую сторону света вы  хотели бы отправиться");

switch (InputSide) {
  case `юг`:
    console.log("на юг пойдешь счастье найдешь");
    break;
  case `север`:
    console.log("на север пойдешь много денег найдешь");
    break;
  case `запад`:
    console.log("на запад пойдешь верного друга найдешь");
    break;
  case `восток`:
    console.log("на восток пойдешь разработчиком станешь");
  default:
    console.log("Попробуйте пожалуйста ещё раз");
}

// ### ADVANCED level

// #### Task 1

const UperName = 'пОлИнА нАбЕрЕжНаЯ';
let goodName = '';
for (let i = 0; i < UperName.length; i++){
    if (i == 0){
        goodName += UperName[i].toUpperCase();
    }
    else if (i == 7){
        goodName += UperName[i].toUpperCase();
    }
    else{
        goodName += UperName[i].toLowerCase();
    }
}

alert(`Привет, ${goodName}!`);

// #### Task 2 👨‍🏫

const CLIENT_NAME = prompt("Введите число:");
const MINUS = prompt("Cколько отнять ?");
const PLUS = prompt("Cколько прибавить?");
const MULTIPLY = prompt("На сколько умножить?");
const DIVIDE = prompt("На сколько разделить?");
let result = ((((CLIENT_NAME - MINUS) + Number(PLUS)) * MULTIPLY) / DIVIDE);
alert(` ((((${CLIENT_NAME} - ${MINUS}) + ${PLUS}) * ${MULTIPLY}) / ${DIVIDE}) = ${result}`);

// #### Task 3 👨‍🏫

let str = "";
for (let i = 0; i < 6; i++) {
  str += "#" ;
  for (let j = 0; j < i; j++) {
    str += "#";
  }
  str+= "\n"
}
console.log(str);
