//1
function getSum (a) {
    let b = 0;
    for (let i=1; i<=a; i++ ) {
        b+=i;
    }
    console.log (b)
}
getSum (100)
//2
function loan (c) {
    let interestRate = 17;
    let years = 5;
    let forOneYear = (c * interestRate) / 100;
    let forFiveYears = forOneYear * years;
    console.log (forFiveYears)
}
loan (50000)
//3
function num (d, fromPar, toPar) {
    console.log(d.slice (fromPar, toPar));
}
num ('Привет', 2,5)
//4
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
//5
function getSumAgain(a, b) {
    let sum = 0;
    if (a < b){
        for (let i = a; i <= b; i++){
            sum+=i;
        }
        console.log (sum)
    } else if (a > b){
        for (i = b; i <= a; i++){
            sum+=i;
        }
        console.log (sum)
    }
}
getSumAgain (8,5)
//6
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