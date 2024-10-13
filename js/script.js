const todoForm = document.querySelector('form');
const todoInput = document.querySelector('#todo-input');
const todoListUL = document.querySelector('#todo-list');

let allTodos = getTodos();
updateTodoList();
