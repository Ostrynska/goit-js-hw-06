// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// 1. Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// 2. Для кожного элемента li.item у спику ul#categories, знайде і виведе
// в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів в
// категорії(усіх < li >, вкладених в нього).

const makeNumberCategories = () =>
{
    const categoriesEl = document.querySelectorAll('#categories li.item');
    // console.log(categoriesEl);
    return `Number of categories: ${categoriesEl.length - 1}`
}

console.log(makeNumberCategories());

const makeCategoryElements = () =>
{
    const categoriesElName = document.querySelectorAll('li.item h2');
    console.log(categoriesElName);
    
    return `Category: ${categoriesElName}`
}

console.log(makeCategoryElements());