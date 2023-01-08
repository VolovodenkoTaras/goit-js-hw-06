const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  ingredients: document.querySelector('#ingredients'),
}

// const arr = []
// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement('li');
//   li.classList.add('item');
//   li.textContent = ingredients[i];
//   arr.push(li)
// }

const arr = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  return li;
})

refs.ingredients.append(...arr)