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

todoList.forEach((todoObject,index) => {
  const { name, dueDate } = todoObject;
    // shortcut, it's destructuring 
  const html = `
    <div>${name}</div>
    <div>${dueDate}</div>

    <button class="delete-todo-button js-delete-button">Delete</button>

  `;
    todoListHTML += html;
});
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML 

  document.querySelectorAll('.js-delete-button').forEach((deleteButton,index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
  });
}



document.querySelector('.js-add-button').addEventListener('click', () => {
  addTodo();
});



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