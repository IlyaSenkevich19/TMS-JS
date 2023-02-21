// #### Task 1 💻

// Создайте переменные, затем сложите их и выведите результат в консоль
//  разработчика.

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

let sumXyz = x + y + z;

console.log(sumXyz);

// #### Task 2 💻

// Создайте переменные:

//     - количество секунд в минуте
//     - количество минут в часу
//     - количество часов в сутках
//     - количество суток в году
    
// Посчитайте ваш возраст в секундах и поместите результат 
// в переменную **`myAgeInSeconds`**

const secondsImMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365.25;

const myAgeInSeconds = (age) => age * daysInYear * hoursInDay * minutesInHour * secondsImMinute;

console.log(myAgeInSeconds(43));

// #### Task 3 💻

//     let count = 42
//     let userName = '42'

// Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, 
// а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.

let count = 42;
let userName = '42';

const countOne = count.toString();
const countTwo = String(count);
const countThree = '' + count;

console.log(countOne, countTwo, countThree);

const userNameOne = parseInt(userName);
const userNameTwo = parseFloat(userName)
const userNameThree = Number(userName);

console.log(userNameOne, userNameTwo, userNameThree);

// #### Task 4 💻
// Имеется три переменные:

//   let a = 1
//   let b = 2
//   let c = "белых медведей"

// Сложите переменные так, чтобы в результате получилось выражение: 
// **`12 белых медведей`** и результат выведите в консоль.

let a = 1;
let b = 2;
let c = "белых медведей";

const resultOneForTaskFour = String(a) + b + ' ' + c;
const resultTwoForTaskFour = a + (b + ' ' + c);

console.log(`первый вариант: ${resultOneForTaskFour}, 
второй вариант: ${resultTwoForTaskFour},
третий вариант:  ${a}${b} ${c}`);

    // #### Task 5 💻

    // Создайте переменные и поместите в них нижеприведенные слова. 
    // Затем создайте еще одну переменную **`lengthWords`** 
    // и посчитайте в ней длинну всех слов из списка:
    
    //     - доступ 
    //     - морпех
    //     - наледь
    //     - попрек
    //     - рубило

const wordA = 'доступ';
const wordB = 'морпех';
const wordC = 'наледь';
const wordD = 'попрек';
const wordE = 'рубило';

const lengthWords = (wordA+wordB+wordC+wordD+wordE).length;

console.log(lengthWords);

// #### Task 6 💻
    
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:    

//     `Variable: %variable name% have type: %type variable%`

const firstV = true;
const secondV = 'bmx';
const thirdV = 2020;

console.log(`Variable: %firstV% have type: %${typeof firstV}% 
Variable: %secondV% have type: %${typeof secondV}%
Variable: %thirdV% have type: %${typeof thirdV}%`);

// #### Task 7 💻

// Запросить у пользователя имя и возраст и вывести их в консоль.

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".username").addEventListener("keypress", function(event) {
        if(event.key === "Enter"){
            console.log(event.target.value)
            document.querySelector(".username").value = ""
        }
    })
    document.querySelector(".userage").addEventListener("keypress", function(event) {
        if(event.key === "Enter"){
            console.log(event.target.value)
            document.querySelector(".userage").value = ""
        }
    })
});

let firstName = prompt('Insert your name');
let age = +prompt('Insert your age');

console.log(`User name: ${firstName}
User age: ${age}`);

// Поменяйте значение переменных местами не создавая дополнительной переменной:

//     let a = 4
//     let b = 3

let a1 = 4;
let b1 = 3;
let c1

c1 = a1, a1 = b1, b1 = c1;

console.log(a1, b1);

let a2 = 4;
let b2 = 3;

[a2,b2] = [b2,a2];

console.log(a2,b2);

// #### Task 2 👨‍🏫 

// В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

//     let codeWord1 = "обернись";
//     let codeWord2 = "неужели";
//     let codeWord3 = "огурцы";
//     let codeWord4 = "липкие";
//     let codeWord5 = "?!";

// Создайте переменную **`cipher`** и поместите туда необходимые символы

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

console.log(`${codeWord1.charAt(1).toUpperCase()}${codeWord2.charAt(1)}${codeWord3.charAt(1)}${codeWord4.charAt(1)}${codeWord5.charAt(1)}`);
