const textElement = document.querySelector('.timer__text span');
const startElement = document.querySelector('.button-start');
const stopElement = document.querySelector('.button-stop');
const resetElement = document.querySelector('.button-reset');

startElement.addEventListener('click', handleStartTimer);
stopElement.addEventListener('click', handleStopTimer);
resetElement.addEventListener('click', handleResetTimer);

let second = 0;
let timer;

function handleStartTimer() {
    timer = setInterval(() => {
    textElement.textContent = `${++second}`;
}, 1000)
startElement.setAttribute('disabled', '');
}
function handleStopTimer() {
    clearInterval(timer);
    startElement.removeAttribute('disabled', '');
}

function handleResetTimer() {
    textElement.textContent = 0;
    second = 0;
}

