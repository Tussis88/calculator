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
  if (b == 0) {
    clearScreen();
    return alert("You can't divide by 0");
  }
  return a / b;
}

// main variables
let firstNumber = "";
let secondNumber = "";
let result = 0;
let operator;
let itsFirst = true;

// main functions
function operate(a, b, operation) {
  const result = operation(a, b);
  // don't let more than 6 decimals and round the last decimal
  const roundedResult = Math.round(result * 1000000) / 1000000;
  return roundedResult;
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
function clearScreen() {
  firstNumber = "";
  secondNumber = "";
  result = "";
  calcScreen.textContent = 0;
  operator = 0;
}
// HTML elements
const calculator = document.querySelector("#calculator");
const numBlock = document.querySelector("#numblock");
const operatorBlock = document.querySelector("#operatorblock");

const calcScreen = document.createElement("div");
calcScreen.id = "screen";
calcScreen.textContent = "0";
calculator.prepend(calcScreen);

const buttons = [];
for (let i = 9; i >= 0; i--) {
  buttons[i] = document.createElement("button");
  buttons[i].id = i;
  buttons[i].textContent = i;
  buttons[i].classList.add("numbers");
  buttons[i].addEventListener("click", (e) => {
    calcScreen.textContent = calcLogic(e.target.textContent);
  });
  numBlock.appendChild(buttons[i]);
}

const addButton = document.createElement("button");
addButton.classList.add("operator");
addButton.textContent = "+";
addButton.addEventListener("click", () => {
  numManager();
  operator = add;
});
operatorBlock.appendChild(addButton);

const subtractButton = document.createElement("button");
subtractButton.classList.add("operator");
subtractButton.textContent = "-";
subtractButton.addEventListener("click", () => {
  numManager();
  operator = subtract;
});
operatorBlock.appendChild(subtractButton);

const multiplyButton = document.createElement("button");
multiplyButton.classList.add("operator");
multiplyButton.textContent = "*";
multiplyButton.addEventListener("click", () => {
  numManager();
  operator = multiply;
});
operatorBlock.appendChild(multiplyButton);

const divideButton = document.createElement("button");
divideButton.classList.add("operator");
divideButton.textContent = "/";
divideButton.addEventListener("click", () => {
  numManager();
  operator = divide;
});
operatorBlock.appendChild(divideButton);

const operateButton = document.createElement("button");
operateButton.classList.add("operator");
operateButton.textContent = "=";
operateButton.addEventListener("click", () => {
  if (!firstNumber && result) firstNumber = result;
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

const clearButton = document.createElement("button");
clearButton.classList.add("clear");
clearButton.textContent = "CL";
clearButton.addEventListener("click", () => {
  clearScreen();
});
numBlock.appendChild(clearButton);
numBlock.appendChild(operateButton);
