function collectData(event) {
  event.preventDefault();

  var name = document.querySelector('#name').value;
  var year = document.querySelector('#year').value;

  var age = 2021 - year;

  var welcome = document.querySelector('#welcome');

  var message = '<p>Olá, ' + name + '. Você tem ' + age + ' anos.</p>';

  if (name.length === 0) {
    if (name.length === 0) {
      alert('Informe o seu nome, por gentileza.');
    }
    return;
  }

  if (year.length === 0) {
    if (year.length === 0) {
      alert('Informe o ano de nascimento, por gentileza.');
    }
    return;
  }

  welcome.innerHTML = message;
}

function clearData() {
  var name = document.querySelector('#name').value;
  var year = document.querySelector('#year').value;

  var clearButton = document.querySelector('#clear-button');

  if (name.length >= 0 || year >= 0) {
    if (clearButton.textContent === '') {
      clearButton.textContent = 'limpar';
    }
  }

  console.log('clearData funcionou!');
}

var myForm = document.querySelector('#form');
var nameInput = document.querySelector('#name');
var yearInput = document.querySelector('#year');

myForm.addEventListener('submit', collectData);
nameInput.addEventListener('keypress', clearData);
yearInput.addEventListener('keypress', clearData);
