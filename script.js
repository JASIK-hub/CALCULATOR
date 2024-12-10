const display = document.getElementById("display");
const saved = document.getElementById("saved");

function appendToDisplay(input) {
  if (input == ":") {
    display.value += "/";
  } else {
    display.value += input;
  }
}
function calculateResult() {
  display.value = eval(display.value);
}
function clearDisplay() {
  display.value = "";
}
function calculateRoot() {
  const value = parseFloat(display.value);
  if (value < 0) {
    display.value = "Ошибка";
  } else {
    display.value = Math.sqrt(display.value);
  }
}
function removeDigit() {
  let num = display.value;
  display.value = Math.floor(num / 10);
}
function twoZeros() {
  display.value += "00";
}
function changeValue() {
  let digit = parseFloat(display.value);
  display.value = digit * -1;
}

function memoryClear() {
  saved.textContent = 0;
}
function memoryRecall() {
  display.value += saved.textContent;
}

function memoryMinus() {
  let savedValue = parseFloat(saved.textContent);
  let displayValue = parseFloat(display.value) * -1;
  saved.textContent = savedValue + displayValue;
}
function memoryPlus() {
  let savedValue = parseFloat(saved.textContent);
  let displayValue = parseFloat(display.value);
  saved.textContent = savedValue + displayValue;
}
function clearAll() {
  display.value = "";
  saved.textContent = "";
}

function percent() {
    display.value=display.value/100
  }
function showAlert() {
  alert("Скопировано в буфер обмена!");
}