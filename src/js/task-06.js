const input = document.querySelector("#validation-input");

input.addEventListener("change", onChange);

function onChange(e) {
  if (e.currentTarget.value.length == input.dataset.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
