const form = document.querySelector(".login-form");
const btn = document.querySelector("button");

form.addEventListener("submit", onSubmit);
const res = {};
function onSubmit(ev) {
  ev.preventDefault();
  const short = ev.target.elements;

  if (short.email.value === "" || short.password.value === "") {
    return alert("Попередження про те, що всі поля повинні бути заповнені.");
  }
  res.email = short.email.value;
  res.password = short.password.value;

  console.log(res);
  form.reset();
}
