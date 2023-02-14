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
