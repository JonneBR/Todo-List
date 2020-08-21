function todoInformation(title, subject) {
  this.title = title;
  this.subject = subject;
}

var listTodos = [];

var checkPoint = '';

function addTodos(todoList, listTodos) {
  listTodos.push(todoList);
  console.log('?>', listTodos);
}

function deleteTodo(deleteElementPosition) {
  var div = document.querySelector('#item-container' + deleteElementPosition);
  div.parentNode.removeChild(div);
  console.log('DELETADO', div);
}

function updateInputs(eventClick) {
  var titleInput = document.querySelector('.header-content #title-input');
  var subjectInput = document.querySelector('.header-content #subject-input');
  buttonUpdateIndex = eventClick.getAttribute('rel');
  titleInput.value = listTodos[buttonUpdateIndex].title;
  subjectInput.value = listTodos[buttonUpdateIndex].subject;

  console.log('index', buttonUpdateIndex);

  // position = eventClick.getAttribute('rel');
  // console.log('PSOICAO', position);
}

function updateTodoNewValues() {
  var titleValue = document.querySelector('.header-content #title-input').value;
  var subjectValue = document.querySelector('.header-content #subject-input')
    .value;

  listTodos[buttonUpdateIndex].title = titleValue;
  listTodos[buttonUpdateIndex].subject = subjectValue;

  var parentDiv = document.getElementById('todo-item');
  var div = document.querySelector('#item-container' + buttonUpdateIndex);
  console.log('3', div);
  console.log('LENGTH', listTodos.length);

  // for (var i = 0; i < listTodos.length; i++) {
  div.innerHTML =
    '' +
    '<strong>' +
    listTodos[buttonUpdateIndex].title +
    '</strong>' +
    '<p>' +
    listTodos[buttonUpdateIndex].subject +
    '</p>' +
    '<button id="update-todo" rel="' +
    buttonUpdateIndex +
    '" class="update-todo">UPDATE</button>' +
    '<button id="delete-todo" rel="' +
    buttonUpdateIndex +
    '" class="delete-todo">DELETE</button>';
  // console.log('list:', listTodos[room].title);
  // console.log('check', checkPoint);
  clearInputs();
  // }
  checkPoint = '';
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
  if (checkPoint === 1) {
    updateTodoNewValues();
  } else {
    var titleValue = document.querySelector('.header-content #title-input')
      .value;
    var subjectValue = document.querySelector('.header-content #subject-input')
      .value;

    var todoList = new todoInformation(titleValue, subjectValue);

    addTodos(todoList, listTodos);

    room++;

    var parentDiv = document.getElementById('todo-item');
    console.log('Parent Element:', parentDiv);
    var childDiv = document.createElement('div');

    childDiv.setAttribute('id', 'item-container' + room);
    childDiv.setAttribute('class', 'item-container');

    for (var i = 0; i < listTodos.length; i++) {
      childDiv.innerHTML =
        '' +
        '<strong>' +
        listTodos[i].title +
        '</strong>' +
        '<p>' +
        listTodos[i].subject +
        '</p>' +
        '<button id="update-todo" rel="' +
        room +
        '" class="update-todo">UPDATE</button>' +
        '<button id="delete-todo" rel="' +
        room +
        '" class="delete-todo">DELETE</button>';

      parentDiv.appendChild(childDiv);
      // console.log('list:', listTodos[room].title);
      // console.log('check', checkPoint);
      clearInputs();
    }
  }
}

document.onclick = function (event) {
  eventClick = event.target || event.SrcElement;

  switch (eventClick.id) {
    case 'btn-add':
      todoPrint();
      break;
    case 'update-todo':
      updateInputs(eventClick);
      checkPoint = 1;
      break;
    case 'delete-todo':
      deleteElementPosition = eventClick.getAttribute('rel');
      console.log('DELETEELEMENT', deleteElementPosition);
      deleteTodo(deleteElementPosition);
  }
  // buttonElement.onclick = todoPrint;
};
