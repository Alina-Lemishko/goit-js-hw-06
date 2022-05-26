// VARIABLES

const refs = {
  buttonDecrementEl: document.querySelector('button[data-action="decrement"]'),
  buttonIncrementEl: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

let counterValue = 0;

// LISTENERS

const addListenerDecBtn = refs.buttonDecrementEl.addEventListener('click', () => refs.valueEl.innerHTML = counterValue-=1);

const addListenerIncBtn = refs.buttonIncrementEl.addEventListener('click', () => refs.valueEl.innerHTML = counterValue+=1);

