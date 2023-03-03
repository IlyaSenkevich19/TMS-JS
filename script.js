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
