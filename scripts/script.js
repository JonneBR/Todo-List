function todoInformation(title, subject) {
  this.title = title;
  this.subject = subject;
}

var listTodos = [];

var position = '';

function addTodos(todos, listTodos) {
  listTodos.push(todos);
  //   console.log('?', teste);
}

function showTodos(list, divId) {
  var auxHtml = '<strong>' + '<p>';

  for (var i = 0; i < list.length; i++) {
    auxHtml +=
      '<strong>' + '<p>' + list[i].title + '<strong>' + '<p>' + list[i].subject;
    '<strong>' + '<p>';
  }
  values = document.getElementsByClassName(divId).innerHTML = auxHtml;
  console.log('values: ', values);
}

// console.log(inputSubjectElement.value);

var buttonElement = document.querySelector('.header-content .btn-add');

// console.log(buttonElement);

function todoPrint() {
  var titleValue = document.querySelector('.header-content #title-input').value;
  // console.log(inputTitleElement.value);
  var subjectValue = document.querySelector('.header-content #subject-input')
    .value;
  //   console.log(inputTitleElement.value);
  //   console.log(inputSubjectElement.value);
  var todos = new todoInformation(titleValue, subjectValue);

  console.log('teste: ', todos);
  addTodos(todos, listTodos);

  showTodos(listTodos, 'item-container');
}

buttonElement.onclick = todoPrint;
