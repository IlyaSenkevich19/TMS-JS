// Task 1

function sum(end) {
  let summ = 0;
  for (let i = 1; i <= end; i++) {
    summ += i;
  }
  return summ;
}

console.log(sum(100));

// Task 2

function overpayment(credit) {
  let percent = 17;
  let year = 5;
  return (credit / 100) * percent * year;
}

console.log(overpayment(5000));

// Task 3

function trimString(str, start, end) {
  return str.slice(start, end);
}

console.log(trimString("vbfjhvdfhdsbfc", 2, 8));

// Task 4

function getSumNumbers(num) {
  let sum = 0;
  let str = String(num);
  let arrNum = str.split("");
  for (let i = 0; i < arrNum.length; i++) {
    sum += +arrNum[i];
  }
  return sum;
}

console.log(getSumNumbers(2021));

// Task 5

function getSum(a, b) {
  let summa = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      summa += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      summa += i;
    }
  }

  return summa;
}

console.log(getSum(-1, 2));

// Task 6

function fooboo(tOrF, foo, boo) {
  if (tOrF) {
    foo();
  } else {
    boo();
  }
}

function foo() {
  console.log("FOO");
}

function boo() {
  console.log("BOO");
}

fooboo(false, foo, boo);

////////////////////////////////////////////////////////

// Task 1

function triangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  } else {
    return false;
  }
}

console.log(triangle(5, 4, 10));

// Task 2

function chocolate(n, m) {
  if (n === 0 || m === 0 || (n === !1 && m === 1)) {
    return 0;
  } else {
    return n * m - 1;
  }
}

console.log(chocolate(2, 2));

// Task 3

const phoneСost = 1200;
const accessoriesCost = 200;

let quantity = 0;
let bankAccount = +prompt("Введите баланс банковского счета");

function nds(product) {
  return (product * 20) / 100;
}

function usd(cost) {
  let costUSD = cost * 0.4;
  return costUSD.toFixed(2);
}

function phone(money) {
  let phoneAndAccessories = phoneСost + accessoriesCost;
  for (let i = phoneAndAccessories; i <= money; i += phoneAndAccessories) {
    quantity++;
  }
  let sumPh =
    quantity * (phoneСost + nds(phoneСost)) +
    quantity * (accessoriesCost + nds(accessoriesCost));
  let sumNDS = quantity * nds(phoneСost) + quantity * nds(accessoriesCost);
  alert(
    "Сумма покупки составляет " +
      sumPh +
      " белорусских рублей ( " +
      usd(sumPh) +
      " $), в том числе НДС " +
      sumNDS +
      " белорусских рублей ( " +
      usd(sumNDS) +
      " $)."
  );
  if (sumPh > money) {
    alert("Недостаточно средств");
  } else {
    alert("Спасибо за покупку!");
  }
}

phone(bankAccount);
