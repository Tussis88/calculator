// main operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// main variables
let firstNumber;
let secondNumber;
let operator;

// main function
function operate(a, b, operation) {
  return operation(a, b);
}

// HTML elements
const calculator = document.querySelector("#calculator");

const calcScreen =  document.createElement("div");
calcScreen.id = "screen";
calcScreen.textContent = "prova";
calculator.appendChild(calcScreen);

const buttons = [];
for (let i = 0; i < 10; i++) {
  buttons[i] = document.createElement("button");
  buttons[i].id = i;
  buttons[i].textContent = i;
  buttons[i].classList.add("numbers");
  calculator.appendChild(buttons[i]);
};

const addButton = document.createElement("button");
addButton.classList.add("operator");
addButton.textContent = "+";
calculator.appendChild(addButton);

const subtractButton = document.createElement("button");
subtractButton.classList.add("operator");
subtractButton.textContent = "-";
calculator.appendChild(subtractButton);

const multiplyButton = document.createElement("button");
multiplyButton.classList.add("operator");
multiplyButton.textContent = "*";
calculator.appendChild(multiplyButton);

const divideButton = document.createElement("button");
divideButton.classList.add("operator");
divideButton.textContent = "/";
calculator.appendChild(divideButton);

const operateButton = document.createElement("button");
operateButton.classList.add("operator");
operateButton.textContent = "=";
calculator.appendChild(operateButton);

const clearButton = document.createElement("button");
clearButton.classList.add("clear");
clearButton.textContent = "CLEAR";
calculator.appendChild(clearButton);
