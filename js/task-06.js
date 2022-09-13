const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (Number(dataLength) === input.value.length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
