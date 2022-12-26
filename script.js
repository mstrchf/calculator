// selectors
let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");

let firstNumber = "";
let secondNumber = "";
let displayValue = "";
let operator = "";

// listeners
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "clear":
        reset();
        break;
      case "del":
        del();
        break;
      case "=":
        computeSolution();
        showOnDisplay();
        break;
      default:
        calculating(e);
        break;
    }
    console.log(`First: ${firstNumber}, Second: ${secondNumber}`);
  });
});

// functions

function computeSolution() {
  clearDisplay();

  if (firstNumber == "0" && operator == "/") {
    displayValue = "Huh! What?";
    return;
  }

  let answer = operate(operator, firstNumber, secondNumber);

  if (answer == Math.floor(answer)) {
    displayValue = answer;
  } else {
    displayValue = answer.toFixed(2);
  }

  firstNumber = displayValue;
  secondNumber = "";
}

function calculating(event) {
  if (
    !isNaN(parseInt(event.target.textContent)) ||
    event.target.textContent == "."
  ) {
    setDisplayValue(event);
    showOnDisplay();
  } else {
    if (operator == "") {
      setOperator(event);
    }
    setDisplayValue(event);
    showOnDisplay();
  }
}

function setDisplayValue(event) {
  displayValue = event.target.textContent;

  if (operator == "") {
    firstNumber += displayValue;
  } else {
    if (!isNaN(parseInt(displayValue)) || displayValue == ".") {
      secondNumber += displayValue;
    } else if (secondNumber != "") {
      computeSolution();
      setOperator(event);
      displayValue += operator;
    }
  }
}

function showOnDisplay() {
  display.value += displayValue;
}

function clearDisplay() {
  display.value = "";
}

function operate(ops, num1, num2) {
  switch (ops) {
    case "+":
      return add(parseInt(num1), parseInt(num2));
    case "-":
      return subtract(parseInt(num1), parseInt(num2));
    case "×":
      return multiply(parseInt(num1), parseInt(num2));
    case "÷":
      return divide(parseInt(num1), parseInt(num2));
    default:
      return;
  }
}
function setOperator(event) {
  operator = event.target.textContent;
}

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

async function reset() {
    firstNumber = "";
    secondNumber = "";
    displayValue = "";
    operator = "";
    display.value = displayValue;
}
