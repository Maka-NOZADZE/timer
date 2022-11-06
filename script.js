const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEL = document.getElementById("secs");

const newYears = "1 Jan 2023";

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minuts = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);
  console.log(days, hours, minuts, seconds);

  daysEL.innerHTML = formatTime(days);
  hoursEL.innerHTML = formatTime(hours);
  minsEL.innerHTML = formatTime(minuts);
  secondsEL.innerHTML = formatTime(seconds);
}
//i want to show 0 in front

function formatTime(time) {
  // return time less then 10 with 0 if no just time
  return time < 10 ? `0${time}` : time;
}

//initial call

countDown();
setInterval(countDown, 1000);
