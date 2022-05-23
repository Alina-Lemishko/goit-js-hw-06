const categoryEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryEl.length}`);


categoryEl.forEach(el => {
  console.log(`Category: ${el.querySelector('h2').textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`)
});