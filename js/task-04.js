const refs = {
  buttonDecrementEl: document.querySelector('button[data-action="decrement"]'),
  buttonIncrementEl: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

let counterValue = 0;

const addListenerDecBtn = refs.buttonDecrementEl.addEventListener('click', event => {
  return updateDisplayDecrement();
});

const addListenerIncBtn = refs.buttonIncrementEl.addEventListener('click', event => {
  return updateDisplayIncrement();
});

function updateDisplayIncrement(value) {
    refs.valueEl.innerHTML = counterValue+=1;
}

function updateDisplayDecrement(value) {
    refs.valueEl.innerHTML = counterValue-=1;
}

