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

function showTodos(list, divId) {
  //   console.log('WHERE:', list[0].title);
  var teste = document.getElementById(divId);
  console.log('tt', teste);
  var auxHtml;

  for (var i = 0; i < list.length; i++) {
    console.log('title', list[i]);
    teste +=
      '<strong>' +
      list[i].title +
      '</strong>' +
      '<p>' +
      list[i].subject +
      '</p>';
    console.log('auxVALUE:', auxHtml);
  }
  document.getElementById(divId).innerHTML = teste;
  console.log('values: ', divId);
}

// console.log(inputSubjectElement.value);

var buttonElement = document.querySelector('.header-content .btn-add');

// console.log(buttonElement);

function todoPrint() {
  var titleValue = document.querySelector('.header-content #title-input').value;
  var subjectValue = document.querySelector('.header-content #subject-input')
    .value;

  //   var teste = document.getElementById('teste');

  //   console.log(inputTitleElement.value);
  //   console.log(inputSubjectElement.value);
  var todos = new todoInformation(titleValue, subjectValue);

  console.log('teste: ', todos);
  addTodos(todos, listTodos);
  showTodos(listTodos, 'item-container');
}

buttonElement.onclick = todoPrint;
