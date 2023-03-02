const arr = [ 11, 2, 3, -8, -4];

let result = arr.some((el) => {
    return el > 0
});

let result2 = arr.some((el) => {
    return el > 30
});

let result3 = arr.every((el) => {
    return el > 0
});

console.log(result, result2, result3); 

const arr_str = ['abc', 'def', 'ghi'];

const newArr_str = arr_str.map((el) => {
    return el.split('').reverse().join('')
});

console.log(newArr_str);

const num_arr = [ 25, 81, 121, 4096 ];

const newNum_arr = num_arr.map((el) => {
    return Math.sqrt(el)
});

console.log(newNum_arr);

const num_arr2 = [ 1, 2, 3, 4, 5 ];

const newNum_arr2 = num_arr.map((el, i) => {
    return el * i
});

console.log(newNum_arr2);

const array4 = [
    { name: 'Stas', age: 23 },
    { name: 'Gringo', age: 56 },
    { name: 'Ilua', age: 9 },
    { name: 'Ira', age: 150 },
];

const newArray = array4.filter((el) => el.age > 30);

const newArray2 = newArray.map((el) => el.age * 2 );

const newArray3 = newArray2.reduce((sum, el) => sum + el);

console.log(newArray, newArray2, newArray3);
