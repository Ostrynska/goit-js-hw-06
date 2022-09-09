const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.querySelector('#ingredients');

// 'Potatoes'
const navItemEl1 = document.createElement('li');
navItemEl1.textContent = `${ingredients[0]}`;
navItemEl1.classList.add('item');

// 'Mushrooms'
const navItemEl2 = document.createElement('li');
navItemEl2.textContent = `${ingredients[1]}`;
navItemEl2.classList.add('item');

// 'Garlic'
const navItemEl3 = document.createElement('li');
navItemEl3.textContent = `${ingredients[2]}`;
navItemEl3.classList.add('item');

// 'Tomatos'
const navItemEl4 = document.createElement('li');
navItemEl4.textContent = `${ingredients[3]}`;
navItemEl4.classList.add('item');

// 'Herbs'
const navItemEl5 = document.createElement('li');
navItemEl5.textContent = `${ingredients[4]}`;
navItemEl5.classList.add('item');

// 'Condiments'
const navItemEl6 = document.createElement('li');
navItemEl6.textContent = `${ingredients[5]}`;
navItemEl6.classList.add('item');

navEl.append(navItemEl1, navItemEl2, navItemEl3, navItemEl4, navItemEl5, navItemEl6);


