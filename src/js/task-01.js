const test = document.querySelector('ul')
const item = document.querySelectorAll('.item')
// console.log("Number of categories:",test.children.length)
const set = item.forEach(el => {
    // console.log(`Category: ${el.firstElementChild.textContent}`)
    // console.log(`Elements ${el.children[1].childElementCount}`)
})


 

//👍 Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст
//  заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

    // Number of categories: 3

    // Category: Animals
    // Elements: 4

    // Category: Products
    // Elements: 3

    // Category: Technologies
    // Elements: 5

// console.log("Number of categories:",test.children.length)
