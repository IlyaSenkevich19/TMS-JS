const person ={
    name: 'Danya',
    age:19,
}
console.log(person)

delete person.name;
delete person.age;
console.log(person)


//      Task 2

const task__2 ={
    name: 'Danya',
    age:19,
}
 if(task__2.age){
console.log(true)
 }

 //     Task 3

 const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student){
    console.log(key)
    console.log(student[key])
}

//      TASK 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum']['red'] + ' ' + colors['ru pum pu ru rum'].blue)


//      TASK 5

let salaries = {
    andrey1: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
let zp=0;
for(let per in salaries){
    zp += salaries[per]
    
}
console.log(zp/5);


//      TASK 6

    let login = prompt('login')
    let password = prompt('password')

    let user ={
        userLog:login,
        userPass:password
    }
    
    let acceptLog = prompt('Подтвердите логин')
    let acceptPass = prompt('Подтвердите пароль')
if(user.userLog===acceptLog && user.userPass===acceptPass){
    console.log('Добро пожаловать!')
} else{
    console.log('eror')
}