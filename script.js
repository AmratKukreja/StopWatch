let minute = 0;
let second = 0;
let tenth = 0;
let timeInterval;
let isRun = false;
let lapCounter = 1;

function startTimer() {
    document.getElementById("play-btn").style.display = "none";
    document.getElementById("pause").innerText = "Pause";
    document.getElementById("btns").style.display = "flex";
    timeInterval = setInterval(incrementTimer, 100);
}

function stopTimer() {
    if (isRun) {
        isRun = false;
        startTimer();
    } else {
        isRun = true;
        clearInterval(timeInterval);
        document.getElementById("pause").innerText = "Resume";
    }
}

function resetTimer() {
    clearInterval(timeInterval);
    minute = 0;
    second = 0;
    tenth = 0;
    isRun = false;
    lapCounter = 1;
    document.getElementById("play-btn").style.display = "flex";
    document.getElementById("btns").style.display = "none";
    document.getElementById("pause").innerText = "Pause";
    document.getElementById("display-timer").innerText = "00 : 00 : 00";
    document.getElementById("lap-list").innerHTML = "";
}

function recordLap() {
    const lapTime = `${padZero(minute)} : ${padZero(second)} : ${padZero(tenth)}`;
    const lapItem = document.createElement("li");
    lapItem.innerHTML = `<p><span>${lapCounter}. </span><span> ${lapTime}</span></p>`;
    document.getElementById("lap-list").appendChild(lapItem);
    lapCounter++;
}

function incrementTimer() {
    tenth++;
    if (tenth === 10) {
        tenth = 0;
        second++;
        changeBackgroundColor()
    }
    if (second === 60) {
        second = 0;
        minute++;
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const formattedTime = `${padZero(minute)} : ${padZero(second)} : ${padZero(tenth)}`;
    document.getElementById("display-timer").innerText = formattedTime;
}

function padZero(value) {
    return value < 10 ? "0" + value : value;
}
function changeBackgroundColor() {
    const randomColor = generateRandomColor();
    document.getElementById("timer").style.borderColor = randomColor;
}

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}