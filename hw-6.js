// ### NORMAL level

// #### Task 1 🖥

// Дан массив:

const colors = ['red', 'green', 'blue'];

// Выведите в консоль его длину.

console.log(colors.length);

// #### Task 2 🖥

// Дан массив:

const animals = ['monkey', 'dog', 'cat'];

// Выведите в консоль его последний элемент вне зависимости от его длинны.

console.log(animals[animals.length -1]);
console.log(animals.at(-1));

// #### Task 3 🖥

// Дан массив:

const numbers = [5, 43, 63, 23, 90];

// Удалите все элементы в массиве и выведите в консоль полученный результат.

const numbersEcho = numbers.splice(0, numbers.length);

console.log(numbers);
console.log(numbersEcho);

// > Реализуйте решение двумя способами.

numbersEcho.length = 0;

console.log(numbersEcho);

// #### Task 4 🖥

// Дан массив:

const students = ['Polina', 'Dasha', 'Masha'];

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.

students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');

console.log(students);

// Second solution:

students.splice( -1, 1, 'Vatanabe');
students.splice( 0, 1, 'Ilya');

console.log(`${students} - little treesome ;)`);

// #### Task 5 🖥

// Дан массив:

const cats = ['Gachito', 'Tom', 'Batman'];

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
};

for (let item of cats) {
    console.log(item);
};

// #### Task 6 🖥

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

const allNumbers = evenNumbers.concat(oddNumbers);

console.log(allNumbers.indexOf(8));

// Second solution

const allNumbersSecond = [ ...evenNumbers, ...oddNumbers];

console.log(allNumbersSecond.indexOf(8));

// #### Task 7 🖥

// Дан массив:

const binary = [0, 0, 0, 0]

// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

// > [0, 0, 0, 0] -> '0101010'

const bynaryString = binary.join('1');

console.log(bynaryString);

// ### ADVANCED level

// > Для решения задач используйте циклы **`for`** или **`for of`**

// #### Task 1 👨‍🏫

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

function isPalindrom(word) {
    return word === word.split('').reverse().join('');
};

function isPalindrome2(word) {
    const reflection = word.length;
    for (let i = 0; i < reflection / 2; i++) {
        if (word[i] !== word[reflection - 1 - i]) {
        return false;
        }
    }
    return true;
};


// #### Task 2 👨‍🏫

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

// > Выведите в консоль среднее значение чисел в многомерном массиве.

function average () {
    let count = 0;
    let sum = 0;
    for (let items of matrix) {
        count += items.length
        for (let item of items) {
        sum += item
        }
    }
    return sum / count
};

console.log(average(matrix));

// #### Task 3 👨‍🏫

// Дан массив:

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

// Создайте два массива, в один поместите все положительные числа включая 0, 
// в другой все отрицательные. Оба массива затем выведите в консоль. 

const negativeNumbers = [];
const positiveNumbers =[];

function sortNumbers(numbers) {
    for(let item of numbers) {
        if(item >= 0) {
            positiveNumbers.push(item)
            } else negativeNumbers.push(item)
    }
};

sortNumbers(mixedNumbers);

console.log(negativeNumbers, positiveNumbers);

// #### Task 4 👨‍🏫

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. 
// Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб 
// и записывает в новый массив. В конце вывести оба массива в консоль.

const arrayNumbers = [];
const arrayNumbersCube = [];

for (let i = 0; i < 6; i++) {
    arrayNumbers.unshift(Math.round(Math.random()*10))
};

for (let item of arrayNumbers) {
   arrayNumbersCube.push(item ** 3)
};

console.log(arrayNumbers, arrayNumbersCube);
