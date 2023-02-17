const tr='true'
fal=false
sev=17
und=undefined
n=null;
console.log(typeof tr, typeof fal, typeof sev, typeof und, typeof null)


let height = 15
let width = 20
if (height>width){
    console.log(height)
}else if(width>height){
    console.log(width)
}


for(let i=1; i<=20; i++){
    if(i%3===0){
        console.log(i)
    }
}



let key = true
    let documents = true
    let pen = true
    let apple = false
    let orange = true
    let shouldGoToWork
    if(documents&&pen&&key&&(apple||orange)){
        shouldGoToWork=true;
    }else{
        shouldGoToWork=false;
    }
    console.log(shouldGoToWork)



    let num=prompt('Введите число!')
    if (num%5===0){
        alert('Fiz')
    }
    if(num%3===0){
        alert('BUZ')
    }
    if(num%3===0 && num%5===0){
        alert('FizBuz')
    }
    


    let age=prompt('Введите ваш возраст!')
    if(age>18){
        alert('Попей пивка!')
    }
    else if(age<18){
        alert('Пей колу!')
    }
    if(age>16 && age<=18){
        alert('Можешь выкурить сигаретку, только маме не говори')
    }




    let tourist=prompt('В какую сторону света вы хотите отправиться?')
    switch(tourist){
        case 'юг':
            console.log ('на юг пойдешь счастье найдешь');
            break;
            case 'север':
                console.log('на север пойдешь много денег найдешь');
                break;
                case 'запад':
                    console.log('на запад пойдешь верного друга найдешь');
                    break;
                    case 'восток':
                    console.log('на восток пойдешь разработчиком станешь');
                    break;
                    default:
                        console.log('Попробуй еще раз!')
    }





    let name=prompt('Введите имя')
    let fam=prompt('Введите фамилию')
    let lolname = name[0].toUpperCase() + name.slice(1).toLowerCase();
let lolfam = fam[0].toUpperCase() + fam.slice(1).toLowerCase();
alert(`Привет, ${lolname} ${lolfam}!`);




let numOne=prompt('ВВедите число')
let numTwo=prompt('Skolko pribavit&')
let numThree=prompt('Skolko otnyat?')
let numFour=prompt('Na skolko umnozhit?')
let numFive=prompt('Na skolko razdeloiot?')
let num1 = parseInt(numOne);
let num2 = parseInt(numTwo);
let num3 = parseInt(numThree);
let num4 = parseInt(numFour);
let num5 = parseInt(numFive);
let result =  (num1 - num3) + num2 * num4 / num5;
alert (`((${num1} - ${num3}) + ${num2}) * ${num4} / ${num5} = ${result}`);





let les='#'
console.log(les)

for(let i=1; i<6; i++){
    les +='#'
    console.log(les + '\n');
}