const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.querySelector('#ingredients');

const elements = ingredients
  .map(ingredient => `<li class="item">${ingredient}</li>`)
  .join('');

// ------ OR --------
// const elements = ingredients.map(ingredient => {
//   const listEl = document.createElement('li');
//   listEl.textContent = ingredient;
//   listEl.classList.add('item');

//   return listEl;
// });
// navEl.append(...elements);

navEl.insertAdjacentHTML('beforeend', elements);
console.log(navEl);
