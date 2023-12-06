let counter = 0;

// When a user clicks the + element, the count should increase by 1 on screen.
const plusEl = document.getElementById('plus');
plusEl.addEventListener('click', () => {
    counter++;
    updateCount();
});

// When a user clicks the – element, the count should decrease by 1 on screen.
const minusEl = document.getElementById('minus');
minusEl.addEventListener('click', () => {
    counter--;
    updateCount();
});

const countEl = document.getElementById('count');


const updateCount = () => {
    counter = Math.max(counter, 0);

    console.log(`count is ${counter}`);
    countEl.innerHTML = counter;
}