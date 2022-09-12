const refs = {
  color: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
};

refs.btn.addEventListener('click', getRandomHexColor);

function getRandomHexColor(event)
{
  const result = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
  refs.color.textContent = result;
  refs.body.style.backgroundColor = result;

  return result;
}
