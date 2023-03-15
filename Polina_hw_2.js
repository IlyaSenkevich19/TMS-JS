//hw2
/*let lp = 20;
let y = 58;
let z = 42;
let su=(y+lp+z);
console.log(su);


let min=60;
let hour=60;
let day=24;
let year=365;
myAgeInSeconds=20*year*day*hour*min;
console.log(myAgeInSeconds);


let count = 42;
let userName = '42';
userName=count;
console.log(userName);

let f = 1
let m = 2
let p = "белых медведей"
let v='1'+2+p;
console.log(v);

let pro= доступ;
let b= морпех;
let c= наледь;
let d= попрек;
let e= рубило;
let all=pro+b+c+d+e;
lengthWords=all.lengt;
let lengthWords=all.lengt;
console.log(lengthWords);



var name = prompt ('Имя,Фамилия') ;
var age = prompt('Возраст',18);
var message = (age < 18) ? 'false':
alert(message);

let l = 4;
let w = 3;
l = l + w;
w = l - w;
l = l - w;
console.log(l,w);

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";




//hw3

const checked = 'true'; 
alert (typeof checked);
const check = false;
alert (typeof check);
const rp= 17;
alert (typeof rp);

const pt= undefined;
alert (typeof pt);

const yu = null;
alert (typeof yu);




let height = 15
let width = 20
let maxNumber= Math.max (height,width);
console.log(maxNumber);



for (let i=1; i<=20; i++){
     if (i%3 == 0){
     console.log(i)
    }
}


let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
const shouldGoToWork =(key && documents && pen) && (apple || orange);
console.log(shouldGoToWork);



let b = 15;
if (b % 5 == 0) {fizVar = 'Fiz'}
if (b % 3 == 0) {fizVar = 'Buz'}
if ((b % 3 == 0) && (b % 5 == 0)) {fizVar= 'FizBuz'}
console.log (fizVar)




let travel = prompt ('В какую часть света вы бы хотели поехать?')
switch (travel) {
    case 'юг':
        alert ('на юг поедешь - счастье найдешь');
        break;
    case 'север':
        alert ('на север пойдешь - много денег найдешь');
        break;
    case 'запад':
        alert ('на запад пойдешь - верного друга найдешь');
        break;
    case 'восток':
        alert ('на восток пойдешь - разработчиком станешь');
        break;
    default:
        alert ('Попробуйте еще раз!');
        break;
}

//h4

function getSum (a) {
    let b = 0;
    for (let i=1; i<=a; i++ ) {
        b+=i;
    }
    console.log (b)
}
getSum (100);



function num (d, fromPar, toPar) {
    console.log(d.slice (fromPar, toPar));
}
num ('Привет', 2,5);



function getSumNumbers (numberPar) {
    let numberStr = String(numberPar);
    let sum = 0;
    for (let p = 0; p < numberStr.length; p++) {
        let numberNum = Number(numberStr[p]);
        sum+=numberNum;
    }
    console.log (sum)
}
getSumNumbers (2023)



function main (booleanPar, firstFun, secondFun) {
    if (booleanPar) {
        firstFun ();
    } else {
        secondFun();
    }
}
function first () {
    console.log ('first')
}
function second () {
    console.log ('second')
}
main (true, first, second);
main (false, first, second);


//hw5

let person={
name:'Полина',
age:20
}
delete person.age;
delete person.name;

console.log (person);



let user = {    
    name: "John",  
    age: 30        
  }
  if (user.count) {
    console.log(true);
}
console.log('age' in second );


const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
}
console.log(colors['ru pum pu ru rum'].red + " " + colors['ru pum pu ru rum'].blue);


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

    //hw6
   

    const color = ['red', 'green', 'blue']
    console.log (color.length);


    const animals = ['monkey', 'dog', 'cat']
    console.log (animals[animals.length-1])



    const numbers = [5, 43, 63, 23, 90]
    numbers.splice(0, 5)
    console.log (numbers)
    numbers.length = 0;
    console.log (numbers);



    const cats = ['Gachito', 'Tom', 'Batman'];
    for (let i = 0; i < cats.length; i++) {
    console.log (cats[i])
    }
    for (let cat of cats) {
    console.log (cat)
}


    const students = ['Polina', 'Dasha', 'Masha'];
    students.splice(2, 1, 'Borya');
    console.log (students)
    students.splice(0, 1, 'Andrey')
    console.log (students)
   
   

    

