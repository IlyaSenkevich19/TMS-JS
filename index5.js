//1
const Obj = {
    color: 'red',
    weight: 40
}
console.log (Obj)
delete Obj.weight;
console.log (Obj)
//2
const objSecond = {
    country: 'Belarus',
    city: 'Brest'
}
if ('country'in objSecond) {
    console.log (true)
} else console.log (false);
//3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (const key in student){
    console.log (key);
    console.log (student[key]);}
//4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
}
console.log (colors['ru pum pu ru rum'].red)
console.log (colors['ru pum pu ru rum'].blue)
//5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199,
}
function sumMassiv (salaries){
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum+=salary;
    }
    return sum;
}
console.log (sumMassiv(salaries));
function sumSalaries (salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0)
}
console.log (sumSalaries(salaries))
///6
let login = prompt ('Введите ваше имя');
let password = prompt ('Введите пароль');
const userData = {
    login: login,
    password: password,
};
let secondLogin = prompt ('Введите ваше имя');
let secondPassword = prompt ('Введите пароль');
if (userData.login === secondLogin && userData.password === secondPassword) {
    alert ('Добро пожаловать')
}
else {
    alert ('Проверьте введенные данные')
}

