const inputEl = document.querySelector("#font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
});