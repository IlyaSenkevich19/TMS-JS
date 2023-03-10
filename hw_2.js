let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);



/* 2*/

let SecInMin = 60;
let MinInHour = 60;
let HourInDay = 24;
let DayInYear = 365;
let MyAge = 25;
let myAgeInSeconds = MyAge * DayInYear * HourInDay * MinInHour * SecInMin;

console.log(myAgeInSeconds);

/* 3 */

let count = 42;
console.log(typeof count);
let Str_count = String(count);
console.log(count);

let userName = '42';
let Num_userName = Number(userName);
console.log(userName);



/* 4*/

let a = 1;
console.log(typeof a);
let Str_a = String(a);
console.log(typeof Str_a);
let b = 2;
console.log(typeof b);
let Str_b = String(b);
console.log(typeof Str_b);
let c = "белых медведей";
let abc = Str_a + Str_b + c;
console.log(abc);

/* или */
let _a = '1';
let _b = 2;
let _c = "белых медведей";

let a_b_c = _a + _b + _c;
console.log(a_b_c);






/* 5 */
let a1 = 'доступ';
let b2 = 'морпех';
let c3 = 'наледь';
let d4 = 'попрек';
let e5 = 'рубило';

let all = a1 + b2 + c3 + d4+ e5;
let all_leng = all.length;
console.log(all_leng);

/* 6*/


let variable_string = `Variable: %variable name% have type: %type variable%`;
console.log(typeof variable_string);
let variable_num = `Variable: %variable name% have type: %type variable%`;
console.log(typeof variable_num);


/* 7 */
let name =prompt('Как Вас зовут?');
console.log(name);
let Age=  prompt('Сколько Вам лет?');
console.log(Age);


/* Adv 1 */

let aa = 4;
let bb = 3;
[aa,bb]=[bb,aa];
aa; // => 3
bb; // => 4
console.log(aa);
console.log(bb);



/* Adv 2*/
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1.slice(1,2)+codeWord2.slice(1,2)+codeWord3.slice(1,2)+ codeWord4.slice(1,2)+codeWord5.slice(1,2);
console.log(cipher);
