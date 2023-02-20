// 1//
let a = 'true';
console.log(typeof a);
let b = false;
console.log(typeof b);
let c = 17;
console.log(typeof c);
let d = undefined;
console.log(typeof d);
let e = null;
console.log(typeof e);



///2////

let height = 15
let width = 20

if (height<width){console.log(width)}
else{console.log(Error)}


///3///

for(let i = 0; i <= 20; i++ )
{
    if(i % 3 == 0){
        console.log(i);
    }
    else{
    }
} 


///4////
/*let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
if()
НЕ ПОНИМАЮ
*/


///5///
let number = prompt("Введите число!");
if(number % 5 ==0 && !(number % 3 == 0) ){
    alert('Fiz');
}
else if(number % 3 ==0 && !(number % 5 == 0)){
    alert('Buz');
}
else if(number % 3 ==0 && number % 5 == 0){
    alert('FizBuz');
}
else{alert(Error)}


///6///
let age = prompt('Сколько Вам лет?');
if (age>=18){
    alert('Попей пивка!');
    if(age=18){
        alert('Можешь выкурить сигаретку, только маме не говори')
    }
}
else if(age<18){
    alert('Пей колу!');
    if(age>=16 && age<=17){
        alert('Можешь выкурить сигаретку, только маме не говори')
    }
}


///7///

let tour = prompt('В какую сторону света ты бы хотел отправиться?');
switch(tour){
    case `юг`:
        alert('на юг пойдешь счастье найдешь');
        break;
    case `север`:
        alert('на север пойдешь много денег найдешь');
        break;
    case `запад`:
        alert('на запад пойдешь верного друга найдешь');
        break;
    case `восток`:
        alert('на восток пойдешь разработчиком станешь');
        break;

}

/////AD1////
function titleCase(str){
    let arr = str.split('');
    let res = arr.map(
        function(val){

            return val.toUpperCase();
        });
    return res;
    console.log(titleCase);
}

titleCase('пОлИнА нАбЕрЕжНаЯ')

/// AD2 ////

let digit = prompt('Укажите число?')
let minus = prompt('cколько отнять?');
let plus = prompt('прибавить?');
let increase = prompt('cколько умножить?');
let divide = prompt('на cколько разделить ?');

alert(digit - minus + plus * increase / divide);




/// AD 3 ///
var str = "#";
while (str.length<=7){
     console.log(str + "\n");
     str+="#";
}












