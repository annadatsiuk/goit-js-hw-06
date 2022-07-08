function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBox() {
  const amount = +inputEl.value;
  let sizeBox = 20;

  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    sizeBox += 10;
    newBox.style.width = sizeBox + "px";
    newBox.style.height = sizeBox + "px";

  
    // newBox.innerHTML = i;

    boxes.appendChild(newBox);
  }
}

function destroyBox() {
  boxes.innerHTML = "";

}

createBtn.addEventListener("click", createBox);
destroyBtn.addEventListener("click", destroyBox);
