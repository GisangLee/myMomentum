const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector(".toDoInput");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const DISAPPEAR = "disappear";
const SHADOW = "shadow";

function saveToDos(text) {
  localStorage.setItem(TODOS_LS, text);
}

function delToDos(event) {
  const text = localStorage.getItem(TODOS_LS);
  const btn = event.target;
  const h1 = btn.parentNode;
  toDoList.remove(h1);
  saveToDos(text);
  localStorage.removeItem(TODOS_LS);
  toDoForm.classList.add(SHOW_CL);
}

function paintToDos(text) {
  //   const li = document.createElement("li");
  const delbtn = document.createElement("button");
  //   const span = document.createElement("span");
  //   const newId = 1;

  delbtn.innerHTML = "💥";
  delbtn.addEventListener("click", delToDos);
  toDoForm.classList.remove(SHOW_CL);
  //   span.innerText = text;
  toDoList.innerText = `${text}`;

  toDoList.appendChild(delbtn);
  //   li.appendChild(span);
  //   li.appendChild(delbtn);
  //   li.id = newId;
  //   li.classList.add("jstodo");
  //   toDoList.appendChild(li);
  saveToDos(text);
}

function handleSubmitToDos(event) {
  event.preventDefault();
  const toDoValue = toDoInput.value;
  paintToDos(toDoValue);
  toDoInput.value = "";
}

function askForToDos() {
  toDoForm.classList.add(SHOW_CL);
  toDoForm.addEventListener("submit", handleSubmitToDos);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  const user = localStorage.getItem(USER_LS);
  if (user !== null) {
    if (loadedToDos !== null) {
      paintToDos(loadedToDos);
    } else {
      askForToDos();
    }
  }
}

function init() {
  loadToDos();
}

init();
