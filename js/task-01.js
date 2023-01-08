const refs = {
    categories: document.querySelector('#categories'),
    items: document.querySelectorAll('.item'),
}

console.log("Number of categories", refs.categories.childElementCount);

refs.items.forEach((el) => {
    // console.log("Category:", el.querySelector("h2").textContent);
    // console.log("Elements:", el.querySelector("ul").childElementCount);

    console.log(`
Category: ${el.querySelector("h2").textContent}
Elements: ${el.querySelector("ul").childElementCount}`);
})