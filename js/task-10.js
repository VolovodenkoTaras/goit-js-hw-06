function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  input: document.querySelector('input[type="number"]'),
  div: document.querySelector("#boxes"),
}

let size = 30;
let amount = 0;

const onInput = (event) => {
  amount = event.currentTarget.value;
};

const createBoxes = () => {
  const arrayDivs = [];
  for (let i = 0; i < amount; i += 1) {
    const backgroundColor = getRandomHexColor();
    arrayDivs.push(`<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${backgroundColor}"></div>`);
    size += 10;
  }
  refs.div.insertAdjacentHTML("beforeend", arrayDivs.join(""));
};

const destroyBoxes = () => {
  refs.input.value = "";
  refs.div.innerHTML = "";
  size = 30;
  amount = 0;
};

refs.input.addEventListener("input", onInput);
refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

