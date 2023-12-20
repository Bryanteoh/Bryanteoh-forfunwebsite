const todoList = [{
  name: 'Make dinner',
  dueDate: '2023-12-06'
},{
  name: 'Wash dishes',
  dueDate: '2023-12-06'
}];

renderTodoList();

function renderTodoList () {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject
      // shortcut, it's destructuring 

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>

      <button onclick="
          todoList.splice(${i},1);
          renderTodoList();
      "class="delete-todo-button">Delete</button>

    `;
    todoListHTML += html;
  }
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML 
}

function addTodo () {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
      // if the value and the property are the same USE SHORTCUT (shorthand property)
  });

  inputElement.value = '';

  renderTodoList();

}