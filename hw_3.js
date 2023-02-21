//task 1
let a = 'ture',
b = false,
c = 17,
d = undefined,
e = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);


//task 2
 let height = 15,
     widht = 20;

if (height > widht)
console.log(height)
else(console.log(widht));


//task 3
let num;
for (i = 0; i <= 20; i++){

 if (i %3 == 0)
console.log(i);
}


//task  4
let key = true,
 documents = true,
 pen = true,
 apple = false,
 orange = true;

if ((key && documents && pen) && apple || orange) 
console.log("Все взяли")

else(console.log("Что-то забыли"));


while(true)
{
    shouldGoToWork =  key && documents && pen && (apple || orange)
    console.log(shouldGoToWork)
    break
}
 
//task 5 

 number = prompt("Введите число");

if (number % 5== 0 && number % 3 == 0 )
alert ("FizBuz")
else if (number % 3 == 0)
alert ("Buz")
else if (number  % 5 == 0)
alert("Fiz")
else alert(`Число делится с остатком на 5: (${number /5}) и на 3: (${number / 3})`)


//task 6


human = prompt("Сколько вам лет:")
if (human < 18 && human >= 16)
alert("Можешь выкурить сигаретку, только маме не говори")
else if (human >= 18 && human <=101)
alert("Попей пивка")
else if (human < 18 && human > 0)
alert("Пей колу")
else if (human >=102)
alert("Уже ничего не поможет")
else alert("Вы не ввели возраст")


//task 7

 travel = prompt("Куда вы хотите полететь?")

switch(travel){
    case'юг':
    console.log("на юг пойдешь счастье найдешь");
    break;
    case'север':
    console.log("на север пойдешь много денег найдешь");
    break;
    case'запад':
    console.log("на запад пойдешь верного друга найдешь");
    break;
    case'восток':
    console.log("на восток пойдешь разработчиком станешь");
    break;
    default:
        console.log("Попробуйте еще раз")
        break;
}


//task 1 advanced level


fname = prompt("Введте имя:");
foolname = '';
for(i = 0; i < fname.length; i++){
    if(i == 0){
        foolname += fname[i].toUpperCase();
    }
    else{
        foolname += fname[i].toLowerCase();
    }

}
sname = prompt("Введите фамилию:");
for(i = 0; i < sname.length; i++){
    if(i == 0){
        foolname +=` ${sname[i].toUpperCase()}`;
    }
    else{
        foolname += sname[i].toLowerCase();
    }
}

  alert(`Привет, ${foolname}!`)






//task 2 advanced level

form = prompt ("Введите число")
minus = prompt("Сколько отнять?");
suma = Number(prompt ("сколько прибавить"));
umn = prompt ("на сколько умножить");
del = prompt ("на сколько делить?");

otvet = ((((form - minus) + (suma)) * umn) / del);
alert(`(((${form} - ${minus}) + ${suma}) * ${umn}) / ${del} = ${otvet}` );

//task 3 advanced level

let les = "";
for( let i = 0; i<=5; i++){
les += "#" ;

console.log(les)
}



