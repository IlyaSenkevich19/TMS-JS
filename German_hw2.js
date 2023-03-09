/////////////////////TASK_1///////////////////

let x = 20,
    y = 58,
    z = 42;

console.log(x+y+z);

//////////////////////TASK_2/////////////////////


let sec = 1,
    min = sec*60,
    hour = min*60,
    day = hour*24,
    year = day*365,
    myAgeInSeconds = year*27;

console.log(myAgeInSeconds+' sec');

//////////////////////TASK_3/////////////////


let count = 42,
    userName = '42';

    countString = String(count);
    countString2 = count + "" ;

console.log(countString,countString2);

    userNameNumber = Number(userName);
    userNameNumber2 = (+userName);
    userNameNumber3 = parseInt(userName);

console.log(userNameNumber,userNameNumber2,userNameNumber3);
///////////////////////TASK_4////////////////


let one = 1,
    two = 2,
    bears = "белых медведей";

console.log(one+(two+" "+bears));

////////////////////TASK_5////////////////////
let access = 'доступ',
    marin = 'морпех',
    ace = 'наледь',
    hz =  'попрек',
    axe = 'рубило',
    lengthWords = (marin.length+access.length+ace.length+hz.length+axe.length);

    console.log(lengthWords);

///////////////////TASK_6/////////////////////


let num = 42,
    str = 'сорок два',
    bool = true;

console.log("Variable: 'num' have type: "+ typeof num);
console.log("Variable: 'str' have type: "+ typeof str);
console.log("Variable: 'bool' have type: "+ typeof bool);


/////////////////TASK_7///////////////////////

let userNamee = prompt('Введите ваше нэйм'),
    userAge = prompt('Сколько вам эйдж?');

console.log('Вас зовут "' + userNamee + '" и вам ' + userAge + ' let');


////////////////////ADVANCED level///////////////////////

////////////////////////Task 1/////////////////////////

let a = 4,
    b = 3;

    a = a + b;
    b = a - b;
    a = a - b;

console.log(a , b);

////////////////////////////Task 2///////////////////

let codeWord1 = "обернись",
    codeWord2 = "неужели",
    codeWord3 = "огурцы",
    codeWord4 = "липкие",
    codeWord5 = "?!",
    password = codeWord1.charAt(1)+codeWord2.charAt(1)+codeWord3.charAt(1)+codeWord4.charAt(1)+codeWord5.charAt(1);

console.log(password);




