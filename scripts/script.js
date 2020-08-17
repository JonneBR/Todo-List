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

function updateInputs(eventClick) {
  console.log('funcionou');
  position = eventClick.getAttribute('rel');
  teste = document.querySelector('#item-container1 strong').textContent;
  // document.get('cpf').value = listaClientes[posicao].cpf;
  console.log('funcionou', position.value);
  console.log('strong', teste);
}

function clearInputs() {
  var titleValue = (document.querySelector(
    '.header-content #title-input'
  ).value = '');

  var subjectValue = (document.querySelector(
    '.header-content #subject-input'
  ).value = '');
}

var buttonElement = document.querySelector('.header-content .btn-add');
console.log(buttonElement);

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
  // for(var room = 0; room < list)
  childDiv.innerHTML =
    '' +
    '<strong>' +
    titleValue +
    '</strong>' +
    '<p>' +
    subjectValue +
    '</p>' +
    '<button id="update-todo" rel="' +
    room +
    '" class="update-todo">UPDATE</button>' +
    '<button class="delete-todo" rel="' +
    '" class="delete-todo">DELETE</button>';
  parentDiv.appendChild(childDiv);

  clearInputs();
  // updateButtonOnClick();
}

document.onclick = function (event) {
  eventClick = event.target || event.SrcElement;

  switch (eventClick.id) {
    case 'btn-add':
      todoPrint();
      break;
    case 'update-todo':
      updateInputs(eventClick, room);
  }
  // buttonElement.onclick = todoPrint;
};
