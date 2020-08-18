function todoInformation(title, subject) {
  this.title = title;
  this.subject = subject;
}

var listTodos = [];

var position = '';

function addTodos(todoList, listTodos) {
  listTodos.push(todoList);
  console.log('?>', listTodos);
}

function updateInputs(eventClick) {
  var titleInput = document.querySelector('.header-content #title-input');
  var subjectInput = document.querySelector('.header-content #subject-input');
  // var todoTitle = document.querySelector('#item-container1 strong').textContent;
  var indexPosition = eventClick.getAttribute('rel');
  titleInput.value = listTodos[indexPosition].title;
  subjectInput.value = listTodos[indexPosition].subject;

  console.log('index', indexPosition);

  position = eventClick.getAttribute('rel');
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

var room = -1;

function todoPrint() {
  var titleValue = document.querySelector('.header-content #title-input').value;
  var subjectValue = document.querySelector('.header-content #subject-input')
    .value;

  var todoList = new todoInformation(titleValue, subjectValue);

  addTodos(todoList, listTodos);

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
