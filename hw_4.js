// //task 1
// numx = prompt("введите число")
// let getnum = 0;

// function getSum(num){
//     for(i = 0; i <= num ; i++){
        
//         getnum += i;
        
        
//     }
// }

//  getSum(numx);
//  alert(getnum);


 // tsak 2

//  summa_credita = prompt("Какую сумму кредита вы хотите получить?")
//  let srok = 60,
//  stavka = 17,
//  pereplata = 0,
//  summa_plateja = 0,
//  pereplata1 = 0;
//  function clientCredit(credit){

//     for(i = 58; i >= 0; i-- ){
//         summa_plateja = summa_credita / 60;
//         pereplata = credit *((stavka /100)*(31/365));
//         credit = credit - summa_plateja;
//         pereplata1 = pereplata1 + pereplata
        
//     }
    
   
//  }
//   clientCredit(summa_credita);
//   alert(`Переплата по кредиту: \n ${Math.round(pereplata1)}`);



//task 3
// trim = prompt("Введите слово которое хотите обрезать:");
// ot = prompt("Введите значение от");
// po = prompt("Введите значение по");
// let num = ""
// function trimString(str, ot, po){
//     num = str.substring(ot , po);
//     alert(num);
// }

// trimString(trim , ot , po);


//task 4

// a = prompt("Введите число:")

// let b = "";
// let b1 = 0;

// function getSum(sumnum){
//     for(i = 0; i <= sumnum.length -1 ; i++){
//         b = Number(sumnum[i]);
//         b1 += b
       
//     }
//     alert(b1); 
// }

// getSum(a);


//task 5


// numm = prompt("Введите число a:");
// numm_1 = prompt("Введите число b:");
// let summa_a_b = 0;

// function summa_a(a, b){
//     a = Number(a)
//     b = Number(b)
//     if (a <= b){
//     for(i = a; i<=b; i++){
        
//     summa_a_b += i; 
//     console.log(i)
//     }
// }
// else{
//     for(i = b; i<=a; i++){
        
//         summa_a_b += i; 
//         console.log(i)
//         }
// }

//     alert(summa_a_b);
// }

// summa_a(numm, numm_1);



//task 6 

// let boole = prompt("Введите + или -:");

// //boole = Boolean(boole)

// console.log(typeof(boole))

// function foo(){
//     return "foo";
// }

// function boo(){
//     return "boo"
// }

// function fooboo (boolean, foo, boo){
//     console.log(String(boolean))
//     if(boolean !== true){
//         console.log(foo())

//     }
//     else if(boolean === false){
//         console.log(boo());
//     }
// }

// fooboo(boole, foo, boo)


//task 1 ADVANCED level

// let a = prompt('Введите сторону "а":'),
// b = prompt('Введите сторону "b":'),
// c = prompt('Введите сторону "c":');

// a = Number(a);
// c = Number(c);
// b = Number(b);

// function triangle(a1, b1, c1){
//     if(a1 + b1 > c1){
        
//         return "true";
//     }
//     else{
//         return "false"
//     }
// }

// console.log(triangle(a, b, c));


//task 2 ADVANCED level


// let n = prompt("Ведите количество столбцов шоколада"),
// m = prompt("Введите количество строк шоколада");

// n = Number(n);
// m = Number(m);

// function chocolate(n, m){
//     return ((n * m) - 1);
// }

// console.log(chocolate(n, m))


//task 3 ADVANCED level


const iphone_14 = 999,
samsung_s20 = 899,
xiaomi_redmi_40 = 599,
phone_case_iphone_14_original = 99,
phone_case_samsung_s20 = 20,
phone_case_xiaomi_redmi_40 = 10;

let choice_acc = null;
let choice_phone12 = null;
let phone = null;

let balance = prompt("Введите сумму:")
let choice = confirm("Вы хотите купить телефон?")

choice_product(choice);

function choice_product(choice_product){
    if(choice_product == true){
        check_balance_phone(balance);
    }
    else if (choice_product == false){
        check_balance_acc(balance);
        
    }


}







function check_balance_acc(check_balance_acc){
    if (check_balance_acc >= 10 && check_balance_acc <= 19){
        alert(`Мы можем Вам предложить только чехол на xiaomi redmi 40 за: ${phone_case_xiaomi_redmi_40}$`)
    }
    else if (check_balance_acc >= 20 && check_balance_acc <= 98 ){
        alert(`Мы можем Вам предложить чехол на xiaomi redmi 40 за: ${phone_case_xiaomi_redmi_40}$ или чехол на samsung_s20 за: ${phone_case_samsung_s20}$ `)
    }
    else if (check_balance_acc >= 99){
        alert(`Мы можем Вам предложить чехол на xiaomi redmi 40 за: ${phone_case_xiaomi_redmi_40}$, чехол на samsung s20 за: ${phone_case_samsung_s20}$ или оригинальный чехол на iphone 14 за: ${phone_case_iphone_14_original}$`)
    }
    else{
        alert("К сожалению мы не можем ничего Вам предлжить")
    }
};


function check_balance_phone(check_balance_phone){
    if (check_balance_phone >= 599 && check_balance_phone <= 898){
        alert(`Мы можем Вам предложить только xiaomi redmi 40 за: ${xiaomi_redmi_40}$`)
    }
    else if (check_balance_phone >= 899 && check_balance_phone <= 998 ){
        alert(`Мы можем Вам предложить xiaomi redmi 40 за: ${xiaomi_redmi_40}$ или samsung_s20 за: ${samsung_s20}$ `)
    }
    else if (check_balance_phone >= 999){
        choice_phone12 = confirm(`Мы можем Вам предложить xiaomi redmi 40 за: ${xiaomi_redmi_40}$, samsung s20 за: ${samsung_s20}$ iphone 14 за: ${iphone_14}$`)
        choice_phone(choice_phone12)
        function choice_phone(choice_phone1){
            if (choice_phone1 == true){
                phone = confirm(`Iphone 14 за: ${iphone_14}?`)
                if (phone == true){
                  alert(`Вы приобрели iphone 14`)
                balance_iphone = confirm(`У вас на балансе осталось ${balance - iphone_14}`)
                  if(balance_iphone >=99){
                    phone_case = confirm(`Мы можем вам предложить оригинальный чехол на Iphone за: ${iphone_14}`)
                    if(phone_case === true){
                        alert(`Спасибо за покупку вы приобрели Iphone 14 и чехол всего за:${iphone_14 + phone_case_iphone_14_original}`)
                    }
                    else(`Спасибо за покупку вы приобрели Iphone 14 всего за:${iphone_14}`)
                  }
                }
                else{
                 samsung =  confirm(`Samsung s20 за: ${samsung_s20}?`)
                    if(samsung == true){
                        alert("Вы приобрели Samsung s20");
                    }
                    else{
                        xiaomi = confirm(`Xiaomi redmi 40 за: ${xiaomi_redmi_40}?`)
                        if(xiaomi == true){
                            alert("Вы приобрели Xiaomi redmi 40")
                        }
                        else{
                            alert("У нас нет товара который вы хотите")
                        }
                    }
            
                }
            }
            
        }
    }
    else if(check_balance_phone <= 598){
        choice_acc = confirm("Мы можем предложить только чехлы")
        choice_acc1(choice_acc);
        function choice_acc1(choice_acc) {
          if(choice_acc == true){
              check_balance_acc(balance);
          }
          else{
              alert("До свидания")
          }
        }
          }
          else{
            alert("До свидания")
        }
};





