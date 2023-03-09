const user = {
    name: 'Ilya',
    age: 18,
    // 12 :4,
    "get likes": 4,
    [1 + 2]: 23 //Посчитает и назовёт ключ как 3, а значение будет 23
}
// console.log(user[12]) можно так обратиться
console.log(user["get likes"]); //А можно так если это ключ-строка
console.log(user[1 + 2]); //Можно так
console.log(user[3]); // А можно так

user['name'] = 'Slava'; //можно как обычно  user.name = 'Slava'
console.log(user)
user.address = 'Minsk'; //Добавили ключ адрес и присвоили значение
console.log(user)


const user2 = Object.assign({}, user) // создаём объект и копируем из user данные. Не ссылку
//const user2 = {...user} //или же таким образом. Так приоритетней (называется деструктуризация)

//почитать про 
// object.entries(user) выводит ключ и значение и отображает как массив
// object.key(user) выводит ключи объекта
// object.value(user) выводит значения объекта

// this - это контекст вызова. Так называется

const toy = {
    name: 'cars',
    color: 'red',
    age: 20,
}
console.log(toy);
toy.name = 'moto';
console.log(toy.name);
delete toy.name;
console.log(toy);
