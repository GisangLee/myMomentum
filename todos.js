const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector(".toDoInput");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(toDos) {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delbtn.innerHTML = "❌";
  span.innerText = text;
  li.appendChild(delbtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos(toDos);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const currentuser = localStorage.getItem(USER_LS);
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (currentuser !== null) {
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function (todo) {
        paintToDo(todo.text);
      });
    } else {
    }
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
