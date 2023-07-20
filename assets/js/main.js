// 

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const hours = document.querySelector(".hours");
const minit = document.querySelector(".minit");
const second = document.querySelector(".second");
const miliSecond = document.querySelector(".mili-Second");

let timerInterval;
let militimeStart = 0;
let secondtimeStart = 0;

function updateTimer() {
  // Calculate hours, minutes, seconds, and milliseconds
  const hoursValue = Math.floor(secondtimeStart / 3600);
  const minutesValue = Math.floor((secondtimeStart % 3600) / 60);
  const secondsValue = secondtimeStart % 60;

  // Display the timer in the DOM
  hours.innerHTML = hoursValue.toString().padStart(2, "0");
  minit.innerHTML = minutesValue.toString().padStart(2, "0");
  second.innerHTML = secondsValue.toString().padStart(2, "0");
  miliSecond.innerHTML = militimeStart.toString().padStart(2, "0");
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    militimeStart++;
    if (militimeStart === 100) {
      militimeStart = 0;
      secondtimeStart++;
    }
    updateTimer();
  }, 10); // 10 milliseconds interval (for more accuracy)
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  militimeStart = 0;
  secondtimeStart = 0;
  updateTimer();
}
const audioPlayer = document.getElementById("audioPlayer");
start.onclick = () => {
  startTimer();
 audioPlayer.play();
 myTitle.classList.remove("d-none")
};

stop.onclick = () => {
  stopTimer();
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
};

reset.onclick = () => {
  resetTimer();
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
};

const myTitle = document.querySelector(".my-title")