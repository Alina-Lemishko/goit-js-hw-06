const inputEl = document.querySelector("#validation-input");
const inputValue = inputEl.getAttribute('data-length')


const addInputEventListener = inputEl.addEventListener('blur', validate)

function validate(event) {
  const isCorrectLength = event.currentTarget.value.trim().length === Number(inputValue);
  
  if (isCorrectLength) {
    updateClass(event.currentTarget, 'invalid', 'valid') 
    return;
  } 
  updateClass(event.currentTarget, 'valid', 'invalid');

  if (event.currentTarget.value.length === 0) {
    event.currentTarget.classList.remove('valid', 'invalid');
  }
}

function updateClass(elem, add, remove) {
  elem.classList.remove(add);
    elem.classList.add(remove);
}

