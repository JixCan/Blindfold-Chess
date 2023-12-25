const { Chess } = require('chess.js')

let figure = '';
let vertical = '';
let horizontal = '';

const buttons = document.querySelectorAll('button');
const textarea = document.querySelector('textarea');
const messagesArray = [];

let currentMove = ''; // Хранилище текущего хода

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (['N', 'B', 'R', 'Q', 'K'].includes(value)) {
      figure = value;
    }
    else if (['P'].includes(value)) {
      figure = '';
    } else if (['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].includes(value)) {
      vertical = value;
    } else if (['1', '2', '3', '4', '5', '6', '7', '8'].includes(value)) {
      horizontal = value;
    }

    currentMove = `${figure}${vertical}${horizontal}`; // Обновление текущего хода
    updateTextarea();
  });
});

const submitButton = document.getElementById('submitMove');

submitButton.addEventListener('click', () => {
  if (currentMove.trim() !== '') {
    addMessage(currentMove);
    currentMove = '';
    updateTextarea();
    figure = vertical = horizontal = '';
  } else {
    textarea.value = 'Вы не ввели ход!';
  }
});

function addMessage(message) {
  messagesArray.push(message);
}

// После обновления textarea добавьте/удалите класс для анимации мигающего курсора
function updateTextarea() {
  const allMoves = messagesArray.join('\n');
  if (allMoves.length !== 0) {
    textarea.value = allMoves + (currentMove ? '\n' + currentMove : ''); // Отображение текущего хода
  } else {
    textarea.value = currentMove ? '\n' + currentMove : '';
  }
}

