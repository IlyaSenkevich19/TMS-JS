const colors = ['red', 'green', 'blue']
console.log(colors.length)

//TASK 2

const animals = ['monkey', 'dog', 'cat']
console.log(animals[animals.length-1])

//TASK 3

const numbers = [5, 43, 63, 23, 90]
const epr = numbers.length
for(i=0;i<epr;i++){
    numbers.pop()
}
console.log(numbers)

const numbers1 = [5, 43, 63, 23, 90]
for (i=0; i<numbers1.length; i++){
    delete numbers1[i]
}
console.log(numbers1)


//      TASK 4

const students = ['Polina', 'Dasha', 'Masha']
students.pop()
students.push('Borya')
students.shift()
students.unshift('Andrey')
console.log(students)

//      task 5
const cats = ['Gachito', 'Tom', 'Batman']
for(i=0; i<cats.length; i++){
    console.log(cats[i])
}

const cats1 = ['Gachito', 'Tom', 'Batman']
for(let obj of cats){
    console.log(obj)
}


//      task 6

    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]
    const allNumbers = evenNumbers.concat(oddNumbers)
    console.log(allNumbers)
    console.log(allNumbers.indexOf(8))


//      TASK 7

const binary = [0, 0, 0, 0]
let binaryStr = '';
for(i=0; i<binary.length; i++){
    let numberStr = String(binary[i]);
   if (i<binary.length-1) {
   binaryStr += numberStr + 1;
} else{
    binaryStr += numberStr;
}
}
console.log(binaryStr)