function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnC = document.querySelector("[data-create]");
const btnD = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

btnC.addEventListener("click", callback);
btnD.addEventListener("click", callback);

function createBoxes(amount) {
  let newEl = document.createElement("div");

  const res = [];
  for (let i = 0; i < amount; i++) {
    const test = newEl;
    test.style.backgroundColor = `${getRandomHexColor()}`;
    console.log(test.style.backgroundColor);
    test.style.width = `${50 + i}px`;
    test.style.height = `${50 + i}px`;
    console.log(res);

    res.push(test);
    console.log(res);
  }
  res.map((el) => console.log(el));
  console.log(res);
  // res.map((el) => {
  //   el.style.backgroundColor = `${getRandomHexColor()}`;
  //   el.style.width = `${100}px`;
  //   el.style.height = `${100}px`;

  // });

  // console.log(res);
  // for (let i = 0; i < amount; i++) {
  //   newEl.style.backgroundColor = `${getRandomHexColor()}`;
  //   newEl.style.width = `${100}px`;
  //   newEl.style.height = `${100}px`;
  // // newEl.textContent = `${i}`
  // console.log(newEl)
  //   res.push(newEl)
  //   // console.log(res)
  // }
  // console.log(res)
  boxes.append(...res);
}

function callback(ev) {
  if (ev.target.hasAttribute("data-create") && input.value !== "") {
    createBoxes(input.value);
  }
}
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
