// Complete exercise
// NORMAL level
// Task 1 💻

// const ogr = {
//     name: "faf",
//     age: 12,
// };
// console.log(ogr.name);
// delete ogr.name;
// delete ogr.age;
// console.log(ogr.name);

// Task 2 🖥

// const animal = {
//     age: 5,
//     name: "Alex",
// }
// function hasProperty(obj, key){
//         if(obj[key] === undefined){
//             return "Данного свойства нет в объекте";
//         }
//         else {
//             return true;
//         }
// }
// console.log(hasProperty(animal, "age"));
// console.log(hasProperty(animal, "property"));

// Task 3 🖥
// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }
// for (let key in student){
//     console.log(student[key])
// }
// for (let key in student){
//     console.log(key)
// }

// Task 4 🖥

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// console.log(colors['ru pum pu ru rum'].red, );
// console.log(colors['ru pum pu ru rum'].blue);

// Task 5 🖥

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     tamara: 664,
//     alexandra: 199,
// };

// let count = 0;
// let employeeSalarys = 0;

// for (key in salaries){
//     employeeSalarys += (salaries[key]);
//     count++;
// }

// let averageSalary = employeeSalarys/count;
// console.log(averageSalary);

// Task 6 🖥

// let userName;
// let userPassword;
// let examinationUserName;
// let firstUser;

// function User(userName, userPassword) {
//   this.name = userName;
//   this.password = userPassword;
// }

// function examination() {
//   while (!examinationUserName) {
//     userName = prompt("Введите логин");
//     userPassword = prompt("Введите пароль");
//     firstUser = new User(userName, userPassword);
//     examinationUserName = confirm(`Ваш логин: ${firstUser["name"]}. Всё правильно?`);
//     if (examinationUserName) {
//       firstUser.name = userName;
//       firstUser.password = Number(userPassword);
//     }
//   }

// }

// function initialization(firstUser) {
//     console.log(firstUser["name"]);
//     console.log(firstUser.password);
//   if (
//     firstUser.name === null ||
//     firstUser.name === undefined ||
//     firstUser.password === null ||
//     firstUser.password === 0 ||
//     firstUser.password === undefined
//   ) {
//     alert("Вы ввели неправильный пароль или логин");
//   }
//   else if (isNaN(firstUser.password)){
//     alert("Вы ввели неправильный пароль или логин");
//   }
//   else {
//     alert("Добро пожалоВать.");
//   }
// }

// examination();
// initialization(firstUser);

// ADVANCED level
// Task 1 👨‍🏫
// let gameScore = "4:6";
// let firstClub = Number(gameScore[0]);
// let secondClub = Number(gameScore[2]);
// let stringScore = {
//   1: "Один",
//   2: "Два",
//   3: "Три",
//   4: "Четыре",
//   5: "Пять",
//   6: "Шесть",
//   7: "Семь",
//   8: "Восемь",
//   9: "Девять",
// };

// console.log(`Счёт составляет ${stringScore[firstClub]} : ${stringScore[secondClub]} в пользу "${firstClub > secondClub? "firstClub":"secondClub"}"`);

// Task 2 🖥

// let student1 = {
//   name: 'Polina',
//   age: 27,
// }

// let student2 = {
//   name: 'Polina',
//   age: 27,
// }

// function comparison (student1, student2){
//   if(student1.length !== student2.length){
//     return false
//   }
//   for (let key in student1){
//     if (student1[key] === student2[key]){
//       continue;
//     }
//     else {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(comparison (student1, student2));

// Task 3 🖥

// const animals = {

//   cat: {
//     name: "Енчик",
//     age: 3,
//   },
//   dog: {
//     name: "Орео",
//     age: 2,
//   },
// };

// function exim (animals, userAnimal){
//   if (animals[userAnimal] === undefined){
//     return "Такого объекта не существует";
//   }
//   else{
//     return animals[userAnimal].name;
//   }
// }
// let userAnimal = prompt("Введи чьё имя ты хочешь узнать!");
// alert(exim(animals, userAnimal));

// Или так

let usersAnimal = prompt("Введи чьё имя ты хочешь узнать!");
const animals = {
  name: "Такого животного нет в списке",
  cat: {
    name: "Енчик",
    age: 3,
  },
  dog: {
    name: "Орео",
    age: 2,
  },
};

alert(animals[usersAnimal]? animals[usersAnimal].name: undefined);
