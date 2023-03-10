//task 1

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];


// fibonacci.forEach(function (elem){
//     console.log(elem)
// })


// fibonacci.forEach( elem =>{
//     console.log(elem)
// })

//task 2

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

// const us = users.map((elem, index) =>{
//     return (`member ${index}: ${elem}`)
// })

// console.log(us)

// const user =users.map(function (elem, index){
//     return (`Member ${index}: ${elem}`)
// })

// console.log(user)



//task 3

const numbers = [7, -4, 32, -90, 54, 32, -21]


const num = numbers.filter(function (elem){
    return elem >= 0
})

console.log(num)


const num1 = numbers.filter(elem => {
    return elem >= 0
})

console.log(num1)


//task 4 

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// const red = fibonacci.reduce(function (elem , index){
//   return  elem += index
// })

// console.log(red);

// const red2 = fibonacci.reduce((elem , index) => {
//     return elem+=index
// })

// console.log(red2);



//task 5

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

// const fin = numbers.find(function (elem){
//     return elem %2 === 0
// })

// console.log(fin)

// const fin1 = numbers.find(elem => {
//     return elem %2 === 0
// })

// console.log(fin1)


//task 1 ADVANCED level



//task 2 ADVANCED level

let a = [prompt("Комментарий")];

