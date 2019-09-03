const clockContainer = document.querySelector(".clock"),
  clock = clockContainer.querySelector(".js-clock");

function runClock() {
  const getTime = new Date(),
    Hours = getTime.getHours(),
    Minutes = getTime.getMinutes(),
    Seconds = getTime.getSeconds();
  clock.innerHTML = `${Hours}:${Minutes}:${Seconds}`;
}

function init() {
  runClock();
  setInterval(runClock, 1000);
}

init();
