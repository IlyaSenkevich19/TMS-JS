//Normal level

//Task 1

const colors = ['red', 'green', 'blue'];
console.log(colors.length)

//Task 2

const animals = ['monkey', 'dog', 'cat'];
console.log(animals.length - 1);
//or
console.log(animals.at(-1))

//Task 3 

const numbers_1 = [5, 43, 63, 23, 90];
let deleteNamber1 = numbers_1.splice(0,5);
console.log(numbers_1);
//or 
const numbers_2 = [5, 43, 63, 23, 90];
while(numbers_2.length > 0){
    numbers_2.shift()
}
console.log(numbers_2)

//Task 4

const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");
console.log(students);

//Task 5

const cats1 = ['Gachito', 'Tom', 'Batman'];
for(let i = 0; i < cats1.length; i++){
    console.log(cats1[i]);
}
//or
const cats2 = ['Gachito', 'Tom', 'Batman'];
for(let catsName of cats2){
    console.log(catsName)
}

//Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
evenNumbers.push(...oddNumbers);
console.log(evenNumbers);
console.log(evenNumbers[3])
//or
const evenNumbers1 = [2, 4, 6, 8, 10];
const oddNumbers1 = [1, 3, 5, 7, 9];
let sumNambers = evenNumbers1.concat(oddNumbers1);
console.log(sumNambers)
console.log(sumNambers[3])

//Task 7
const binary = [0, 0, 0, 0];
str.push(1)
const str = binary.join("")
console.log(str)

// ADVANCED level

//Task 1 !!!!!
function check(){

}

// Task 2 !!!!!
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];
let sum = 0;
let count = 0;
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j <matrix[i].length; j++){
        sum += matrix[i][j];
        count++
    }
}
let average = sum / count
console.log(average)


// Task 3 
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
let mixedNumbersFix = mixedNumbers.sort ((a,b) => a - b );
let minusNum = mixedNumbersFix.splice(0,3);
console.log(minusNum);
let plusNum = mixedNumbersFix.splice(1,7);
console.log(plusNum)

// Task 4 
let arr = [];
let cubArr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 11));
  cubArr.push(Math.pow(arr[i], 3));
}
console.log(arr);
console.log(cubArr);
