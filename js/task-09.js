function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnEl.addEventListener("click", showNameOfColor);

function showNameOfColor() {
  bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
  spanColor.textContent = bodyColor.style.backgroundColor;
}
