const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('ul')
const res = ingredients.map(ing => {
const el = document.createElement('li')
el.classList.add('item')

el.textContent = ing
return el
})

list.append(...res)
// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().

// Додасть назву інгредієнта як його текстовий вміст.

// 👍Додасть елементу клас item.

// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
console.log(res)