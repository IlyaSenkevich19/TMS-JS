// Complete exercise
// NORMAL level
// Task 1 🖥

const colors = ["red", "green", "blue"];
console.log(colors.length);

// Task 2 🖥

const animals = ["monkey", "dog", "cat"];
console.log(animals[animals.length - 1]);

// Task 3 🖥

const numbers = [5, 43, 63, 23, 90];
let spli = numbers.splice(0);
console.log(numbers);
console.log(spli);

delete numbers;
console.log(numbers);

// Task 4 🖥

const students = ["Polina", "Dasha", "Masha"];
students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");
console.log(students);

// Task 5 🖥

const cats = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
for (let i of cats) {
  console.log(i);
}

// Task 6 🖥

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const comands = evenNumbers.concat(oddNumbers);
console.log(comands);
console.log(comands.indexOf(8));

// Task 7 🖥

const binary = [0, 0, 0, 0];
for (let i = 0; i < binary.length; i++) {
  binary[i] += "1";
}
console.log(binary.join(""));

// ADVANCED level
// Task 1 👨‍🏫

function eximReverse(str) {
  let arr = str.split("");
  arr.reverse();
  let boo = true;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== str[i]){
        boo = false;
    }
  }
  return boo;
}
let dd = "шалаш";
console.log(eximReverse(dd));
let ff = "здраствуйте";
console.log(eximReverse(ff));

// Task 2 👨‍🏫

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

let sum = 0;
let count = 0;
for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        sum += matrix[i][j];
        count++;
    }
}
console.log(sum);
console.log(count);
console.log(sum/count);

// Task 3 👨‍🏫

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

const arrPositive = [];
const arrNegative = [];

for (let i of mixedNumbers){
    if (i >= 0){
        arrPositive.push(i);
    }
    else {
        arrNegative.push(i);
    }
}
console.log(arrPositive, arrNegative);

// Task 4 👨‍🏫

let random = [];
for (let i = 0; i < 6; i++){
    random.push(Math.round(Math.random() * 100));
}
console.log(random);
let cubRandom = [];
for (let i = 0; i < random.length; i++){
    cubRandom.push(random[i] ** 3);
}
console.log(random);
console.log(cubRandom);