const formAddTodo = document.querySelector(".form-add-todo");
const todosContainer = document.querySelector(".todos-container");
const formSearch = document.querySelector(".form-search");

const addTodo = (inputValue) => {
  if (inputValue.length) {
    todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
          <span>${inputValue}</span>
          <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
        </li>`;

    event.target.reset();
  }
};

formAddTodo.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = event.target.add.value.trim();
  addTodo(inputValue);
});

const removeTodo = (clickedElement) => {
  const trashDataValue = clickedElement.dataset.trash;
  const dataTodo = document.querySelector(`[data-todo="${trashDataValue}"]`);

  if (trashDataValue) {
    dataTodo.remove();
  }
};

todosContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;
  removeTodo(clickedElement);
});

const filterTodos = (arrayTodos, inputValue, returnMetchedTodos) =>
  arrayTodos.filter((todo) => {
    const metchedTodos = todo.textContent.toLowerCase().includes(inputValue);
    return returnMetchedTodos ? metchedTodos : !metchedTodos;
  });

const manipulateClasses = (arrayTodos, classToAdd, classToRemove) => {
  arrayTodos.forEach((todo) => {
    todo.classList.remove(classToRemove);
    todo.classList.add(classToAdd);
  });
};

const hideTodos = (arrayTodos, inputValue) => {
  const todosToHide = filterTodos(arrayTodos, inputValue, false)
  manipulateClasses(todosToHide, 'hidden', 'd-flex')
};

const showTodos = (arrayTodos, inputValue) => {
  const todosToShow = filterTodos(arrayTodos, inputValue, true)
  manipulateClasses(todosToShow, 'd-flex', 'hidden')
};

formSearch.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim().toLowerCase();
  const arrayTodos = Array.from(todosContainer.children);

  hideTodos(arrayTodos, inputValue);
  showTodos(arrayTodos, inputValue);
});
