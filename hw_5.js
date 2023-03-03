//////1///////
let cat = {
    name:'Martin',
    age: 5,
}
delete cat.name;
delete cat.age;
console.log(cat);

///2///
 let dog ={
    name: "Aida",
    age: 1,
    color: "brown"
 }
console.log("age" in dog);
console.log("dkdk" in dog);

///3///
const student = {
    name: 'John',
    age: 19,
    isHappy: true,
}
for (let key in student){
    console.log(key);
    console.log(student[key]);
}

///5///

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}

//let result = (salaries.andrey + salaries.sveta + salaries.anton + salaries.andrey + salaries.alexandra)/5;
//console.log(result);

let CountMembers =0;
let TotalSalaries = 0;

for(let key in salaries) {
    CountMembers = CountMembers + 1;
    TotalSalaries = TotalSalaries + salaries[key];
}
console.log(TotalSalaries / CountMembers);

/// 4 ///
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log(colors['ru pum pu ru rum'].red, colors['ru pum pu ru rum'].blue );


///6///
 let login = prompt("Введите Ваш логин");
 let password = prompt("Введите Ваш пароль");

 let user = {
    login: login,
    password: password,
 }
 let NewLogin = prompt("Введите Ваш логин");
 let NewPassword = prompt("Введите Ваш пароль");
 if(NewLogin===login && NewPassword===password){
    alert("Добро Пожаловать!");
 }else{
    alert("Логин и Пароль введены неверно!")
 }

 ////Ad2/////

 let student1 = {
    name: 'Polina',
    age: 27,
}

let student2 = {
    name: 'Polina',
    age: 27,
}

if(student1.name === student2.name && student1.age === student2.age){
    console.log();
}