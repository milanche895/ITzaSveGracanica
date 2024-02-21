const display = document.getElementById("display");
const displayDown = document.getElementById("display-down");
let firstNumber = 0;
let secundNumber = 0;
let operation = "";
function appendToDisplay(value) {
  if (display.textContent[0] == "0"){
    display.textContent = "";
  }
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = 0;
  displayDown.textContent = 0;
  firstNumber = 0;
  secundNumber = 0;
  operation = "";
}
function equalsNumber(){
  const result = eval(display.textContent);
  display.textContent = result;
}

function operationValue(value){
  operation = value;
  firstNumber = display.textContent;
  displayDown.textContent = firstNumber;
  display.textContent = "0";
}

function equalsNumber(){
  secundNumber = display.textContent;
  displayDown.textContent = displayDown.textContent + " " + operation + " " + secundNumber;
  if ("+"==operation){
    sum = parseInt(firstNumber) + parseInt(display.textContent);
    display.textContent = sum;
  } else if ("-"==operation){
    sum = parseInt(firstNumber) - parseInt(display.textContent);
    display.textContent = sum;
  } else if ("*"==operation){
    sum = parseInt(firstNumber) * parseInt(display.textContent);
    display.textContent = sum;
  } else if ("/"==operation){
    sum = parseInt(firstNumber) / parseInt(display.textContent);
    display.textContent = sum;
  }
}