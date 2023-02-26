function getSum(a){
    let sum = 0;
    for(let i = 0; i <= a; i++){
        sum += i;
    }
    return(sum);
}

console.log(getSum(100));


////2////

let procent = .17;
const year = 5;
let sumCredit = +prompt('Введите сумму кредита');

function bank(){
    return procent * year * sumCredit;

}

let result = bank();
alert(result);


////3/////

let word = prompt('Напишите слово');
let first = +prompt('С какого номера начнется слово');
let last = +prompt('С какого номера закончится слово');

function trimString(string, from, to) {
    return string.slice(from, to)
};

alert(trimString(word, first, last));

////4////
/*let numeric = + prompt('Введите число');
let sum = 0;

function getSumNumbers(sumN){
    for()
    
}*/

let numberTwo = +prompt('Введите число');
let sum = 0;

function getSumNumbersSecond(num) {
    let array = num.toString().split('')
    for(let item of array) {
      console.log(item);
        sum += +item;
    }
    return sum
};
alert(getSumNumbersSecond(numberTwo));


/////5/////

function getSumTwo(a, b){
    let i,
        sum = 0;
    if (a < b){
        for (i = a; i<=b ; i++){
            sum += i;
        }
        console.log(sum);
    } else if(b < a ){
        for (i = b; i<=a ; i++){
            sum += i;
        }
        console.log(sum);
    } else {
        console.log(a);
    }
}

getSumTwo(-1, 2);

///6 ///

function foo(){
    console.log('foo');
}

function boo(){
    console.log('boo');
}

function fooboo(bool){
    if(!!bool){
        foo();
    } else {
        boo();
    }
}

fooboo(false);

/// 1 ///
function triangle(a, b, c){
    return a < (b + c) && b < (a + c) && c < (a + b);
  }
console.log(triangle(15, 18, 19));
  
function triangleTwo(a, b, c){
    return !(a > (b + c) || b > (a + c) || c > (a + b));
  }
console.log(triangleTwo(15, 18, 19));


/// 2/////
function chocolate(n, m){
    let result = 0;
    if(n * m - 1 > 0){
      result = n * m - 1
    } else result = 0;
   return result
  }
  console.log(chocolate(0,3));