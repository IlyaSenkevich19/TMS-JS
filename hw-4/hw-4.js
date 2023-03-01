//NORMAL level

//Task 1

// function getSum(n){
//     let sum = ((n / 2) * (1 + n));
//     console.log(sum)
// }
// getSum(100)

//Task 2 
function calculateOverpayment() {
  const annualInterestRate = 0.17;
  const loanTerm = 5;
  const creditAmount = Number(prompt("Введите сумму кредита:", ""));
  const totalInterest = creditAmount * annualInterestRate * loanTerm;
  alert(totalInterest);
  return `Переплата по кредиту составляет ${totalInterest.toFixed(2)} рублей`;
}

calculateOverpayment();

// Task 3   

// function trimString(str, from, to) {
//   return str.slice(from, to + 1);
// }
// console.log(trimString("Hello World", 0, 4));  

//Task 4 

//  let userNumber = +prompt("Введите число", "");
//  function getSumNumbers(){
//   let sum = 0;
//   while(userNumber > 0){
//     let digit = userNumber % 10;
//     userNumber = Math.floor(userNumber / 10);
//     sum += digit
//   }
//   alert(sum);
//  }
//  getSumNumbers()

 //Task 5

//  function getSum(a,b){
//   let sumNum = 0;
//   if(a > b){
//   for(let i = b; i <= a; i++){
//     sumNum += i;
//   }
//   console.log(sumNum);
// }
// else if(a < b){
//   for(let i = a; i <= b; i++){
//     sumNum += i;
//   }
//   console.log(sumNum);
// }else{
//   console.log(a,"Since both are same")
// }
// }
// getSum(-1, 0)

//Task 6

// function fooboo(log, foo, boo){
//   if (log === true) {
//     function fooName(){
//       console.log(foo);
//     }
//     fooName()
//   } else{
//     function booName(){
//       console.log(boo);
//     }
//     booName()
//   }
// }
// fooboo(false, "Pavel", "Baranouski")

//ADVANCED level

//Task 1

// function triangle(a,b,c){
//   if(a + b > c && a + c > b && c + b > a){
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// }
// triangle(1,0,1)

//Task 2

// function chocolate(n, m) {
//   if (n < 1 || m < 1) {
//     return 0;
//   }

//   let verticalCuts = n - 1;
//   let horizontalCuts = m - 1;
//   console.log(`Вертикальных разрезов ${verticalCuts}`,`Горизотнтальных разрезов ${horizontalCuts}`);
//   return verticalCuts + horizontalCuts;
// }

// let result = chocolate(2,3);
// console.log(result)

// Task 3 

// Запрашиваем баланс банковского счета у пользователя
let userCheck = prompt("Введите сумму вашего баланса", "");

function purchases() {
  // Цены на телефон и аксессуары
  const iPhone = 1000;
  const airPods = 500;
  const power = 100;
  const chargingBlock = 50;
  // Ставки налога
  const taxIphone = 0.3;
  const taxAccessories = 0.1;

  // Переменная для хранения общей стоимости покупки
  let total = 0;

  // Цикл будет выполняться, пока на банковском счете остаток для покупки телефона и аксессуаров
  while (userCheck >= iPhone + airPods + power + chargingBlock) {
    // Добавляем стоимость телефона и аксессуаров к общей стоимости покупки
    total += iPhone + airPods + power + chargingBlock;
    // Вычитаем стоимость телефона и аксессуаров из баланса банковского счета
    userCheck -= iPhone + airPods + power + chargingBlock;
  }

  // Проверяем, хватило ли денег на покупку хотя бы одного телефона и аксессуаров
  if (total === 0) {
    console.log("Недостаточно средств");
    return;
  }

  // Считаем налог на телефон и аксессуары
  const taxAmount = (total * taxIphone) + (total * taxAccessories);

  // Прибавляем налог к общей стоимости покупки
  total += taxAmount;

  // Функция для форматирования числа в строку с символом валюты и двумя знаками после запятой
  const formatPrice = (price) => {
    return "$" + price.toFixed(2);
  }

  console.log("Сумма покупки: " + formatPrice(total));

  // Проверяем, хватает ли денег на покупку с учетом налога
  if (userCheck < total) {
    console.log("Недостаточно средств");
  } else {
    console.log("У вас останется на балансе: " + formatPrice(userCheck - total));
  }
}

purchases();


