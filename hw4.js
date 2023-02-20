// ### NORMAL level

// #### Task 1 💻

// Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 

// > Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

// FIRST SOLUTION

let num = +prompt('Введите число');

function sumNum() {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
};

alert(sumNum(num));

// SECOND SOLUTION

let num2 = +prompt('Insert number');

function getSum() {
    return (num2++) * num2 / 2
};

alert(getSum(num2));

// #### Task 2 💻

// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент 
// и верните результат переплаты по кредиту:

// + процентная ставка в год — 17%,
// + количество лет — 5.

// > Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.

let percent = .17;
let years = 5;

let sumCredit = +prompt('Insert sum credit');

function overPaymentCredit () {
    return sumCredit * percent * years
};

alert(overPaymentCredit(sumCredit));

// #### Task 3 💻

// Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
// + строку
// + значение от
// + значение по

// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

let text = prompt('insert text');
let onset = +prompt('beginning text with letter number');
let offset = +prompt('the end of the letter number');

function trimString(string, from, to) {
    return string.slice(from, to)
};

alert(trimString(text, onset, offset));

// #### Task 4 💻

// Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
// > Для 2021 это будет 5.

// FIRST SOLUTION

let number = prompt('insert number');

function getSumNumbers(num) {
    return num.split('').reduce((a, b) => +a + +b, 0)
};

alert(getSumNumbers(number));

// SECOND SOLUTION

let numberTwo = +prompt('insert number');
let sum = 0;

function getSumNumbersSecond(num) {
    let array = num.toString().split('')
    for(let i = 0; i < array.length; i++) {
        sum += +array[i]
    }
    return sum
};
alert(getSumNumbersSecond(numberTwo));

// #### Task 5 💻

// Написать функцию **`getSum`** которая принимает два целых числа a и b, 
// которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, 
// включая их, и вернуть ее. Если два числа равны, верните a или b.

// ```
//     getSum(1, 0) == 1   // 1 + 0 = 1
//     getSum(1, 2) == 3   // 1 + 2 = 3
//     getSum(0, 1) == 1   // 0 + 1 = 1
//     getSum(1, 1) == 1   // 1 Since both are same
//     getSum(-1, 0) == -1 // -1 + 0 = -1
//     getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
// ```

let numbOne = +prompt("Введите первое число");
let numbTwo = +prompt("Введите второе число");

function getSum(num1, num2) {
    let result = num1
    if (num1 > num2) {
        for (let i = num2; i < num1; i++) {
        result += i;
        }
    return result
    } else if (num1 < num2) {
        for (let i = num1; i < num2; i++) {
        result += i+1;
        }
    } else result = `Вы дважды ввели число ${num1}`
    return result
};

alert(getSum(numbOne, numbTwo));

// #### Task 6 💻

// Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя

// > Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**



function fooboo(par, par2, par3) {
    if(!par) {
        par3()
    } else par2()
};

function foo() {
    console.log('foo');
};

function boo() {
    console.log('boo');
};

console.log(fooboo(12, foo, boo));


// ### ADVANCED level

// #### Task 1 👨‍🏫 

// + Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать **true**,
//  если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае.

let angle1 = +prompt('insert first angle lenght');
let angle2 = +prompt('insert second angle lenght');
let angle3 = +prompt('insert third angle lenght');

function triangle(a, b, c) {
    if ((a < (b + c)) && (b < (c + a)) && (c < (a + b))) {
        return true
    } else return false
};

alert(triangle(angle1, angle2, angle3));

// #### Task 2 👨‍🏫 

// + Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. 
// Каждый квадрат имеет размер 1x1 и не может быть разбит. Реализуйте функцию, 
// которая будет возвращать минимальное количество необходимых надломов.

// + Например, если вам дается плитка шоколада размером 2 x 1, 
// вы можете разделить ее на отдельные квадраты всего за один надлом, 
// но для размера 3 x 1 вы должны сделать два надлома.

// + Если входные данные недействительны, вы должны вернуть 0 
// (поскольку надломы не требуются, если у нас нет шоколада для разделения). 
// Ввод всегда будет неотрицательным целым числом.

let sideOne = +prompt('Insert your chocolate lenght');
let sideTwo = +prompt('Insert your chocolate width');

function chocolate (chocoLenght, chocoWidth) {
    if ((chocoLenght <= 0) || (chocoWidth <= 0)) {
        console.log(0);
    } else console.log(chocoLenght * chocoWidth - 1);
}

console.log(chocolate(sideOne, sideTwo));

// #### Task 3 👨‍🏫

// + Напишите программу для вычисления общей стоимости покупки телефонов. 
// Вы будете продолжать покупать телефоны (подсказка: циклы!), 
// пока у вас не закончатся деньги на банковском счете. 
// Вы также будете покупать аксессуары для каждого из телефонов.

// + После того, как вы посчитаете сумму покупки, прибавьте налог, 
// затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.

// + Наконец, сверьте сумму с балансом вашего банковского счета, 
// чтобы понять можете вы себе это позволить или нет.

// + Вы должны настроить некоторые константы для «ставки налога», 
// «цены телефона», «цены аксессуара», также как и переменную для вашего «баланса банковского счета».

// + Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты 
// и округлением до двух знаков после запятой.

// +  Попробуйте включить ввод данных в вашу программу, 
// например с помощью функции prompt(..). Вы можете, например, запросить у пользователя баланс банковского счета. 
// Развлекайтесь и будьте изобретательны! */}