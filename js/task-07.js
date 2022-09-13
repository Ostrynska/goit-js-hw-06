const refs = {
  range: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.range.value = 16;
refs.range.addEventListener('change', onInputChange);

function onInputChange(event) {
  refs.text.style.fontSize = refs.range.value + 'px';
}
