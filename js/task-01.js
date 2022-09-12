// 1
const numberEl = document.querySelectorAll('li.item');

console.log(`Number of categories: ${numberEl.length}`);

// 2
const categoriesEl = [...numberEl]
.map(category =>
`Category: ${category.children[0].textContent}
Elements: ${category.children[1].children.length}`)
.join("\n \n");

console.log(categoriesEl);
