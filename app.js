const q = document.querySelector('#www');
const w = document.querySelector('#qqq');
const a = document.querySelector('#aaa');

q.style.display = 'flex';
w.style.display = 'flex';
q.style.backgroundColor = 'red';
w.style.backgroundColor = 'green';
q.style.fontSize = '40px';
w.style.fontSize = '40px';
q.style.justifyContent = 'center';
w.style.justifyContent = 'center';
q.style.margin = '0 50px';
w.style.margin = '0 50px';

a.style.display = 'flex';
a.style.justifyContent = 'center';
a.style.backgroundColor = 'blue';
a.style.color = 'orange';
a.style.margin = '0 50px';

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');


button1.addEventListener('click', (e) => {
    one.classList.add('four');
    two.classList.remove('four')
    three.classList.remove('four')
    setTimeout(() => one.classList.remove('four'), 5000)
});

button2.addEventListener('click', (e) => {
    two.classList.add('four')
    one.classList.remove('four')
    three.classList.remove('four')
    setTimeout(() => two.classList.remove('four'), 5000)
});

button3.addEventListener('click', (e) => {
    three.classList.add('four');
    two.classList.remove('four')
    one.classList.remove('four')
    setTimeout(() => three.classList.remove('four'), 5000)
});

localStorage.setItem('name', 'Vatanabe');
console.log(localStorage.getItem('name'));