let taskList = document.getElementById('taskList');
let taskInput = document.getElementById('taskInput');

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText !== '') {
    let listItem = document.createElement('li');
    listItem.innerHTML = `<span>${taskText}</span> <button onclick="markAsDone(this)">Done</button> <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
}

function markAsDone(element) {
  element.parentNode.firstChild.classList.toggle('done');
}

function deleteTask(element) {
  element.parentNode.remove();
}
