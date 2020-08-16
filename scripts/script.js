function todoInformation(title, subject) {
  this.title = title;
  this.subject = subject;
}

var listTodos = [];

var position = '';

function addTodos(todos, listTodos) {
  listTodos.push(todos);
  console.log('?', listTodos);
}

var buttonElement = document.querySelector('.header-content .btn-add');

var room = 0;
function todoPrint() {
  var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
  console.log('todos', todos);
  var titleValue = document.querySelector('.header-content #title-input').value;
  var subjectValue = document.querySelector('.header-content #subject-input')
    .value;

  room++;

  var parentDiv = document.getElementById('todo-item');
  var childDiv = document.createElement('div');

  console.log('working?');

  childDiv.setAttribute('id', 'item-container' + room);
  childDiv.setAttribute('class', 'item-container');
  childDiv.innerHTML =
    '' +
    '<strong>' +
    titleValue +
    '</strong>' +
    '<p>' +
    subjectValue +
    '</p>' +
    '<button class="update-todo" rel="' +
    '" class="update-todo">UPDATE</button>' +
    '<button class="delete-todo" rel="' +
    '" class="delete-todo">DELETE</button>';
  parentDiv.appendChild(childDiv);
}

buttonElement.onclick = todoPrint;
