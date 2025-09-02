const idChoice1 = document.getElementById('inputBox1');
const idChoice2 = document.getElementById('choiceBox');
const idChoice3 = document.getElementById('inputBox2');
let operator = "";
let number1 = "";
let number2 = "";

.addEventListener("change", myScript);

function calculateResult(firstNumber, symbol, secondNumber) {
  operator = symbol;
  number1 = firstNumber;
  number2 = secondNumber;
}
