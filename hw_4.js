// Task 1
function getSum (myNum){
    return sum = ((myNum * (myNum + 1)) / 2);
}
getSum(+prompt('Введите число'));



// Task 2
function getCredit (sumCredit){
    return alert ('Сумма переплаты за 5 лет:  ' +(sumCredit * 0.17 * 5))
}
getCredit(+prompt('Введите сумму кредита'));



// Task 3
function trimString (myString, inValue, toValue){
    return alert(myString.substring(inValue -1, toValue));
}
trimString(prompt('Введите строку'), +prompt('С какого символа'), +prompt('По какой символ'));



// Task 4
function getSumNumbers(getNum){
    let temp = getNum.split(''), sum = 0;
    for (let i = 0; i < temp.length; i++){
        sum += Number(temp[i]);
    }
    return alert('Сумма чисел равна: ' + sum);
}
getSumNumbers(prompt('Введите число'));


// Task 5
function getSum(a, b){
    let sum;
    if (a === b) {alert (`Числа ${a} и ${b} равны`)}
    else if (a < 0){a = -a}
    else if (a > 0){a = a-1}
        sum = ((b * (b + 1))/2) - ((a * (a + 1))/2);
        alert(`Сумма чисел равна: ${sum}`)
}
getSum(+prompt('Введите первое число'), +prompt('Введите второе число'))


// Task 6
function fooboo (bool, name1, name2){
    if (bool === 'true') {return name1}
    else {return name2};
}
    function foo (){return foo.name};
    function boo (){return boo.name};
fooboo(prompt('введите true или false').toLowerCase(), foo.name, boo.name)


// ADVANCED level
// Task 1
function triangle (a, b, c){
    if (a+b>c && a+c>b && b+c>a) {return true}
    else {return false};
}
triangle(2,2,3)


// Task 2
function chokolate (n, m){
    if (n == 1 && m == 1){
        return 0
    }
    return n - 1 + n * (m - 1);
}
chokolate(+prompt('Введите первое число'), +prompt('Введите второе число'))
