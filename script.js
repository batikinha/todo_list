document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-button');
    const newTaskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');
  
    addButton.addEventListener('click', function () {
      const taskText = newTaskInput.value;
  
      if (taskText.trim() !== '') {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
          <input type="checkbox">
          <span>${taskText}</span>
          <button class="delete-button">X</button>
        `;
  
        todoList.appendChild(todoItem);
        newTaskInput.value = '';
      }
    });
  
    todoList.addEventListener('click', function (event) {
      if (event.target.classList.contains('delete-button')) {
        event.target.parentElement.remove();
      }
    });
  });
  