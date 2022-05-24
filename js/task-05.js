const refs = {
  inputEl: document.querySelector("#name-input"),
  headingEl: document.querySelector("#name-output"),
}

const addInputListener = refs.inputEl.addEventListener('input', event => {
  refs.headingEl.textContent = event.currentTarget.value;
  if (refs.inputEl.value.length === 0) {
   refs.headingEl.textContent = 'Anonymous';
  }
})