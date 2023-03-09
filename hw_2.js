//task 1

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

//task 2
let second_in_minute = 60;
let minute_in_hour = 60;
let hour_in_day = 24;
let day_in_year = 365;
let myage = 20;

let myAgeInSeconds = (((((day_in_year * myage)*hour_in_day)*minute_in_hour)*second_in_minute));

//or

//let myAgeInSeconds = ((day_in_year * myage)*(hour_in_day * minute_in_hour * second_in_minute));

// or 

//let myAgeInSeconds = ((day_in_year * 20)*(hour_in_day * minute_in_hour * second_in_minute)); // без переменной myage по заданию не надо добавлять

console.log(myAgeInSeconds)

//task 3
let count = 42;
let username = '42';

let a = count;

let count_string = String(a);

console.log(typeof count_string);

let b = username;

console.log (typeof Number(b));


//task 4
let bear1 = 1
let bear2 = 2
let bear3 = "белых медведей"

let bear4 = String(bear1);


console.log(bear4 +  bear2 + " " + bear3);
 
//task 5

let first = "доступ";
let second = "морпех";
let third = "наледь";
let four = "попрек";
let five = "рубило";


let lengthWords = first + second + third + four + five ;
console.log(lengthWords.length);

//task 6


let n =  1;
let m = "hello";
let v = 10 > 3;

console.log(`Variable: % n % have type: %${typeof n}% ` );
console.log(`Variable: % m % have type: %${typeof m}% ` );
console.log(`Variable: % v % have type: %${typeof v}% ` );


// task 7
let name = prompt("Ваше имя:");
let age = prompt("Ваш возраст:");
console.log(`Имя: ${name}`);
console.log(`Возраст: ${age}`);


//task 1 advanced level

let l = 4;
let k = 3;
console.log(l = k);
console.log( k = l + 1 );


//task 2 advanced level

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

console.log(codeWord1[1],codeWord2[1], codeWord3[1], codeWord4[1], codeWord5[1]);