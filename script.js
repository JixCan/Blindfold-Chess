let piece = ''; // переменная для фигуры
let vertical = ''; // переменная для вертикали
let horizontal = ''; // переменная для горизонтали

const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonType = button.parentNode.className;

    // Обработка фигур
    if (buttonType === 'pieces') {
      // Проверяем, если фигура уже выбрана, сбрасываем
      if (piece === button.textContent) {
        piece = '';
      } else {
        piece = button.textContent;
      }
    }

    // Обработка вертикалей
    if (buttonType === 'verticals') {
      // Проверяем, если вертикаль уже выбрана, сбрасываем
      if (vertical === button.textContent) {
        vertical = '';
      } else {
        vertical = button.textContent;
      }
    }

    // Обработка горизонталей
    if (buttonType === 'horizontals') {
      // Проверяем, если горизонталь уже выбрана, сбрасываем
      if (horizontal === button.textContent) {
        horizontal = '';
      } else {
        horizontal = button.textContent;
      }
    }

    // Формирование записи и вывод на экран
    const move = piece + (piece !== '' && vertical !== '' ? vertical : '') + (horizontal !== '' ? horizontal : '');
    
    // Вывод на экран текстового окна
    const output = document.querySelector('.chat textarea');
    output.value = move;
  });

  
});


