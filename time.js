const clock = document.querySelector(".js-clock");
const time = clock.querySelector(".js-time");

function loadTime() {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  time.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
    min < 10 ? `0${min}` : min
  }`;
}

function init() {
  loadTime();
  setInterval(loadTime, 1000);
}

init();
