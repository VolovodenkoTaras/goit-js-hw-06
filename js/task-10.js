function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  inputValue: document.querySelector('input[type="number"]'),
  divBoxes: document.querySelector("#boxes"),
}

let size = 30;
let inputNum = 0;

const onInput = (event) => {
  inputNum = event.currentTarget.value;
};

function createBoxes(amount) {
  amount = inputNum;
  const arrayDivs = [];
  for (let i = 0; i < amount; i += 1) {
    const backgroundColor = getRandomHexColor();
    arrayDivs.push(`<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${backgroundColor}"></div>`);
    size += 10;
  }
  refs.divBoxes.insertAdjacentHTML("beforeend", arrayDivs.join(""));
};

const destroyBoxes = () => {
  refs.inputValue.value = "";
  refs.divBoxes.innerHTML = "";
  size = 30;
  inputNum = 0;
};

refs.inputValue.addEventListener("change", onInput);
refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

