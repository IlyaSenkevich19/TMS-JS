// ### NORMAL level

// #### Task 1 💻

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

const first = {
    name: 'Mark II',
    birthYear: 1992,
};

delete first.name;
delete first.birthYear;

// #### Task 2 🖥

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить
//  есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

const second = {
    count: 29,
    year: 2023,
};

//first solution:
if (second.count) {
    console.log(true);
};

// second solution:
console.log('year' in second );

// #### Task 3 🖥

// Дан обьект:

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

// C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

for (let key in student) {
    console.log(key);
}

for (let key in student) {
    console.log(student[key]);
}
//alternative solution:
console.log(Object.keys(student));
console.log(Object.values(student));

// #### Task 4 🖥

// Дан обьект:

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

// Вывести в консоль слово красный и синий

console.log(colors["ru pum pu ru rum"].red, colors["ru pum pu ru rum"].blue);

// #### Task 5 🖥

// Дан обьект:

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
};

// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let membersCount = 0;
let totalSalaries = 0;

for (let key in salaries) {
    membersCount = membersCount+1
    totalSalaries = totalSalaries+salaries[key]
};

console.log(totalSalaries / membersCount);

// #### Task 6 🖥

// Создать валидатор, запросить у пользователя логин и пароль для регистрации. 
// Затем данные записать в обьект. 
// Потом попросить пользователя подтвердить данные. 
// Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 

let name = prompt("Введите имя");
let password = prompt("Введите пароль");

const user = {
    login: name,
    password: password,
};

let newName = prompt("Введите имя");
let newPassword = prompt("Введите пароль");

if (user.login === newName && user.password === newPassword) {
    console.log("Добро пожалоВать");
} else {
    console.log("Вы ввели неверные данные");
};


// ### ADVANCED level

// #### Task 1 👨‍🏫

// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. 
// Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. 
// Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.

const string = '2:5';

const firstSimbol = string[0];
const secondSimbol = string[2]

const score = {
    '0': 'нуль',
    '1': 'один',
    '2': 'два',
    '3': 'три',
    '4': 'четыре',
    '5': 'пять',
    '6': 'шесть',
    '7': 'семь',
    '8': 'восемь',
    '9': 'девять'
};

console.log(`${score[firstSimbol]} - ${score[secondSimbol]}`);

// #### Task 2 🖥

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

let student1 = {
    name: 'Polina',
    age: 27,
};

let student2 = {
    name: 'Polina',
    age: 27,
};

function objectCompare(obj1, obj2) {
    for (let key in obj1) {
        if ((`${key}: ${obj1[key]}`) !== (`${key}: ${obj2[key]}`)) {
        return false
        }
    }

    for (let key in obj2) {
        if ((`${key}: ${obj2[key]}`) !== (`${key}: ${obj1[key]}`)) {
        return false
        }
    }
    return true
};

console.log(objectCompare(student1, student2));

// #### Task 3 🖥

// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. 
// Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша 
// программа работала дальше.

const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
};
