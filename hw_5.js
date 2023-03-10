// //task 1

// const obj = {
//     name: 'alelsey',
//     age: 20,
//     city: 'Minsk'
// };

// delete obj.name;
// delete obj.age;

// console.log(obj);


// //task 2

// const arr = {
//     age: 20,
//   name:"aleksey",
// }


// for(const key in arr){
//     if(arr[key] === arr.age){
//         console.log("true")
//     }
// }


//task 3


// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }


// for(const key in student){
//     console.log(key)
// }

// for(const key in student){
//     console.log(student[key])
// }


//task 4

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };



//task 5

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     aleksey: 664,
//     alexandra: 199
// }

// let summ = 0;


// for(const key in salaries){
//    summ += salaries[key]
   
// }
// console.log(summ / Object.keys(salaries).length)




//task 6

// const acc ={
//     login: null,
//     password: null,
// }


// acc.login = prompt("Введите логин:");
// acc.password = prompt("Введите пароль:");

// let login2 = prompt("Введите логин еще раз:");
// let password2 = prompt("Введите пароль еще раз:");

// if(login2 === acc.login, password2 === acc.password){
//     alert("Добро пожаловать!")
// }
// else{
//     alert("Неверный логин или пароль")
// };


// console.log(acc)


//task 1 ADVANCED level

let score = "2:5";

const score_obj = {
    1 : "один",
    2 : "два",
     3 : "три",
     4 : "четыре",
     5: "пять",
     6 : "шесть",
    7 : "семь",
    8: "восемь",
   9 : "девять",

}




//task 2 ADVANCED level

let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}



    for(const key in student2, student1){
if (student2[key] === student1[key]){
console.log("true")
}
else{
    console.log("false")
}

    };
    

  




//task 3 ADVANCED level