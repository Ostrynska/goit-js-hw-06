const inputForm = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');


let amount = 0;

inputForm.addEventListener('input', event => amount = event.currentTarget.value);
btnCreate.addEventListener('click', () => createBoxes(amount));
btnDestroy.addEventListener('click', () =>
{
  boxesContainer.innerHTML = '';
  inputForm.value = "";
});


function createBoxes(amount)
{
  for (let i = 0, boxsize = 30; i < amount; i += 1, boxsize +=10) {
      const newBox = document.createElement('div');
      newBox.classList.add('boxes-item');

      newBox.style.width = `${boxsize}` + 'px';
      newBox.style.height = `${boxsize}` + 'px';
      newBox.style.marginBottom = 7 + 'px';

      newBox.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(newBox);
  }
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

