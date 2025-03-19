const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

btn.addEventListener("click", onClick);

function onClick() {
  const res = getRandomHexColor();

  body.style.backgroundColor = res;
  span.textContent = res;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
