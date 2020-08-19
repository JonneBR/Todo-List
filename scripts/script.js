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

function updateInputs(eventClick) {
  var titleInput = document.querySelector('.header-content #title-input');
  var subjectInput = document.querySelector('.header-content #subject-input');
  // var todoTitle = document.querySelector('#item-container1 strong').textContent;
  var indexPosition = eventClick.getAttribute('rel');
  titleInput.value = listTodos[indexPosition].title;
  subjectInput.value = listTodos[indexPosition].subject;

  console.log('index', indexPosition);

  position = eventClick.getAttribute('rel');
  console.log('PSOICAO', position);
}

function updateTodoNewValues() {
  var titleValue = document.querySelector('.header-content #title-input').value;
  var subjectValue = document.querySelector('.header-content #subject-input')
    .value;

  teste1 = listTodos[position].title = titleValue;
  console.log('1', (listTodos[position].title = titleValue));
  teste2 = listTodos[position].subject = subjectValue;
  console.log('2', (listTodos[position].subject = subjectValue));

  var parentDiv = document.getElementById('todo-item');
  var strongElement = document.querySelector('#item-container' + position);
  console.log('3', strongElement);

  for (var i = 0; i < listTodos.length; i++) {
    strongElement.innerHTML =
      '' +
      '<strong>' +
      listTodos[position].title +
      '</strong>' +
      '<p>' +
      listTodos[position].subject +
      '</p>' +
      '<button id="update-todo" rel="' +
      position +
      '" class="update-todo">UPDATE</button>' +
      '<button class="delete-todo" rel="' +
      '" class="delete-todo">DELETE</button>';
    // console.log('list:', listTodos[room].title);
    // console.log('check', checkPoint);
    clearInputs();
  }
  checkPoint = '';

  console.log('ORIGINAL', listTodos);
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
        '<button class="delete-todo" rel="' +
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
      updateInputs(eventClick, room);
      checkPoint = 1;
  }
  // buttonElement.onclick = todoPrint;
};
