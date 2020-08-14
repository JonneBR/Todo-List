var inputTitleElement = document.querySelector('.header-content #title-input');
// console.log(inputTitleElement.value);
var inputSubjectElement = document.querySelector(
  '.header-content #subject-input'
);
// console.log(inputSubjectElement.value);

var buttonElement = document.querySelector('.header-content .btn-add');

// console.log(buttonElement);

function todoPrint() {
  console.log(inputTitleElement.value);
  console.log(inputSubjectElement.value);
}

buttonElement.onclick = todoPrint;
