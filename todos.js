const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector(".toDoInput");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const DISAPPEAR = "disappear";

let toDos = [];

function saveToDos(text) {
  localStorage.setItem(TODOS_LS, JSON.stringify(text));
}

function delToDos(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  toDoForm.classList.add(SHOW_CL);
  saveToDos(toDos);
}

function paintToDos(text) {
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delbtn.innerHTML = "💥";
  delbtn.addEventListener("click", delToDos);
  toDoForm.classList.remove(SHOW_CL);
  span.innerText = text;

  li.appendChild(span);
  li.appendChild(delbtn);
  li.id = newId;
  li.classList.add("jstodo");
  toDoList.appendChild(li);

  const toDoObj = {
    id: newId,
    text: text,
  };
  toDos.push(toDoObj);
  saveToDos(toDos);
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
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function (toDo) {
        paintToDos(toDo.text);
      });
    } else {
      askForToDos();
    }
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmitToDos);
}

init();
