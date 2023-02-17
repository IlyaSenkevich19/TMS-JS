
// Task 1
let a1 = 'true',
    a2 = false,
    a3 = 17,
    a4 = undefined,
    a5 = null;
console.log(typeof(a1) + ',', typeof(a2) + ',', typeof(a3) + ',', typeof(a4) + ',', typeof(a5));

// Task 2
let height = 15, width = 20;
if (height > width) {console.log('Высота больше ширины')}
else console.log('Ширина больше высоты');

// Task 3
for (let i = 1; i <= 20; i++){
    if (i % 3 === 0) console.log(i)}

// Task 4
let key = true,
    documents = true,
    pen = true,
    apple = false,
    orange = true,
    shouldGoToWork;
if ((key && documents && pen) && (apple || orange)) {
    shouldGoToWork = 'На работу иду'; console.log(shouldGoToWork)}
else {shouldGoToWork = 'Никуда не пойду'; console.log(shouldGoToWork)};

// Task 5
let myNumber = +prompt('Введите число:');
if ((myNumber % 3 === 0) && (myNumber % 5 === 0)) {alert('FizBuz')}
else if (myNumber % 5 === 0) {alert('Fiz')}
else if (myNumber % 3 === 0) {alert('Buz')};

// Task 6
let myAge = +prompt('Введите свой возраст:');
if (myAge >= 16 && myAge <= 18) {alert('Можешь выкурить сигаретку, только маме не говори')}
else if (myAge > 18) {alert('Попей пивка')}
else if (myAge < 16) {alert('Пей колу')};

// Task 7
let direction = prompt('Введите направление').toLowerCase();
switch (direction) {
    case 'юг': alert ('на юг пойдешь счастье найдешь'); break;
    case 'север': alert ('на север пойдешь много денег найдешь.'); break;
    case 'запад': alert('на запад пойдешь верного друга найдешь.'); break;
    case 'восток': alert('на восток пойдешь разработчиком станешь.'); break;
    default: alert('Неизвестное направление. Попробуйте ещё раз.');
}

// ADVANCED level
// Task 1
let userName = 'пОлИнА нАбЕрЕжНаЯ', temp;
    temp = userName.toLowerCase().split(' ');
    for (let i = 0; i < temp.length; i++) {
        temp[i] = temp[i][0].toUpperCase() + temp[i].substring(1);
    }
    userName = temp.join(' ');
    alert('Привет,  '+ userName + '!');

// Task 2
let a = +prompt('Введите число'),
    b = +prompt('Сколько отнять?'),
    c = +prompt('Сколько прибавить?'),
    d = +prompt('На сколько умножить?'),
    e = +prompt('На сколько разделить от предыдущего результата?'),
    dataOutput;
    dataOutput = ((((a - b) + c) * d) / e);
    alert('(((('+a+' - '+b+') + '+c+') * '+d+') / '+e+' = '+dataOutput+')');