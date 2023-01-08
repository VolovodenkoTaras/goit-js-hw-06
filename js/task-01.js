const refs = {
    categories: document.querySelector('#categories'),
    items: document.querySelectorAll('.item'),
}

console.log("Number of categories:", refs.categories.childElementCount);

refs.items.forEach((el) => {

    // Вариант1
    // console.log("Category:", el.querySelector("h2").textContent);
    // console.log("Elements:", el.querySelector("ul").childElementCount);

    // Вариант2
    console.log(`
Category: ${el.querySelector("h2").textContent}
Elements: ${el.querySelector("ul").childElementCount}`);
})