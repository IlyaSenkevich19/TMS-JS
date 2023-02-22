//        Task 1            //

let a = 'true',
    b = false,
    c = 17,
    d = undefined,
    e = null;

console.log(typeof a,typeof b,typeof c,typeof d,typeof e);

//        Task 2            //

let height = 15,
    width = 20;

if (height>width){
    console.log(height);
} else {
    console.log(width);
};

//        Task 3            //

for (let i = 1; i<=20; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

//        Task 4            //

let key = true,
    documents = true,
    pen = true,
    apple = false,
    orange = true;

if (key&&documents&&pen&&(apple||orange)){
    console.log('Я иду на работу');
}

//        Task 5            //

let yourNumber = +prompt("Введите целое число");

if (yourNumber % 5 === 0 && yourNumber != 0){
    if (yourNumber % 3 === 0){
        console.log('FizBuz');
    } else {
        console.log('Fiz');
    }
} else if(yourNumber % 3 === 0 && yourNumber != 0){
    console.log('Buz');
} else {
    console.log('Введите другое число');
};

//        Task 6            //

let yourAge = +prompt('Введите ваш возраст');

if ( yourAge > 18){
    console.log(`Попей пивка`);
} else if ( yourAge < 16) {
    console.log(`Пей колу`);
} else {
    console.log(`Можешь выкурить сигаретку, только маме не говори`);
};

//        Task 7            //

let yourDirection = prompt('Введите интересующую вас сторону света');

switch (yourDirection) {
    case 'юг':
        console.log('на юг пойдешь счастье найдешь');
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
        console.log('попробуйте ещё раз');
        break;
}

//        ADVANCED level            //

//        Task 1            //

let userUncorrectName = 'пОлИнА нАбЕрЕжНаЯ',
    userUncorrectName2 = userUncorrectName.toLocaleLowerCase(),
    userCorrectName =  userUncorrectName2[0].toUpperCase()+userUncorrectName2.slice(1,7)+userUncorrectName2[7].toUpperCase()+userUncorrectName2.slice(8);

console.log(`Привет ${userCorrectName}`);



//        Task 2            //

let userNumber = +prompt ('Введите число'),
    minus = +prompt ('Сколько нужно отнять?'),
    plus = +prompt ('Сколько хотите прибавить?'),
    multiply = +prompt ('На сколько будем умножать???'),
    divide = +prompt ('Если делим то выбери не ноль)'),
    res = ((((userNumber - minus) + plus) * multiply) / divide);

console.log(res);

//        Task 3            //

for (let i = 1, lesenka = "#";  i <= 10 ; i++){
    console.log(lesenka);
    lesenka += "#";
}

