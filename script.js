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

const buttons = [];
for (let i = 1; i < 10; i++) {
  buttons[i] = document.createElement("button");
  buttons[i].id = i;
  buttons[i].textContent = i;
  buttons[i].classList.add("numbers");
  calculator.appendChild(buttons[i]);
};

calculator.appendChild(calcScreen);
