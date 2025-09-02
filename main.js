const idChoice1 = document.getElementById('inputBox1');
const idChoice2 = document.getElementById('choiceBox');
const idChoice3 = document.getElementById('inputBox2');
let operator = "";
let number1 = "";
let number2 = "";

idChoice1.addEventListener("change", function(value) {
  number1 = event.target.value
});

idChoice2.addEventListener("change", function(value) {
  operator = event.target.value
});

idChoice3.addEventListener("change", function(value) {
  number2 = event.target.value
});

function calculateResult(firstNumber, symbol, secondNumber) {
  operator = symbol;
  number1 = firstNumber;
  number2 = secondNumber;
}
