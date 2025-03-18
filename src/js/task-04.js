const btnDecr = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

btnDecr.addEventListener("click", onDecr);
btnInc.addEventListener("click", onIncr);

let counterValue = Number(value.textContent);

function onDecr() {
  counterValue -= 1;
  value.textContent = counterValue;
}
function onIncr() {
  counterValue += 1;
  value.textContent = counterValue;
}
