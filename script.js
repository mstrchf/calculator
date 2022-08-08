// selectors
let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");

let firstNumber = 0;
let secondNumber = 0;
let displayValue = 0;
let operator = "";

// listeners
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculating(e);
  });
});

// functions
function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

function operate(ops, num1, num2) {
  switch (ops) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return;
  }
}

function setDisplayValue(event) {
  displayValue = event.target.textContent;
  if (operator != "") {
    firstNumber = displayValue;
  } else {
    secondNumber = displayValue;
  }
}

function reset() {
  firstNumber = '';
  secondNumber = '';
  displayValue = '';
  operator = "";
  display.value = displayValue;
}

function showOnDisplay() {
  display.value += displayValue;
}

function setOperator(event) {
  operator = event.target.textContent;
}

function calculating(event) {
  if (!isNaN(parseInt(event.target.textContent))) {
    setDisplayValue(event);
    showOnDisplay();
  }
}
