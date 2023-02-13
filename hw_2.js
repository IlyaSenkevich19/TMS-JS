
// Task1
let x=20, y=58, z=42;
    console.log(x+y+z);


//Task2
let sec=60, min=60, hour=24, year=365, myAgeInSeconds;
    myAgeInSeconds=45*year*hour*min*sec;
    console.log(myAgeInSeconds);


//Task3
let count = 42, userName = '42';
    console.log('' + count);
    console.log(String(count));

    console.log(Number(userName));
    console.log(parseInt(userName));


//Task4
let a='1', b='2 ', c='белых медведей';
    console.log(a+b+c);


//Task5
let d = 'доступ',
    m = 'морпех',
    n = 'наледь',
    p = 'попрек',
    r = 'рубило',
    lengthWords=(d+m+n+p+r);
    console.log(lengthWords.length);


//Task6
let ssss = 'Slovo', nnnn = 1234, bbbb = true;
    console.log('Variable: ssss have type: ', typeof(ssss));
    console.log('Variable: nnnn have type: ', typeof(nnnn));
    console.log('Variable: bbbb have type: ', typeof(bbbb));


//Task7
let myName = prompt('Введите ваше имя'), 
    maAge = prompt('Введите ваш возраст');
    console.log('Имя пользователя: '+ myName);
    console.log('Возраст пользователя: '+ maAge);


//Advanced
//Task1
let aa=4, bb=3;
aa= ''+aa+bb;
bb= aa[0];
aa= aa[1];
console.log('Переменная аa = '+ aa);
console.log('Переменная bb = '+ bb);

// Второй вариант решения
let aaa = 4, bbb = 3;
[aaa, bbb] = [bbb, aaa]
console.log('Переменная аaa = '+ aaa);
console.log('Переменная bbb = '+ bbb);

//Task2
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher=codeWord1[1]+codeWord2[1]+codeWord3[1]+codeWord4[1]+codeWord5[1];
console.log(cipher);