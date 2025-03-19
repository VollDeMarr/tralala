const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("change", onChange);

function onChange(ev) {
  text.style.fontSize = `${ev.currentTarget.value}px`;
}
