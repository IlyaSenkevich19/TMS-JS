// Task 1

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

fibonacci.forEach((el) => console.log(el));
fibonacci.forEach(function (el) {
  console.log(el);
});

// Task 2

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
let counter = 1;

// let members = users.map(function (name) {
//     let str = "member " + counter + ": " + name;
//     counter++;
//     return str;
// })

let members = users.map((name) => {
  let str = "member " + counter + ": " + name;
  counter++;
  return str;
});

console.log(members);

// Task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];

// let numbersPozitive = numbers.filter((numb) => {
//         return numb >= 0;
// })

let numbersPozitive = numbers.filter(function (numb) {
  return numb >= 0;
});

console.log(numbersPozitive);

// Task 4

const fibonacci2 = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

// let fibonacciSum = fibonacci2.reduce((sum, el) => sum += el);

let fibonacciSum = fibonacci2.reduce(function (sum, el) {
  return (sum += el);
});

console.log(fibonacciSum);

// Task 5

const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// let evenNum = numbers2.find((el) => el % 2 === 0);

let evenNum = numbers2.find(function (el) {
  return el % 2 === 0;
});

console.log(evenNum);

//////////////////////////////////////////////////////////////

// Task 1

function Student(salary, rate, name) {
  this.name = name;
  this.rate = rate;
  this.salary = salary;
  credit = function credit(obj) {
    let creditSum;
    switch (obj.rate) {
      case "A":
        creditSum = 12 * obj.salary;
        break;
      case "B":
        creditSum = 9 * obj.salary;
        break;
      case "C":
        creditSum = 6 * obj.salary;
        break;
      case "D":
        creditSum = 0 * obj.salary;
        break;
    }
    return creditSum;
  };
}

let students = [];
students.push(new Student(500, "A", "Mary"));
students.push(new Student(1000, "B", "Jhon"));
students.push(new Student(700, "C", "Kola"));
students.push(new Student(600, "D", "Stas"));
students.push(new Student(900, "A", "Ola"));

function summ(arr) {
  let summAll = 0;
  for (let i = 0; i < arr.length; i++) {
    summAll += credit(arr[i]);
  }
  return summAll;
}

console.log(`${credit(students[1])} for ${students[1].name}`);
console.log(summ(students));

// Task 2

function kommentStop(komment) {
  let arr = komment.split("");
  let kommentNew = arr.filter(
    (el) =>
      el !== "a" &&
      el !== "A" &&
      el !== "e" &&
      el !== "E" &&
      el !== "i" &&
      el !== "I" &&
      el !== "o" &&
      el !== "O" &&
      el !== "u" &&
      el !== "U"
  );
  return kommentNew.join("");
}

console.log(kommentStop("This website is for losers LOL!"));

// Task 3

function accum(str) {
  str = str.toLowerCase();
  let arr = str.split("");
  let repeat = arr.map((el, ind) => {
    let k = 0;
    let str2 = "";
    while (k != ind + 1) {
      str2 += el;
      k++;
    }
    return str2;
  });
  for (let i = 0; i < repeat.length; i++) {
    repeat[i] = repeat[i].split("");
    repeat[i][0] = repeat[i][0].toUpperCase();
    repeat[i] = repeat[i].join("");
  }
  return repeat.join("-");
}

console.log(accum("RqaEzty"));

// Task 4

function highAndLow(str) {
  let arr = str.split(" ");
  let min, max;
  max = Math.max.apply(null, arr);
  min = Math.min.apply(null, arr);
  return `${max} ${min}`;
}

console.log(highAndLow("1 9 3 4 -5"));

// Task 5

function isIsogram(str) {
  let arr = str.toLowerCase().split("");
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("moOse"));

// Task 6

function total(str) {
  let total1 = "";

  for (let i = 0; i < str.length; i++) {
    total1 += str.charCodeAt(i);
  }
  total1 = total1.split("");

  let total2 = total1.map((el) => {
    if (el === "7") {
      el = "1";
    }
    return el;
  });
  let sum1 = total1.reduce((sum, el) => sum + +el, 0);
  let sum2 = total2.reduce((sum, el) => sum + +el, 0);
  return sum1 - sum2;
}

console.log(total("ABC"));

// Task 7

function repeat(str) {
  let arri = str.toLowerCase().split("");
  let rep = arri.filter(function (elem, ind) {
    return arri.indexOf(elem) !== ind;
  });
  let repeatChars = [...new Set(rep)];

  for (let i = 0; i < arri.length; i++) {
    for (let j = 0; j < repeatChars.length; j++) {
      if (arri[i] === repeatChars[j]) {
        arri[i] = ")";
        console.log(arri);
      }
    }
    if (arri[i] !== ")") {
      arri[i] = "(";
    }
  }
  arri = arri.join("");
  return arri;
}

console.log(repeat("Success"));
