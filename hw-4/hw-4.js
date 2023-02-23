let toy = {
    name: "Pasha",
    color: "green",
    age: 78,
};
toy.name = "baby";

delete toy.name;
console.log(toy);

let week = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7:"Воскресенье",
}
console.log(week[3])
let day = Math.floor(Math.random() * 7);
console.log(week[day])