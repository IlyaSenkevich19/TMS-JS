//                Task 1
const colors = ['red', 'green', 'blue']

console.log(colors.length);

//                Task 2

const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length-1]);

//                Task 3

const numbers = [5, 43, 63, 23, 90]

for ( let i = 0; i<numbers.length; i++){
    delete numbers[i]
}

console.log(numbers);

const numbers1 = [5, 43, 63, 23, 90]

for ( let i = 0; i<numbers.length; i++){
    numbers1.pop()
}

console.log(numbers1);

//                Task 4

const students = ['Polina', 'Dasha', 'Masha']

students.pop();

students.push(`Borya`);

students.shift();

students.unshift(`Andrey`);

console.log(students);

//                Task 5

const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}

for (let k of cats){
    console.log(k);
}

//                Task 6

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const allNumbers = oddNumbers.concat(evenNumbers);

console.log(allNumbers.indexOf(8));

//                Task 7

const binary = [0, 0, 0, 0]
let binaryStr="";

for (let i = 0; i<binary.length; i++){
let binaryStrEl = String(binary[i]);

if (i < binary.length-1){
    binaryStr += binaryStrEl+1;
}else{
    binaryStr += binaryStrEl;
}
}

console.log(binaryStr);