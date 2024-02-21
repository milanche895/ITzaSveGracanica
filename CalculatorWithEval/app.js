const display = document.getElementById("display");
function appendToDisplay(value) {
  if (display.textContent[0] == "0"){
    display.textContent = "";
  }
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = 0;
}
function equalsNumber(){
  const result = eval(display.textContent);
  display.textContent = result;
}