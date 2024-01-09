function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value !== '') {
      const newTask = document.createElement('li');
      newTask.innerText = taskInput.value;
      taskList.appendChild(newTask);
      taskInput.value = '';
  
      newTask.onclick = function () {
        this.parentNode.removeChild(this);
      };
    } else {
      alert('Please enter a task!');
    }
  }
  