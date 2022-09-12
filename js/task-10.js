const inputForm = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

let amount = 0;

inputForm.addEventListener('input', event => amount = event.currentTarget.value);
btnCreate.addEventListener('click', () => createBoxes(amount));
btnDestroy.addEventListener('click', () => boxesContainer.innerHTML = '');


let boxSize = 30;

function createBoxes(amount)
{

  const box = amount.map(item =>
  {
      const newBox = document.createElement('div');
      newBox.classList.add('boxes-item');
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.width = `${size}`;
      newBox.style.height = `${size}`;
      boxesContainer.appendChild(newBox);

      return newBox;
    });
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

