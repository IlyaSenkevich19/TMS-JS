// #### Task 1 💻

// Создайте переменные и присвойте им значения:

const one = 'true';
const two = false;
const three = 17;
const four = undefined;
const five = null;

// > Затем с помощью оператора **`typeof`** выведите в консоль все типы созданных значений переменных.

console.log(typeof one,typeof two, typeof three, typeof four,typeof five);

// #### Task 2 💻

// Даны две переменные:

let height = 15;
let width = 20;

// > С помощью условий выведите в консоль разработчика наибольшее число.

// example one:
if (height > width) {
    console.log(height);
} else console.log(width);
// example two:
switch (height) {
    case height > width: 
        console.log(height);
        break;

    default:
        console.log(width);
        break;
};
// example three:
console.log(height > width ? height : width);

// #### Task 3 💻

// Написать перебор от 1 до 20, где выведутся все числа кратные трём.

// > Для вычисления кратности обратите внимание на оператор %

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
};

// #### Task 4 💻

// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
// Для решения этой задачи нам помогут логические операторы **`|| &&`**.

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

// > Ответ поместите в переменную **shouldGoToWork**

let shouldGoToWork

if (key && documents && pen && (apple || orange)) {
    shouldGoToWork = true;
} else shouldGoToWork = false;

console.log(shouldGoToWork);

// #### Task 5 💻

// Запросить у пользователя число: 

//     1. Если число делится без остатка на 5 выводим сообщение Fiz
//     2. Если число делится без остатка на 3 выводим сообшение Buz
//     3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

let num = prompt ( "Введите число" )
    if (num % 3 === 0 && num % 5 === 0) {
        alert ( "FizBuz" )
    } else if (num % 5 === 0) {
        alert ('Fiz')
    } else if (num % 3 === 0) {
        alert ('Buz')
    } else alert ('No money - no honey');

    // #### Task 6 💻

    // Написать программу, которая выполняет следующие операции:
    
    // - Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - `Попей пивка`. 
    // - Если меньше, то выводит сообщение - `Пей колу`. 
    // - Добавить условие, что если возраст от 16-18, выводим сообщение - 
    // `Можешь выкурить сигаретку, только маме не говори`.

let age = prompt ('Введите ваш возраст')
    if (age > 18) {
        alert ('Попей пивка')
    } else if ( age >= 16) {
        alert ('Можешь выкурить сигаретку, только маме не говори')
    } else alert ('Пей колу');

    // #### Task 7 💻

    // Напишем программу для туристического терминала. Запросите у пользователя 
    // в какую сторону света он бы хотел отправиться. После ввода данных мы должны вывести 
    // в консоль сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение 
    // в консоль чтобы он попробовал еще раз.
    
    // + `юг` на юг пойдешь счастье найдешь
    // + `север` на север пойдешь много денег найдешь
    // + `запад` на запад пойдешь верного друга найдешь
    // + `восток` на восток пойдешь разработчиком станешь
    
    // > Используйте конструкцию switch

let cardinalPoint = prompt ('В какую сторону света ты бы хотел отправиться?').toLowerCase()

switch (cardinalPoint) {
    case 'юг':
        console.log ('на юг пойдешь счастье найдешь');
        break;

    case 'север':
        console.log ('север пойдешь много денег найдешь');
        break;

    case 'запад':
        console.log ('на запад пойдешь верного друга найдешь');
        break;

    case 'восток':
        console.log ('на восток пойдешь разработчиком не станешь');
        break;

    default:
        console.log ('попробуй еще раз');
        break;
};

// ### ADVANCED level

// #### Task 1 👨‍🏫 

// Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'

// Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя,
//  и поприветствуйте его через **alert**

// > Привет, Полина Набережная!

let firstName = prompt ("Введите имя");
let lastName = prompt ("Введите фамилию");

let yourFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
let yourLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

alert(`Привет, ${yourFirstName} ${yourLastName}!`);

// #### Task 2 👨‍🏫 

// Написать программу, которая выполняет следующие операции: 

// 1. Запрашивает у пользователя число.
// 2. Последовательно задает вопрос: 
//     cколько отнять / прибавить / умножить / разделить от предыдущего результата?
// 3. По окончании вывести пользователю **`alert`**, содержащий формулу и результат например: 
// > ((((6 - 10) + 5) * 20) / 2 = 110)

let numOne = prompt('Введите число');
let numTwo = prompt('Сколько отнять?');
let numThree = prompt('Сколько прибавить?');
let numFour = prompt('На сколько унможить?');
let numFive = prompt('На сколько разделить?');

let num1 = parseInt(numOne);
let num2 = parseInt(numTwo);
let num3 = parseInt(numThree);
let num4 = parseInt(numFour);
let num5 = parseInt(numFive);

let result = ((num1 - num2) + num3) * num4 / num5;

alert (`((${num1} - ${num2}) + ${num3}) * ${num4} / ${num5} = ${result}`);

// Написать программу, которая будет выводить в консоль лесенку.

// ```
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
// ```

// > Не забудьте вопспользоваться циклами

let step = '#';
console.log(step);
for (let i = 1; i < 6; i++) {
    step += '#'
    console.log(step + '\n');
};
