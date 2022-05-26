const inputEl = document.querySelector("#validation-input");
const inputValue = inputEl.getAttribute('data-length')


const addInputEventListener = inputEl.addEventListener('blur', validate)

function validate(event) {
  const isCorrectLength = event.currentTarget.value.length === Number(inputValue);

  inputEl.classList.add('invalid');

  if (isCorrectLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } 
}

