// Normal Level

// Task 1 
const obj = {
    userName: "Pavel",
    age: 25,
};
delete obj.age 
delete obj.userName
console.log(obj)

//Task 2

const userName = {
    userName: "Pavel",
    age: 25,
};
console.log("age" in userName);
console.log("address" in userName);

// Task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for(let key in student){
    console.log(key);
    console.log(student[key])
};

//Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors["ru pum pu ru rum"].red)
console.log(colors["ru pum pu ru rum"].blue)

//Task 5 !!!!!!!!!!!!!!!
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    pasha: 664,
    alexandra: 199
};
for(let key in salaries){
    let sum = 0;
    sum += salaries[key];
    console.log(sum)
};

//Task 6
let newLogin = prompt("Введите логин для регистрации");
let newPassword = prompt("Введите пароль для регистрации");

const userProf = {};
userProf.newLogin = newLogin;
userProf.newPassword = newPassword;
let login = prompt("Введите логин");
let password = prompt("Введите пароль");
if(userProf.newLogin === login && userProf.newPassword === password){
    console.log("Добро пожаловать!")
} else {
    console.log("Не верный логин или пароль");
};

// ADVANCED level

// Task 1
let check = prompt("Введите номер счета в формате 2:5")
function boll(){
    const maxBoll = 9;
    if(maxBoll > 10){
        console.log("Игра окончена");
    }
}

// Task 2
let student1 = {
    name: 'Polina',
    age: 27,
};
let student2 = {
    name: 'Polina',
    age: 27,
};
console.log(JSON.stringify(student1) === JSON.stringify(student2));

//Task 3 !!!!!!!!!
const animals = {
    cat: {
       name: 'Енчик',
       age: 3,
    },
    dog: {
       name: 'Орео',
       age: 2,
    }
 }
 console.log(animals?.birds)