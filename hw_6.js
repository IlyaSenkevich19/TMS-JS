// Task 1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);


// Task 2
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.slice(-1));


// Task 3
const numbers = [5, 43, 63, 23, 90];
console.log(numbers.slice(0, 5));

// variant 2
const numbers2 = [5, 43, 63, 23, 90];
let numLength = numbers2.length;
console.log(numbers2.slice(0, numLength));

// variant 3
const numbers3 = [5, 43, 63, 23, 90];
for (let item of numbers3) {numbers3.slice(0, [item]);}
console.log(numbers3);


// Task 4
const students = ['Polina', 'Dasha', 'Masha'];
students.splice(-1, 1, 'Borya');
students[0] = 'Andrey';
console.log(students);


// Task 5
const cats = ['Gachito', 'Tom', 'Batman']
for (let i=0; i<cats.length; i++) {console.log(cats[i]);}
for (let item of cats) {console.log(item);}

// Task 6
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
let concArr = evenNumbers.concat(oddNumbers);
console.log(concArr, concArr.indexOf(8));


// Task 7
const binary = [0, 0, 0, 0]
console.log(binary.join(1));


// ADVANCED level
// Task 1
let myWord = prompt('Введите слово: ').toLowerCase();
function CheckPalindrom(checkWord) {
    return (checkWord === checkWord.split('').reverse().join(''))? true : false;
}
console.log(CheckPalindrom(myWord));


// Task 2
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
function calcAvg (arr) {
    let summAvg = 0, lengthArr = 0;
    for (let leng of arr){
        lengthArr += leng.length;
        for (let sum of leng){
            summAvg += sum;
        }
    }
    return summAvg/lengthArr;
}
console.log(calcAvg(matrix));


// Task 3
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
const positivNumber = []
const negativeNumber = [];
for (let pos of mixedNumbers) {
    if (pos >= 0) {positivNumber.push(pos)}
    else {negativeNumber.push(pos)}
}
console.log(positivNumber, negativeNumber);


// Task 4
const randArr = [];
const exponentArr = [];
    for (let i=0; i<=4; i++){
        randArr.push(Math.floor(Math.random()*10));
    }
for (let item of randArr){
    exponentArr.push(item**3);
}
console.log(randArr, exponentArr);