const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
console.log(input.textContent);

input.addEventListener("input", onChange);

function onChange(e) {
  if (e.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = e.currentTarget.value;
  }
}
