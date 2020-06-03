const clock = document.querySelector(".js-time");
const time = clock.querySelector("h1");

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
}

init();
