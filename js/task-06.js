const inputEl = document.querySelector("#validation-input");
const inputValue = inputEl.getAttribute('data-length')


const addInputEventListener = inputEl.addEventListener('blur', event => {
  if (event.currentTarget.value.length === Number(inputValue)) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else if (event.currentTarget.value.length !== Number(inputValue)) {
    inputEl.classList.add('invalid');
  }
})


