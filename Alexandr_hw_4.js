// ## Complete exercise

// ### NORMAL level

// #### Task 1 💻

// function getSum (con){
//     let sum = 0;
//     for (let i = 0; i <= con; i++){
//         sum = sum + i;
//     }
//     return sum
// }
// console.log(getSum(100));

// #### Task 2 💻

// const PERSENT = 17;
// const AGE = 5;
// function sumCredit (credit){
//     let plusCredit = AGE * ((credit * 17) / 100);
//     console.log(plusCredit);

// }
// sumCredit(50);

// #### Task 3 💻

// const gh = "Привет я Саша я живу в Сан-Франциско";
// function trimString(str, start, end) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === start.toLowerCase()) {
//       while (str[i] !== end) {
//         newStr += str[i];
//         i++;
//       }
//       newStr += end;
//       return newStr;
//     }
//   }
// }
// console.log(trimString(gh, "Ф", "с"));

// #### Task 4 💻

// function getSumNumbers(jum){
//     let jumString = jum.toString();
//     let sumJum = 0;
//     for(let i = 0; i < jumString.length; i++){
//         sumJum += Number(jumString[i]);
//     }
//     return sumJum;
// }
// console.log(getSumNumbers(2021));

// #### Task 5 💻

// function getSum(a, b){
//     if (a == b){
//         return a;
//     }
//     else if (a > b){
//         return a +b;
//     }
//     else {
//         let sumAB = 0;
//         for (let i = a; i <= b; i++){
//             sumAB += i;
//         }
//         return sumAB;
//     }
// }
// console.log(getSum(-1, 2));

// #### Task 6 💻

// const foo = function(){
//     return "Name FOO";
// }
// const boo = function(){
//     return "Name BOO";
// }

// function fooboo (tubel, floo, bloo){
//     if (tubel == true){
//         return floo();
//     }
//     else {
//         return bloo();
//     }
// }
// console.log(fooboo(true, foo, boo));

// ### ADVANCED level

// #### Task 1 👨‍🏫

// function triangle (a, b, c) {
//     if (a + b < c || a + c < b || b + c < a || a < 0 || b < 0 || c < 0){
//         return false;
//     }
//     else {
//         return true;
//     }
// }
// console.log(triangle(-3, 4, 2));

// #### Task 2 👨‍🏫

// function slice(n, m) {
//   let choclateSlice = n * m;
//   let count = 0;
//   if (n <= 0 || m <= 0 || n === undefined || m === undefined) {
//     return 0;
//   } else {
//     for (let i = choclateSlice; i > 0; i--){
//         count++;
//     }
//     return count - 1;
//   }
// }
// console.log(slice(3,2));
// console.log(slice(0,2));
// console.log(slice(1));
// console.log(slice());

// #### Task 3 👨‍🏫

const TAX_RATE = 20; // ставка налога
const PHONE_PRICE = 100; //цены телефона
const ACCESSORY_PRICE = 20; // Цена аксессуара

let accountBalance = prompt("Сколько у Вас есть денег на счёте ?"); //Баланс клиента
let count = 0; // Количество телефонов
let PURCHASE_COST = 0; // Стоимость покупки

function tax(PHONE_PRICE) {
  return (PHONE_PRICE * TAX_RATE) / 100;
}

function formationPrise(PURCHASE_COST) {
  return `${PURCHASE_COST.toFixed(2)} $`;
}

function prisePhone() {
  while (PURCHASE_COST < accountBalance) {
    PURCHASE_COST += Number(PHONE_PRICE + tax(PHONE_PRICE) + ACCESSORY_PRICE);
    if (PURCHASE_COST > accountBalance){
        return alert("Мало деньжат братишка")
    }
    count++;
    alert(`Сейчас Вы купили телефонов в количестве ${count} за ${formationPrise(PURCHASE_COST)}`);
    let whatYouThin = confirm("Будем покупать ещё?")
    if (whatYouThin){
        continue;
    }
    else{
        return alert(`Всего Вы купили телефонов в количестве ${count} за ${formationPrise(PURCHASE_COST)}`);
    }
  }
  alert(`Всего Вы купили ${count} телефонов за ${formationPrise(PURCHASE_COST)}`);
}

prisePhone();
