let itemInput = document.getElementById("itemInput");
let addBtn = document.getElementById("addBtn");
let cancel = document.getElementById("cancel");
let show = document.getElementById("show");

let data = JSON.parse(localStorage.getItem("taskList")) || [];


function saveTasks() {
  localStorage.setItem("taskList", JSON.stringify(data));
}


function addItemFromInput() {
  let inputVal = itemInput.value.trim();

  if (inputVal) {
    data.push(inputVal);
    saveTasks();
    renderTasks();
    itemInput.value = "";
  }
}


function renderTasks() {
  show.innerHTML = "";

  data.forEach((eachItem, index) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = eachItem;
    span.id = `task-${index}`;

    let divBtns = document.createElement("div");

    let updateBtn = document.createElement("button");
    updateBtn.id = "upbtn";
    updateBtn.innerText = "Update";
    updateBtn.onclick = () => updateItem(index);

    let removeBtn = document.createElement("button");
    removeBtn.id = "delbtn";
    removeBtn.innerText = "Delete";
    removeBtn.onclick = () => removeItem(index);

    divBtns.appendChild(updateBtn);
    divBtns.appendChild(removeBtn);

    li.appendChild(span);
    li.appendChild(divBtns);

    show.appendChild(li);
  });
}

function updateItem(index) {
  let updatedTask = prompt("Update your task:", data[index]);
  if (updatedTask !== null && updatedTask.trim() !== "") {
    data[index] = updatedTask.trim();
    saveTasks();
    renderTasks();
  }
}


function removeItem(index) {
  data.splice(index, 1);
  saveTasks();
  renderTasks();
}


addBtn.addEventListener("click", addItemFromInput);
cancel.addEventListener("click", () => {
  itemInput.value = "";
});

renderTasks();
