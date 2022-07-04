// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const inputEl = document.querySelector("#validation-input");
const checkNumber = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onFocusInput);

function onFocusInput(event) {
  if (event.currentTarget.value.length === checkNumber) {
    return inputEl.classList.add("valid");
  }
  return inputEl.classList.add("invalid");
}
