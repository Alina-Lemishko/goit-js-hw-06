function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  buttonCreateEl: document.querySelector('[data-create]'),
  buttonDestroyEl: document.querySelector('[data-destroy]'),
  inputEl: document.querySelector('.input'),
  boxesEl: document.querySelector('#boxes')
}

let quantityOfElements = 0;

refs.inputEl.addEventListener('input', event => {
  quantityOfElements = event.target.value;
});

refs.buttonCreateEl.addEventListener('click', () => createBoxes(quantityOfElements));

refs.buttonDestroyEl.addEventListener('click', () => destroyBoxes());

function createBoxes(amount) {
  let markupAsString = '';
  for (let i = 1; i <= amount; i++) {
    markupAsString += `<div style='width: ${10 * i + 20}px; height: ${10 * i + 20}px; background-color: ${getRandomHexColor()}'></div>`
  }
  refs.boxesEl.insertAdjacentHTML("beforeend", markupAsString);
}
  
function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
  refs.inputEl.value = '';
}
  

