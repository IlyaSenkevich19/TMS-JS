// Task 1
const my_object = {name: 'Slava',
            city: 'Minsk',
}
console.log(my_object);

delete my_object.name;
delete my_object.city;
console.log(my_object);


// Task 2
const my_object2 = {name: 'Slava',
                    city: 'Minsk',
}
if ('name' in my_object2) {console.log('true')}


// Task 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true,
}
for (let key in student) {
console.log(`${key}, ${student[key]}`);
}


// Task 4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(`${colors['ru pum pu ru rum'].red}, ${colors['ru pum pu ru rum'].blue}`);


// Task 5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
let avg_salary = 0,
    length_salaries = Object.keys(salaries).length;
    for (let key in salaries) {
        avg_salary += salaries[key]/length_salaries;
    }
console.log(avg_salary);


// Task 6
let userData = {};
    userData.name = prompt('Введите имя');
    nameValid = prompt('Подтвердите введенное имя');
    userData.password = prompt('Введите пароль');
    passwordValid = prompt('Подтвердите введенный пароль');
if (nameValid === userData.name && passwordValid === userData.password) {
alert('Добро пожаловать!')}
else {alert('Данные не совпадают!')}



// ADVANCED Level

// Task1
let numWord = { 0: 'Ноль', 1: 'Один', 2: 'Два', 3: 'Три', 4: 'Четыре', 
                5: 'Пять', 6: 'Шесть', 7: 'Семь', 8: 'Восемь', 9: 'Девять'};
function convert(score){
    return alert(`${numWord[score[0]]} : ${numWord[score[2]]}`);
}
convert(prompt('Введите счёт через двоеточие'));


// Task 2
let student1 = {
    name: 'Polina',
    age: 27,
}
let student2 = {
    name: 'Polina',
    age: 27,
}
console.log(JSON.stringify(student1) === JSON.stringify(student2));


// Task 3
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
    if (animals.bird === undefined) {animals.bird = 'Нет данных'}
    console.log(animals.bird);


