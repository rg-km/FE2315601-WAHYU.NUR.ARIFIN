/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

const stopwatch = document.getElementById('stopwatch');
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');

let interval = null;
let seconds = 0;
// TODO: answer here

startbtn.addEventListener('click', start);
stopbtn.addEventListener('click', stop);
resetbtn.addEventListener('click', reset);


function start() {
  // TODO: answer here

  if (interval) return;
  
  interval = setInterval(runTime, 1000);
}

function stop() {
  // TODO: answer here
  clearInterval(interval);
  interval = null;
}

function reset() {
  // TODO: answer here
  stop();
  seconds = 0;
  stopwatch.innerHTML = '00:00:00';
}

function runTime() {
  // TODO: answer here
  seconds++;
  
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - (hrs * 3600)) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  stopwatch.innerHTML = `${hrs}:${mins}:${secs}`;
}