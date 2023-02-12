// Task 1
let x = 20;
let y = 58;
let z = 42;
console.log(x+y+z);
// Task 2
let seconds = 60;
let minutes = 60;
let hours = 24;
let day = 365;
let myAge = 25;
let myAgeInSeconds = myAge  * day * hours * minutes * seconds;
console.log(myAgeInSeconds);
// Task 3
let count = 42;
let userName = '42';
let stringCount = String(count);
let numberUserName = Number(userName);
let secondStringCount = count + "";
let secondUserName = '42' * 1;

console.log(stringCount);
console.log(numberUserName);
console.log(secondStringCount);
console.log(secondUserName);

// Task 4
let a = 1;
let b = 2;
let c = "белых медведей";

console.log(a + "" + b + " " + c);

// Task 5
let first = "доступ";
let second = "морпех";
let third = "наледь";
let four = "попрек";
let five = "рубило";
console.log(first.length * 5);

// Task 6

let one = 45;
let two = "GIGI";
let three = true;
console.log(`Variable: one have type: ${typeof one}`);
console.log(`Variable: two have type: ${typeof two}`);
console.log(`Variable: three have type: ${typeof three}`);

// Task 7

let yourName = prompt(`Введите Ваше имя:`);
let yourAge = prompt(`Введите Ваш возраст:`);
console.log(yourName);
console.log(Number(yourAge));

// ADVANCED level
// #### Task 1 

let e = 4;
let w = 3;
e = e + w;
w = e - w;
e = e - w;
console.log(e);
console.log(w);

// #### Task 2
let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";
    let ciphe = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
    console.log(ciphe);