const startElement = document.getElementById("start");
const resetElement = document.getElementById("reset");

startElement.addEventListener("click", start);
resetElement.addEventListener("click", reset);

let timer;
const second = document.getElementById("seconds");
const minute = document.getElementById("minutes");
const hour = document.getElementById("hours");

function start() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        startElement.textContent = 'go on';
        startElement.style.backgroundColor = 'rgb(139, 182, 139)';
        } else {
            startElement.textContent = 'pause';
            startElement.style.backgroundColor = 'rgb(185, 185, 121)';
            timer = setInterval(() => {
            let sec = parseInt(second.textContent) + 1;
    if (sec >= 60) {
        sec = 0;
        let min = parseInt(minute.textContent) + 1;
            if (min >= 60) {
                min = 0;
                let hr = parseInt(hour.textContent) + 1;
                if (hr >= 24) {
                    hr = 0;
                }
                hour.textContent = hr < 10 ? "0" + hr : hr;
            }
            minute.textContent = min < 10 ? "0" + min : min;
        }
        second.textContent = sec < 10 ? "0" + sec : sec;
        }, 1000);
    };
};

function reset() {
    startElement.textContent = 'start';
    startElement.style.backgroundColor = 'rgb(139, 182, 139)';
    second.textContent = "00";
    minute.textContent = "00";
    hour.textContent = "00";
    clearInterval(timer);
    timer = null;
};
