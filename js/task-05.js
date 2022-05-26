const refs = {
  inputEl: document.querySelector("#name-input"),
  headingEl: document.querySelector("#name-output"),
}

const addInputListener = refs.inputEl.addEventListener('input', event => {
  const value = event.target.value.trim()
  refs.headingEl.textContent = value ? value : 'Anonymous';
})