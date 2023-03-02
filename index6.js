///1
const colors = ['red', 'green', 'blue'];
console.log (colors.length)
///2
const animals = ['monkey', 'dog', 'cat'];
console.log (animals[animals.length-1])
///3
const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, 5)
console.log (numbers)
numbers.length = 0;
console.log (numbers)
///4
const students = ['Polina', 'Dasha', 'Masha'];
students.splice(2, 1, 'Borya');
console.log (students)
students.splice(0, 1, 'Andrey')
console.log (students)
///4 second
const studentsNew = ['Polina', 'Dasha', 'Masha'];
studentsNew.pop ();
studentsNew.push ('Borya');
studentsNew.shift();
studentsNew.unshift('Andrey');
console.log (studentsNew)
///5
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log (cats[i])
}
for (let cat of cats) {
    console.log (cat)
}
///6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const evenOddNumbers = evenNumbers.concat(oddNumbers);
console.log (evenOddNumbers.indexOf(8));
///7
const binary = [0, 0, 0, 0];
const binaryNew = binary.join ('1');
console.log (binaryNew)
