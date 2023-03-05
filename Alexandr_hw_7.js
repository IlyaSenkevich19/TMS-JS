// ## Complete exercise

// ### NORMAL level

// #### Task 1 🖥

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach((elem) => {
  console.log(elem);
});

fibonacci.forEach(function (elem) {
  console.log(elem);
});

// #### Task 2 🖥

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

const array = users.map(function (elem, index) {
  return `member ${index}: ${elem}`;
});
console.log(array);

const array2 = users.map((elem, index) => `member ${index}: ${elem}`);
console.log(array2);

// #### Task 3 🖥

// const numbers = [7, -4, 32, -90, 54, 32, -21];

const arrNumbers = numbers.filter((elem) => elem > 0);
console.log(arrNumbers);

const arrNumbers2 = numbers.filter(function (elem) {
  return elem > 0;
});
console.log(arrNumbers2);

// #### Task 4 🖥
const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
let result = fibonacci.reduce(function (sum, elem) {
  return sum + elem;
}, 0);
console.log(result);
let result2 = fibonacci.reduce((sum, elem) => sum + elem, 0);
console.log(result2);

// #### Task 5 🖥

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let res = numbers.find((elem) => elem % 2 === 0);
console.log(res);
let res2 = numbers.find(function (elem) {
  return elem % 2 === 0;
});
console.log(res2);

// ### ADVANCED level

// #### Task 1 👨‍🏫

function Student(name, salary, rate) {
  this.name = name;
  this.salary = salary;
  this.rate = rate;

  this.giveCredit = function () {
    switch (this.rate) {
      case "A":
        return 12 * this.salary;
        break;
      case "B":
        return 9 * this.salary;
        break;
      case "C":
        return 6 * this.salary;
        break;
      case "D":
        return 0;
        break;
      default:
        console.log("Такого значения в рейтинге нет");
    }
  };
}

const student1 = new Student("Alexandr", 1000, "A");
const student2 = new Student("Aleksey", 1010, "B");
const student3 = new Student("Pasha", 2000, "C");
const student4 = new Student("Kate", 2100, "A");
const student5 = new Student("Ilya", 1030, "D");

let students = [student1, student2, student3, student4, student5];

function allCredits(arr) {
  let allCredit = arr.reduce(function (sum, elem) {
    return sum + elem.giveCredit();
  }, 0);
  return allCredit;
}
console.log(allCredits(students));

// Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

// const str = "This website is for losers LOL!";
function deleteVowels(str) {
  const array = str.split("");
  console.log(array);
  const ars = array.filter(function (elem) {
    switch (elem.toLowerCase()) {
      case "a":
        return false;
        break;
      case "e":
        return false;
        break;
      case "i":
        return false;
        break;
      case "o":
        return false;
        break;
      case "u":
        return false;
        break;
      case "y":
        return false;
        break;
      default:
        return true;
        break;
    }
  });
  console.log(ars.join(""));
}
deleteVowels(str);

// Или вот так

const str = "This website is for losers LOL!";
let ss = str.replace(/[aeiouy]/gi, '');
console.log(ss);

// Task 3 👨‍🏫 Нет истории, нет теории


function accum (str){
const arr = str.split("");
const arry = [];
arr.forEach(function(elem, index){
  for (let i = 0; i <= index; i++){
    if(i === 0){
      arry.push(elem.toUpperCase());
    }
      else {
        arry.push(elem.toLowerCase());
      }
}
if(index !== arr.length -1){
  arry.push("-")
}
})
let yu = arry.join("");
console.log(yu);
}
accum("abcd");
accum("RqaEzty");
accum("cwAt");

// Task 4 👨‍🏫 Самый высокий и самый низкий

function highAndLow (str){
 let a = str.split(' ').reduce(function(sum, elem){
  if (sum < elem){
    return sum = elem;
  }
  else {
   return sum;
  }
 });
 let b = str.split(" ").reduce(function(sum, elem){
  if (sum > elem){
    return sum = elem;
  }
  else {
    return sum;
  }
 })
 console.log(`${a} ${b}`);
 
}
highAndLow("1 9 3 4 -5");
highAndLow("1 2 3 4 5");
highAndLow("1 2 -3 4 5");

// Task 5 👨‍🏫 Изограммы

function isIsogram(str){
  let result = true;
  str.toLowerCase().split("").forEach(function(elem, index, arrs){
    if (arrs.includes(elem, (index + 1))){
      result = false;
    }
  })
  return result; 
}

console.log(isIsogram("moOse"));
console.log(isIsogram("aba"));
console.log(isIsogram("Dermatoglyphics"));

// Task 6 👨‍🏫 Считаем коды символов

function total(str){
  let total1 = str.split("").reduce((sum, elem) => sum += elem.charCodeAt(0), '');
  console.log(total1);
  let total2 = total1.split("").map(function (elem){
    if (elem == 7){
      return elem = 1;
    }
    else {
      return elem;
    }
  }).join("")
  console.log(total2);
  console.log(total1.split("").reduce(((sum, elem) => sum += Number(elem)), 0) 
  - total2.split("").reduce(((sum, elem) => sum += Number(elem)), 0));
};

total("ABC");

// Task 7 👨‍🏫 Дубликаты

function dubl (str){
  let arr = str.toLowerCase().split("");
  let result = arr.map((elem) => arr.indexOf(elem) === arr.lastIndexOf(elem)? "(": ")").join("");
  console.log(result);
}
dubl("din");
dubl("recede");
dubl("Success");
dubl("(( @");