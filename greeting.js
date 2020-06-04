const form = document.querySelector(".js-form");
const nameinput = form.querySelector(".nameinput");
const greeting = document.querySelector(".js-greeting");
const box = document.querySelector("box");

const USER_LS = "currentuser";
const SHOW_CL = "showing";

function paintUser(currentuser) {
  form.classList.remove(SHOW_CL);
  greeting.classList.add(SHOW_CL);
  greeting.innerText = `Welcome, ${currentuser}`;
}

function saveUser(currentuser) {
  localStorage.setItem(USER_LS, currentuser);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentUser = nameinput.value;
  saveUser(currentUser);
  paintUser(currentUser);
}

function askForName() {
  form.classList.add(SHOW_CL);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintUser(currentUser);
  }
}

function init() {
  loadName();
}

init();
