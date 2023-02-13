//NORMAL level

// Task 1
let x = 20,
    y = 58,
    z = 42;
console.log(x + y + z);

// Task 2
let second = 60,
    minutes = 60,
    watch = 24, 
    year = 365,
    myAgeInSeconds = (year * watch * minutes * second) * 25;
console.log(myAgeInSeconds);

// Task 3
let count = 42,
    userName = '42';
console.log(String(count), Number(userName)); // way 1
console.log(count+"", +(userName)); // way 2

// Task 4
let a = 1,
    b = 2,
    c = "белых медведей",
    str = String(a);
console.log(str + b, c);

// Task 5
let access = "доступ",
    marine = "морпех", 
    frost = "наледь",
    reproach = "попрек", 
    chopped = "рубило";
    lengthWords = (access + marine + frost + reproach + chopped);
console.log(lengthWords.length);

// Task 6
let num = 1, 
    Str = "Hello", 
    boo = true;
console.log(`Variable: num have type:`, typeof (num));
console.log(`Variable: Str have type:`, typeof (Str));
console.log(`Variable: boo have type:`, typeof (boo));

// Task 7
let resultName = prompt("Введите имя пользователя", "Илья"), 
    resultAge = prompt("Введите свой возраст", "23");
console.log(resultName, resultAge);

//ADVANCED level

//Task 1
let numberFirst = 4,
    numberSecond = 3;
[numberFirst, numberSecond] = [numberSecond, numberFirst];
console.log(numberFirst,numberSecond);

//Task 2
let codeWord1 = "обернись",
    codeWord2 = "неужели",
    codeWord3 = "огурцы",
    codeWord4 = "липкие",
    codeWord5 = "?!";
cipher = codeWord1.substring(2, 1) + codeWord2.substring(2, 1) + codeWord3.substring(2, 1) + codeWord4.substring(2, 1) + codeWord5.substring(2, 1);
console.log(cipher);
