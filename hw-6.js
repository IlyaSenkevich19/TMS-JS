///1////это дз!!
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//2//
const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length-1]);

//3//
const numbers = [5, 43, 63, 23, 90]

numbers.splice(0,5);
console.log(numbers);//1 способ


delete numbers;
console.log(numbers);//2 способ


///4///
const students = ['Polina', 'Dasha', 'Masha']

students.pop();
students.push('Borya');
console.log(students);
students.shift();
students.unshift('Andrey');
console.log(students);

///5////
const cats = ['Gachito', 'Tom', 'Batman'];


for(const namePets of cats){
    console.log(namePets);
}



for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
  }


///6///

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const allNumbers = evenNumbers.concat(oddNumbers);

console.log(allNumbers);

console.log(allNumbers.indexOf(8));


//7

const binary = [0, 0, 0, 0];

for (let i = 0; i < 5; i++) {
  if (binary[i] === 0) {
    binary.splice(i + 1, 0, 1);
  }
}

console.log(binary.join(""));
