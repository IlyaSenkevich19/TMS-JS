let timerValue = 0;
let prevTimerValue = 0;
let timerInterval = null;

const time_sec = document.querySelector(".time_sec");
const btnStart = document.querySelector(".time_start");
const btnStop = document.querySelector(".time_stop");
const resetTime = document.querySelector(".reset_time");

function timeStart (){
    timerInterval = setInterval (() => {
        timerValue++;
        time_sec.textContent = `${timerValue < 10 ? '0' : ''}${timerValue} sec`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timerValue++;
        time_sec.textContent = `${timerValue < 10 ? '0' : ''}${timerValue} sec`;
    }, 1000);
}

btnStart.addEventListener("click", () =>{
    if (!timerInterval) {
        startTimer();
    }
});

btnStop.addEventListener("click", () => {
    stopTimer();
})

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resettime(){
    timerValue = 0;
    time_sec.textContent = "00 sec";
}

let btnReset = document.querySelector(".reset_time");
btnReset.addEventListener("click", resettime);
