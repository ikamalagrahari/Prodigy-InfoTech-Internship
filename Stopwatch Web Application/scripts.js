let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(updateStopwatch, 1000);
        isRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    clearLaps();
}

function lapTime() {
    const lapsContainer = document.querySelector('.laps');
    const lapTimeItem = document.createElement('li');
    lapTimeItem.innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    lapsContainer.appendChild(lapTimeItem);
}

function updateStopwatch() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector('.display');
    display.innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function clearLaps() {
    const lapsContainer = document.querySelector('.laps');
    lapsContainer.innerHTML = '';
}
