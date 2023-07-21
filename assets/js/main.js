// 

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const hours = document.querySelector(".hours");
const minit = document.querySelector(".minit");
const second = document.querySelector(".second");
const miliSecond = document.querySelector(".mili-Second");
const myTitle = document.querySelector(".my-title")
const audioPlayer = document.getElementById("audioPlayer");

// timer funtion
let [mili, seconds, minits, hour] = [0, 0, 0, 0];
function stopWatch() {
  mili++;
  if (mili == 100) {
    mili = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minits++;
      if (minits == 60) {
        minits = 0;
        hour++;
        if (hour == 24) {
          hour = 0;
        }
      }
    } 
    }
    let m = mili < 10 ? "0" + mili : mili;
   let s = seconds < 10 ? "0" + seconds : seconds;
   let mi = minits < 10 ? "0" + minits : minits;
   let h = hour < 10 ? "0" + hour : hour;

    miliSecond.innerHTML = m;
    second.innerHTML = s;
    minit.innerHTML = mi;
    hours.innerHTML = h;
  };

  let timer = null;

  // Start button
   start.onclick = () => {
    if (timer != null) {
      clearInterval(timer);
    }
    timer = setInterval(stopWatch, 10);
    // audio play
    audioPlayer.play();
    myTitle.classList.remove("d-none")
    };

 // Stop button
    stop.onclick = () => {
        clearInterval(timer);
         // audio play
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
      };

  // Reset button
      reset.onclick = () => {
        clearInterval(timer);
        [mili, seconds, minits, hour] = [0, 0, 0, 0];
        miliSecond.innerHTML = "00";
        second.innerHTML = "00";
        minit.innerHTML = "00";
        hours.innerHTML = "00";
         // audio play
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        };
        


  // Chat GPT............

// let timerInterval;
// let militimeStart = 0;
// let secondtimeStart = 0;

// function updateTimer() {
//   // Calculate hours, minutes, seconds, and milliseconds
//   const hoursValue = Math.floor(secondtimeStart / 3600);
//   const minutesValue = Math.floor((secondtimeStart % 3600) / 60);
//   const secondsValue = secondtimeStart % 60;

//   // Display the timer in the DOM
//   hours.innerHTML = hoursValue.toString().padStart(2, "0");
//   minit.innerHTML = minutesValue.toString().padStart(2, "0");
//   second.innerHTML = secondsValue.toString().padStart(2, "0");
//   miliSecond.innerHTML = militimeStart.toString().padStart(2, "0");
// }

// function startTimer() {
//   clearInterval(timerInterval);
//   timerInterval = setInterval(() => {
//     militimeStart++;
//     if (militimeStart === 100) {
//       militimeStart = 0;
//       secondtimeStart++;
//     }
//     updateTimer();
//   }, 10); // 10 milliseconds interval (for more accuracy)
// }

// function stopTimer() {
//   clearInterval(timerInterval);
// }

// function resetTimer() {
//   clearInterval(timerInterval);
//   militimeStart = 0;
//   secondtimeStart = 0;
//   updateTimer();
// }
// start.onclick = () => {
//   startTimer();
//  audioPlayer.play();
//  myTitle.classList.remove("d-none")
// };

// stop.onclick = () => {
//   stopTimer();
//   audioPlayer.pause();
//   audioPlayer.currentTime = 0;
// };

// reset.onclick = () => {
//   resetTimer();
//   audioPlayer.pause();
//   audioPlayer.currentTime = 0;
// };