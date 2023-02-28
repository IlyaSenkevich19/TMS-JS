//         Task 1        //

let arr = {
    myName :'German',
    myAge: 27
};

console.log(arr);

delete arr.myName;
delete arr.myAge;


console.log(arr);

//          Task 2       //


let arr1 ={
    myName :'German',
    myAge: 27
}

if (typeof myAge in arr1){
    console.log(arr1.myAge);
}

//          Task 3       //

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

 for (let key in student){
    console.log(key)
    console.log(student[key])
 }

 //          Task 4       //

 const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors['ru pum pu ru rum'].red + " " + colors['ru pum pu ru rum'].blue);

 //          Task 5       //

 let salaries = {
    andrey1: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
    let sum = 0;
for (let key in salaries){
    sum += salaries[key];
}

    console.log(sum/5);

 //          Task 6       //

 let userLogin = prompt('Введите ваш логин');
 let userPassword = prompt ('Введите пароль');

 let user = {
    login : userLogin,
    password : userPassword
 }

let userLogin2 = prompt ('Повторите ваш логин');
let userPassword2 = prompt ('Повторите ваш пароль');

if (userLogin2 === user.login || userPassword2 === user.password ){
    console.log("Добро пожаловать")
} else {
    console.log("Неверно введены данные")
};

