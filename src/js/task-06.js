const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', onInputBlur);

function onInputBlur()
{ 
    if (dataLength < input.value.length || dataLength > input.value.length) {
        input.classList.remove("valid");
        input.classList.add("invalid");
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
};