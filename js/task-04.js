const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterDisplayEl = document.getElementById("value");

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  return (counterDisplayEl.textContent = counterValue);
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  return (counterDisplayEl.textContent = counterValue);
});
