const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const itemContainerEl = document.querySelector('#ingredients')

const ingredientMakeCard = element => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = element;
  return itemEl;
}

const elements = ingredients.map(ingredientMakeCard);
itemContainerEl.append(...elements);
console.log(itemContainerEl)