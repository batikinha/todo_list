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
    document.addEventListener('DOMContentLoaded', function () {
        const kawaiiBackground = document.getElementById('kawaii-background');
      
        // Função para criar nuvens e estrelas
        function createKawaiiElements() {
          for (let i = 0; i < 5; i++) {
            createCloud();
            createStar();
          }
        }
      
        // Função para criar uma nuvem
        function createCloud() {
          const cloud = document.createElement('img');
          cloud.src = 'cloud.png'; // Substitua com o caminho para sua imagem de nuvem
          cloud.classList.add('cloud');
          cloud.style.top = `${Math.random() * 50}%`;
          cloud.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duração da animação variável
          kawaiiBackground.appendChild(cloud);
        }
      
        // Função para criar uma estrela
        function createStar() {
          const star = document.createElement('div');
          star.classList.add('star');
          star.style.top = `${Math.random() * 100}%`;
          star.style.left = `${Math.random() * 100}%`;
          star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duração da animação variável
          kawaiiBackground.appendChild(star);
        }
      
        // Criar elementos kawaii ao carregar a página
        createKawaiiElements();
    });      
  });
  