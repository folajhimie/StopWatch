// let milliseconds = 0;
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// // define vars to hold "display" value
// let displayMilliseconds;
// let displaySeconds;
// let displayMinutes;
// let displayHours;

// status = "stopped";
// interval = null
// let cash = document.querySelector(".cash");

// // define to var to hold

// // stopwatch function
// function stopWatchCount() {
//   // logic to increment next value
//   milliseconds++;

//   if (milliseconds / 100 === 1) {
//     milliseconds = 0;
//     seconds++;

//     if (seconds / 60 === 1) {
//       seconds = 0;
//       minutes++;

//       if (minutes / 60 === 1) {
//         minutes = 0;
//         hours++;
//       }
//     }
//   } 
//   stopWatch();
// }
// function stopWatch() {
//   // if milliseconds/seconds/ minutes/hours are only one digit, add a leading 0 to the value
//   if (milliseconds < 10) {
//     displayMilliseconds = "0" + milliseconds.toString();
//   } else {
//     displayMilliseconds = milliseconds;
//   }

//   if (seconds < 10) {
//     displaySeconds = "0" + seconds.toString();
//   } else {
//     displaySeconds = seconds;
//   }

//   if (minutes < 10) {
//     displayMinutes = "0" + minutes.toString();
//   } else {
//     displayMinutes = minutes;
//   }

//   if (hours < 10) {
//     displayHours = "0" + hours.toString();
//   } else {
//     displayHours = hours;
//   }

//   // display updated time values to user`
//   cash.textContent =
//     displayHours +
//     ": " +
//     displayMinutes +
//     ": " +
//     displaySeconds +
//     ": " +
//     displayMilliseconds;
// }

// function startStop() {
//   if (status === "stopped") {
//     // start the stopwatch (by calling the setInterval() function)
//     interval = setInterval(stopWatchCount, 10);
//     status = "started"
//     stopWatch();
//   } else {
//     windows.clearInterval(stopWatchCount, 10);
//     // stopWatch();
//     status = "stopped";
//   }
// };

// // function stop() {
// //   if (status === "started") {
// //     windows.clearInterval(interval)
// //     stopWatch();
// //     status = "stopped";
// //   }
// // }

// //function to undo the stopwatch

// function undo() {
//   window.clearInterval(interval);
//   milliseconds = 0;
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
//   document.getElementById("display").innerHTML = "00: 00: 00: 00";
//   document.getElementById("startStop").innerHTML = "start";
// }
const startPause = document.querySelector('#startPause')
const stopped = document.querySelector('#stopped')
const undo = document.querySelector('#undo')

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let millisecondsValue = 0;
let secondsValue = 0;
let minutesValue = 0;
let hoursValue = 0;

let interval = 0
let started = "no"

// function that starts the stopwatch 
function stopWatch(){

  milliseconds ++

  if (milliseconds / 100 === 1){
    milliseconds = 0;
    seconds ++
  }
  if (seconds / 60 === 1){
    seconds = 0;
    minutes ++
  }
  if (minutes / 60 === 1){
    minutes = 0;
    hours ++
  }

  if (milliseconds < 10) {
    millisecondsValue = "0" + milliseconds.toString();
  } else {
    millisecondsValue = milliseconds;
  }
  if (seconds < 10) {
    secondsValue = "0" + seconds.toString();
  } else {
    secondsValue = seconds;
  }
  if (minutes < 10) {
    minutesValue = "0" + minutes.toString();
  } else {
    minutesValue = minutes;
  }
  if (hours < 10) {
    hoursValue = "0" + hours.toString();
  } else {
    hoursValue = hours;
  }


  document.querySelector('.cash').innerHTML = hoursValue + ":" + minutesValue + ":" + secondsValue + ":" + millisecondsValue;
}




startPause.addEventListener('click', (e) => {
  if(started === 'no') {
    interval = window.setInterval(stopWatch, 10)
    started = 'yes'
  } else {
    return
  }
  
});

stopped.addEventListener('click', (e) => {
  window.clearInterval(interval)
  started = 'no'
});

undo.addEventListener('click', e => {
  window.clearInterval(interval)
  millisecondsValue = 0;
  secondsValue = 0;
  minutesValue = 0;
  hoursValue = 0;
  document.querySelector('.cash').innerHTML = '<div>00:00:00:00</div>'
})



