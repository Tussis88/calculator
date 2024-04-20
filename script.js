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
function numManager() {
  if (!firstNumber) {
    if (result) firstNumber = result;
    itsFirst = false;
  }
  if (firstNumber) {
    itsFirst = false;
    if (secondNumber) {
      result = operate(+firstNumber, +secondNumber, operator);
      console.log(
        `first: ${firstNumber}, second: ${secondNumber}, result: ${result}`,
      );
      calcScreen.textContent = result;
      // firstNumber = result;
      firstNumber = "";
      secondNumber = "";
    }
  }
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
  });
  calculator.appendChild(buttons[i]);
}

const addButton = document.createElement("button");
addButton.classList.add("operator");
addButton.textContent = "+";
addButton.addEventListener("click", () => {
  numManager();
  operator = add;
});
calculator.appendChild(addButton);

const subtractButton = document.createElement("button");
subtractButton.classList.add("operator");
subtractButton.textContent = "-";
subtractButton.addEventListener("click", () => {
  numManager();
  operator = subtract;
});
calculator.appendChild(subtractButton);

const multiplyButton = document.createElement("button");
multiplyButton.classList.add("operator");
multiplyButton.textContent = "*";
multiplyButton.addEventListener("click", () => {
  numManager();
  operator = multiply;
});
calculator.appendChild(multiplyButton);

const divideButton = document.createElement("button");
divideButton.classList.add("operator");
divideButton.textContent = "/";
divideButton.addEventListener("click", () => {
  numManager();
  operator = divide;
});
calculator.appendChild(divideButton);

const operateButton = document.createElement("button");
operateButton.classList.add("operator");
operateButton.textContent = "=";
operateButton.addEventListener("click", () => {
  if ((!firstNumber) && (result)) firstNumber = result;
  if (secondNumber) {
    itsFirst = true;
    result = operate(+firstNumber, +secondNumber, operator);
    console.log(
      `first: ${firstNumber}, second: ${secondNumber}, result: ${result}`,
    );
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
  result = "";
  calcScreen.textContent = 0;
  operator = 0;
});
calculator.appendChild(clearButton);
