function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonRef = document.querySelector(".change-color");
const spanTextRef = document.querySelector(".color");

const onButtonClick = () => {
  const bodyColor = getRandomHexColor();
  spanTextRef.textContent = bodyColor;
  document.body.style.backgroundColor = bodyColor;
};

buttonRef.addEventListener("click", onButtonClick);