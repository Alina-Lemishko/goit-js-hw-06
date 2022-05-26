// VARIABLES

const refs = {
  buttonDecrementEl: document.querySelector('button[data-action="decrement"]'),
  buttonIncrementEl: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

let counterValue = 0;

function decrement() {
  refs.valueEl.innerHTML = counterValue -= 1;
}

function increment() {
  refs.valueEl.innerHTML = counterValue += 1;
}

// LISTENERS

refs.buttonDecrementEl.addEventListener('click', decrement);

refs.buttonIncrementEl.addEventListener('click', increment);

