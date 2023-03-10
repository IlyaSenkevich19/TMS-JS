//task 1
const colors = ['red', 'green', 'blue'];

console.log(colors.length);

//task 2

const animals = ['monkey', 'dog', 'cat'];


console.log(animals[animals.length -1]);

//task 3

const numbers = [5, 43, 63, 23, 90];

// delete numbers[0];
// delete numbers[1];
// delete numbers[2];
// delete numbers[3];
// delete numbers[4];

numbers.splice(0, 5);

let arr = numbers.slice(0 , 0);
console.log(arr);
console.log(numbers);

//task 4

const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Borya');
students.shift()
students.unshift('Andrey')

console.log(students)


//task 5

const cats = ['Gachito', 'Tom', 'Batman']

for(i = 0; i < cats.length; i++)
    console.log(cats[i]);

for(let number of cats){
    console.log(number)
}


//task 6


const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const num = evenNumbers.concat(oddNumbers);

console.log(num[8]);


//task 7

const binary = [0, 0, 0, 0];
let b ='';

function plus(binary){
    for(i = 0; i<binary.length; i++){
         b += binary[i] + "1";
        
    }
    console.log(b)
}

plus(binary);


//task 1 ADVANCED level


//task 2 ADVANCED level
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
let sum = 0,
sred = 0,
summa_ob = 0;
//console.log(matrix[0][0])

function sre(matrix){
    for(i = 0; i < matrix.length; i++){
    for(c = 0; c < matrix[i].length; c++){
        sum += matrix[i][c];
    }
}
console.log(sred = sum / matrix.length)
}

sre(matrix);

//task 3 ADVANCED level

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
const newMixedNumbers = [];
const newMixedNumbers1 = [];

function pol(mixedNumbers){
    for(i = 0; i<mixedNumbers.length; i++){
        if(mixedNumbers[i] >= 0 ){
newMixedNumbers.push(mixedNumbers[i])
        }
        else{
            newMixedNumbers1.push(mixedNumbers[i])
        }
    }
    console.log(newMixedNumbers)
    console.log(newMixedNumbers1)
}

pol(mixedNumbers)

//task 4 ADVANCED level

const Numbers = [-14, 24, -89, 43, -1, 412, 4]
const kvadr =[]; 
function kvad(Numbers){
    for(i = 0; i<Numbers.length; i++){
        kvadr.push(Numbers[i] * Numbers[i])
    }
    console.log(kvadr)
}

kvad(Numbers);
