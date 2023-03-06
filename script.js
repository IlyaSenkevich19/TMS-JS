// Task 1

const colors = ["red", "green", "blue"];

console.log(colors.length);

// Task 2

const animals = ["monkey", "dog", "cat"];

console.log(animals[animals.length - 1]);

// Task 3

const numbers = [5, 43, 63, 23, 90];

while (numbers.length > 0) {
  numbers.shift();
}

// numbers.splice(0, numbers.length);

console.log(numbers);

// Task 4

const students = ["Polina", "Dasha", "Masha"];

students.shift();
students.unshift("Andrey");
students.pop();
students.push("Borya");

console.log(students);

// Task 5

const cats = ["Gachito", "Tom", "Batman"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

for (let value of cats) {
  console.log(value);
}

// Task 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

for (let i = 0; i < oddNumbers.length; i++) {
  evenNumbers.push(oddNumbers[i]);
}

console.log(evenNumbers);
console.log(evenNumbers.indexOf(8));

// Task 7

const binary = [0, 0, 0, 0];

for (let i = 0; i < 5; i++) {
  if (binary[i] === 0) {
    binary.splice(i + 1, 0, 1);
  }
}

console.log(binary.join(""));

////////////////////////////////////////////////////////////

// Task 1

let str = "мечем";
let arr = str.split("");
let arr2 = arr.reverse();
let counter = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr2[i]) {
    counter++;
  }
}

if (counter === arr.length) {
  console.log(true);
} else {
  console.log(false);
}

// Task 2

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];

let noMatrix = matrix.flat();
let sum = 0;

for (let i = 0; i < noMatrix.length; i++) {
  sum += noMatrix[i];
}

console.log(sum / noMatrix.length);

// Task 3

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

let arrPoz = [];
let arrNeg = [];

for (let i = 0; i < mixedNumbers.length; i++) {
  if (mixedNumbers[i] < 0) {
    arrNeg.push(mixedNumbers[i]);
  } else {
    arrPoz.push(mixedNumbers[i]);
  }
}

console.log(arrPoz, arrNeg);

// Task 4

const mas = [-14, 24, -89, 43, 0, -1, 412, 4];
let kub = [];

for (let i = 0; i < mas.length; i++) {
  let kubItem = mas[i] * mas[i] * mas[i];
  kub.push(kubItem);
}

console.log(mas, kub);
