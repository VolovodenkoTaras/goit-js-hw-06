let counterValue = 0;

const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}

const onClickIncreaseButton = () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
}

refs.incrementBtn.addEventListener("click", onClickIncreaseButton)

const onClickDecreaseButton = () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}

refs.decrementBtn.addEventListener("click", onClickDecreaseButton)

