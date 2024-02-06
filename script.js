let minute = 0;
let second = 0;
let tenth = 0;
let timeInterval;
let isRun = false;
function startTimer(){
    document.getElementById("play-btn").style.display="none";
    document.getElementById("btns").style.display="flex";
    timeInterval = setInterval(incrementTimer,100)
    console.log("Amrat")
}
function stopTimer(){
    if(isRun){
        isRun = false;
        startTimer();
        document.getElementById("pause").innerText  = "Pause"
    }
    else{
    document.getElementById("pause").innerText  = "Resume"
    isRun = true;
    clearInterval(timeInterval)
}
}
function incrementTimer(){
    tenth++;
    if(tenth === 10){
        tenth=0;
        second++;
    }
    if(second === 60){
        second=0;
        minute++;
    }
    updateTimerDisplay();
}
function updateTimerDisplay(){
    let formatedTime = `${padZero(minute)} : ${padZero(second)} : ${padZero(tenth)}`;
    document.getElementById('display-timer').innerText = formatedTime;
}
function padZero(value) {
    return value < 10 ? '0' + value : value;
}