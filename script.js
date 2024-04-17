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
let firstNumber = "";
let secondNumber = "";
let result = 0;
let operator;
let itsFirst = true;

// main function
function operate(a, b, operation) {
  return operation(a, b);
}

function calcLogic(number) {
  return itsFirst ? (firstNumber += number) : (secondNumber += number);
}

// HTML elements
const calculator = document.querySelector("#calculator");

const calcScreen = document.createElement("div");
calcScreen.id = "screen";
calcScreen.textContent = "0";
calculator.appendChild(calcScreen);

const buttons = [];
for (let i = 0; i < 10; i++) {
  buttons[i] = document.createElement("button");
  buttons[i].id = i;
  buttons[i].textContent = i;
  buttons[i].classList.add("numbers");
  buttons[i].addEventListener("click", (e) => {
    calcScreen.textContent = calcLogic(e.target.textContent);
    console.log(firstNumber);
  });
  calculator.appendChild(buttons[i]);
}

const addButton = document.createElement("button");
addButton.classList.add("operator");
addButton.textContent = "+";
addButton.addEventListener("click", () => {
  if (itsFirst) {
    itsFirst = false;
    if (result) firstNumber = result;
  } else {
    result = operate(+firstNumber, +secondNumber, operator);
    calcScreen.textContent = result;
    firstNumber = result;
    secondNumber = "";
  }
  operator = add;
});
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
operateButton.addEventListener("click", () => {
  if (secondNumber) {
    itsFirst = true;
    result = operate(+firstNumber, +secondNumber, operator);
    calcScreen.textContent = result;
    firstNumber = "";
    secondNumber = "";
    operator = 0;
  }
});
calculator.appendChild(operateButton);

const clearButton = document.createElement("button");
clearButton.classList.add("clear");
clearButton.textContent = "CLEAR";
clearButton.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  calcScreen.textContent = 0;
  operator = 0;
});
calculator.appendChild(clearButton);
