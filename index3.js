//1
const firstType = 'true';
const secondType = false;
const thirdType = 17;
const fourthType = undefined;
const fifthType = null;
console.log (firstType, secondType, thirdType, fourthType, fifthType)
//2
let height = 15
let width = 20
let maxNumber = Math.max (height, width);
console.log (maxNumber)
//3
for (let i = 1; i <= 20; i++) 
{ if (i % 3 == 0)
{console.log (i);}}
//i dont get it
//4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
const shouldGoToWork =(key && documents && pen) && (apple || orange);
console.log (shouldGoToWork)
//5
let b = 15;
if (b % 5 == 0) {fizVar = 'Fiz'}
if (b % 3 == 0) {fizVar = 'Buz'}
if ((b % 3 == 0) && (b % 5 == 0)) {fizVar= 'FizBuz'}
console.log (fizVar)
//6 
let beer = prompt ('Укажите ваш возраст')
if (beer > 18) {beerVar = 'Drink some beer'}
if (beer < 18) {beerVar = 'Drink some coke'}
if ((beer <=18) &&(beer >= 16)) {beerVar = 'You can smoke one cigarette, but dont tell your mom!'}
console.log (beerVar)
//7
let travel = prompt ('В какую часть света вы бы хотели поехать?')
switch (travel) {
    case 'юг':
        alert ('на юг поедешь - счастье найдешь');
        break;
    case 'север':
        alert ('на север пойдешь - много денег найдешь');
        break;
    case 'запад':
        alert ('на запад пойдешь - верного друга найдешь');
        break;
    case 'восток':
        alert ('на восток пойдешь - разработчиком станешь');
        break;
    default:
        alert ('Попробуйте еще раз!');
        break;
}