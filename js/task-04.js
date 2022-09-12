const counterValue = {
    value: 0,
    increment()
    {
        this.value += 1;
    },
    decrement()
    {
        this.value -= 1;
    }
}
    
const refs = {
    decrementBtn: document.querySelector('.js-decrement'),
    incrementBtn: document.querySelector('.js-increment'),
    valueEl: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);

refs.incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(event) {
    counterValue.decrement();
    refs.valueEl.textContent = counterValue.value;
};

function onIncrementBtnClick(event) {
    counterValue.increment();
    refs.valueEl.textContent = counterValue.value;
};