///1.1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(function(el) {
    console.log (el)
})
///1.2
fibonacci.forEach(el1 => console.log (el1))
///2.1
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const usersNew = users.map (function(el, index) {
    return `member ${index + 1} : ${el}`
})
console.log (usersNew)
///2.2
const usersNew1 = users.map ((el, index) => {
    return `member ${index + 1} : ${el}`
})
console.log (usersNew1)
///3.1
const numbers = [7, -4, 32, -90, 54, 32, -21];
const numbersFilter = numbers.filter (function(el) {
    return el > 0
})
console.log (numbersFilter)
///3.2
const numbersFilter1 = numbers.filter (el => {
    return el > 0
})
console.log (numbersFilter1)
///4.1
const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const fibonacci1Reduce = fibonacci1.reduce (function(sum, el) {
    return sum+=el
}, 0)
console.log (fibonacci1Reduce)
///4.2
const fibonacci2Reduce = fibonacci1.reduce ((sum, el) => {
    return sum+=el
}, 0)
console.log (fibonacci2Reduce)
///5.1
const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const numbersFind = numbers1.find (function(el) {
    return el % 2 === 0
})
console.log (numbersFind)
///5.2
const numbersFind2 = numbers1.find (el => {
    return el % 2 === 0
})
console.log (numbersFind2)
/////////justforme
const array = [
    { name: 'Stas', age: 23 },
    { name: 'Gringo', age: 56 },
    { name: 'Ilua', age: 9 },
    { name: 'Ira', age: 150 },
]
// Вывести сумму возрастов юзеров, котрые старше 30 лет умноженное на 2
const arrayFilter = array.filter(el => {
    return el.age > 30
})
console.log (arrayFilter)
const arrayMap = arrayFilter.map (el => {
    return el.age * 2
})
console.log (arrayMap)
const arrayReduce = arrayMap.reduce ((sum, el) => {
    return sum+=el
})
console.log (arrayReduce)