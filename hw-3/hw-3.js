// Normal level

//Task 1

// let a = 'true',
//     b = false,
//     c = 17,
//     d = undefined,
//     x = null;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof x);

//Task 2

// let height = 15,
//     width = 20;
// console.log(Math.max(height,width));

//Task 3

// for (let i = 1; i <= 20; i++){
//     if (i % 3 === 0){
//         console.log(i)
//     }
// }

//Task 4 

// const key = true,
//     documents = true,
//     pen = true,
//     apple = false,
//     orange = true,
//     shouldGoToWork = key + documents + pen + apple || orange;
// console.log(shouldGoToWork)

//Task 5

// const num = prompt("Введите число", "");
// if (num % 5 === 0 && num % 3 !== 0) {
//     alert("Fiz")
// }
// else if (num % 3 === 0 && num % 5 !== 0) {
//     alert("Buz")
// }
// else if (num % 5 === 0 && num % 3 === 0) {
//     alert("FizBuz")
// }

// Task 6

// const ageUser = prompt("Введите ваш возраст", "");
// if (ageUser > 18){
//     alert("Попей пивка")
// }
// else if(ageUser <= 15) {
//     alert("Пей колу!")
// }
// else if(ageUser >= 16 && ageUser <= 18){
//     alert("Можешь выкурить сигаретку, только маме не говори.")
// }

// Task 7

// const userQuestion = prompt("Введите сторону света","");
// if (userQuestion === "юг" || userQuestion === "Юг"){
//     alert("на юг пойдешь счастье найдешь")
// }
// else if (userQuestion === "север" || userQuestion === "Север"){
//     alert("на север пойдешь много денег найдешь")
// }
// else if (userQuestion === "запад" || userQuestion === "Запад"){
//     alert("на запад пойдешь верного друга найдешь")
// }
// else if (userQuestion === "восток" || userQuestion === "Восток"){
//     alert("на восток пойдешь разработчиком станешь")
// }

//ADVANCED level

//Task 1
// const Username = prompt("Введите имя пользователя", ""),
//     correctedName = Username.toLowerCase().replace(/(^|\s)\S/g, letter => letter.toUpperCase());
// alert('Привет, ' + correctedName + '!');

//Task 2
// const num = prompt("Введите число",""),
//     minus = prompt("Сколько отнять?",""),
//     plus = prompt("Сколько прибавить?",""),
//     multiply = prompt("Сколько умножить?",""),
//     divide = prompt("На сколько делить?", ""),
//     formulaСalculation = ((((num - minus) + Number(plus)) * multiply) / divide);
//     alert(formulaСalculation);
    
//Task 3 

// for(let hashtag = 0; hashtag <= 6; hashtag++){
// if (hashtag === 1){
//     console.log("#")
// }
// else if (hashtag === 2){
//     console.log("##")
// }
// else if (hashtag === 3){
//     console.log("###")
// }
// else if (hashtag === 4){
//     console.log("####")
// }
// else if (hashtag === 5){
//     console.log("#####")
// }
// else if (hashtag === 6){
//     console.log("######")
// }
// }