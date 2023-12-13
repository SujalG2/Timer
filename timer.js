const input = document.getElementById('input');
const display = document.getElementById('display');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const pause = document.getElementById('pause');

let timer = null;
let totalTime = 0;
let remainingTime = 0;

input.addEventListener('input', (e) => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    totalTime = remainingTime = e.target.value * 60;
    updateDisplay();
});

start.addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            remainingTime--;
            updateDisplay();
            if (remainingTime <= 0) {
                clearInterval(timer);
                timer = null;
            }
        }, 1000);
    }
});

reset.addEventListener('click', () => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    totalTime = remainingTime = input.value * 60;
    updateDisplay();
});

pause.addEventListener('click', () => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
});

function updateDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}