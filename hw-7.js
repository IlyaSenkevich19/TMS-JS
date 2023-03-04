// ### NORMAL level

// #### Task 1 🖥

// Выведи все элементы массива в консоль с помощью метода **`forEach`**

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`

fibonacci.forEach(function(el) {
    console.log(el);
});

fibonacci.forEach((el) => console.log(el));

// #### Task 2 🖥

// Используя метод **`map`** создайте новый массив, на основе массива **`users`**,
//  в котором каждый элемент массива будет содержать строку вида:

// > ['member 1: Darya', 'member 2: Masha', ... etc]

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const mapUsers = users.map(function(el, i) {
    return `Member ${++i}: ${el}`;
});

const mapUsers2 = users.map((el, i) => `Member ${++i}: ${el}`);

// #### Task 3 🖥

// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

const numbers = [7, -4, 32, -90, 54, 32, -21];

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const positiveNumbers = numbers.filter(function(el) {
    return el >= 0;
});

const positiveNumbers2 = numbers.filter((el) => el >= 0);

// #### Task 4 🖥

// Используя метод **`reduce`** получите сумму всех чисел массива.

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const sumFibonacci = fibonacci.reduce(function(sum, el) {
    return sum + el;
});

const sumFibonacci2 = fibonacci.reduce((sum, el) => sum + el);

// #### Task 5 🖥

// Используя метод **`find`** найдите в массиве первое четное число.

const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const firstEvenNumber = numbers2.find(function(el) {
    return el % 2 === 0;
});

const firstEvenNumber2 = numbers2.find((el) => el % 2 === 0);

// ### ADVANCED level

// #### Task 1 👨‍🏫

// + Написать функцию конструктор **Student**
// + В каждом объекте студента должны быть поля **salary** , **rate** , **name**
// + Внутри объекта также должен быть метод который на основе рейтинга 
// возвращает сумму возможного кредита. 
// + На основе функции создать минимум 5 студентов и имя каждого студента 
// должно соответствовать имени студента из вашей группы. 

// + Создать массив **students** и поместить в него студентов.
// + Написать функцию которая принимает массив студентов. 
// И вычисляет общую сумму кредитов которую можно выдать группе.

// **rate** имеет 4 категории A B C D
// + **A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// + **B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// + **C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// + **D** - плохой рейтинг и мы не можем дать кредит

function Student(salary, rate, name) {
    const rates = {
        A: 12,
        B: 9,
        C: 6,
        D: 0,
    };

    this.salary = salary
    this.rate = rate
    this.name = name

    this.getCreditAmount = function () {
      return this.salary * rates[this.rate];
    };
};

const students = [
    new Student(2500, 'B', 'Pavel'),
    new Student(500, 'D', 'Azize'),
    new Student(1500, 'C', 'Ira'),
    new Student(5500, 'A', 'Slava'),
    new Student(2500, 'B', 'Katya'),
];

const getTotalCreditAmount = (arr) => 
    arr.reduce((prev, next) => prev + next.getCreditAmount(), 0);

console.log(getTotalCreditAmount(students));

// #### Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, 
// нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку и возвращает 
// новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// > Примечание: для этой задачи **`y`** не считается гласной.

const vowels = ['a', 'e', 'i', 'o', 'u'];

const withoutVowels = (string) => 
    string
        .split('')
        .filter((el) => !vowels.includes(el.toLowerCase()))
        .join('');

console.log(withoutVowels('This website is for losers LOL!'));

// #### Task 3 👨‍🏫 Нет истории, нет теории

// + В приведенных ниже примерах показано, как написать функцию:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// > Параметр - это строка, которая включает только буквы от a..z и A..Z.

const stringConverter = (string) => 
    string
        .split('')
        .map((el, i) => {
            const result = el.repeat(++i)
            return result.charAt(0).toUpperCase() + result.slice(1)
            })
        .join('-');

console.log(stringConverter('Vatanabe'));

// #### Task 4 👨‍🏫 Самый высокий и самый низкий

// + В этом небольшом задании вам дается строка чисел, разделенных пробелами, 
// и вы должны возвращать наибольшее и наименьшее число.

// ```javascript
//     highAndLow("1 2 3 4 5"); // return "5 1"
//     highAndLow("1 2 -3 4 5"); // return "5 -3"
//     highAndLow("1 9 3 4 -5"); // return "9 -5"
// ```

// > Строка вывода должна состоять из двух чисел, разделенных одним пробелом, 
// при этом наибольшее число должно быть первым.

const maxMinNumbers = (numbers) => {
    const arrayNumbers = numbers.split(' ').map((el) => parseInt(el))
    const max = arrayNumbers.reduce((a, b) => Math.max(a, b))
    const min = arrayNumbers.reduce((a, b) => Math.min(a, b))
    return `${max} ${min}`
};

console.log(maxMinNumbers('1 2 -3 4 5'));

// #### Task 5 👨‍🏫 Изограммы

// + Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
// Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
// Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.

// ```javascript
//     isIsogram("Dermatoglyphics") == true
//     isIsogram("aba") == false
//     isIsogram("moOse") == false // -- ignore letter case
// ```

function isIsogram(str) {
    str = str.toLowerCase();
    let arr = str.split('');

    for (let el of arr) {
        if (str.split(el).length !== 2) {
        return false
        } else return true
    };
};

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));

// #### Task 6 👨‍🏫 Считаем коды символов

// + Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, 
// чтобы создать число. Поместите результат в переменную **`total1`**

// + Затем замените все числа `7` на число `1` и назовите это число **`total2`**

// + После верните разницу между суммой цифр **`total1`** и **`total2`**

// > 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

function charCodeRofl(str) {
    let arrStr = str.split('');
    let preTotal1 = [];

    for (let el of arrStr) {
        preTotal1.push(el.charCodeAt())
    };

    let total1 = preTotal1.join('');
    let preTotal2 = [];

    for (let item of preTotal1.join('').split('')) {
        if (item === '7') {
        preTotal2.push('1')
        } else preTotal2.push(item)
    };

    let total2 = preTotal2.join('');
    let sumTotal1 = total1.split('').reduce((a, b) => a + +b, 0);
    let sumTotal2 = total2.split('').reduce((a, b) => a + +b, 0);

    return sumTotal1 - sumTotal2;
};

console.log(charCodeRofl('ABC'));

// #### Task 7 👨‍🏫 Дубликаты

// + Цель этого упражнения - преобразовать строку в новую строку, где каждый символ 
// в новой строке равен 
// **`(`**, если этот символ появляется только один раз в исходной строке, или **`)`**, 
// если этот символ встречается более одного раза в исходной строке. 
// Игнорируйте использование заглавных букв при определении дубликата символа.


// ```javascript
//     "din" => "((("
//     "recede" => "()()()"
//     "Success" => ")())())"
//     "(( @" => "))(("
// ```

function nihao(str) {
    str = str.toLowerCase();
    let arr = str.split('');
    let result = [];

    for (let el of arr) {
        if (str.split(el).length !== 2) {
        result.push(')')
        } else result.push('(')
    }

    return result.join('');
};

console.log(nihao('Success'));