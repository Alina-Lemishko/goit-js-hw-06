// RANDOM COLOR GENERATION

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// VARIABLES

const refs = {
  buttonEl: document.querySelector('.change-color'),
  textEl: document.querySelector('.color'),
}

// lISTENER

refs.buttonEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  
  document.body.style.backgroundColor = color;
  refs.textEl.textContent = color;
});
