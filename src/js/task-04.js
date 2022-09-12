const counterValue = {
    value: 0,
    increment()
    {
        // console.log('increment -> this', this);
        this.value += 1;
    },
    decrement()
    {
        // console.log('decrement -> this', this);
        this.value -= 1;
    }
}
    
const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function ()
{
    counterValue.decrement();

    valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function ()
{
    counterValue.increment();

    valueEl.textContent = counterValue.value;
});