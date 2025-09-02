const idChoice1 = document.getElementById('inputBox1');
const idChoice2 = document.getElementById('choiceBox');
const idChoice3 = document.getElementById('inputBox2');
let operator = "";
let number1 = "";
let number2 = "";
let result = "";

idChoice1.addEventListener("change", function(value) {
  number1 = event.target.value
  console.log(number1)
});

idChoice2.addEventListener("change", function(value) {
  operator = event.target.value
  console.log(operator)
});

idChoice3.addEventListener("change", function(value) {
  number2 = event.target.value
  console.log(number2)
});

function calculateResult() {
  result = number1 operator number2
  console.log(result)

  outputDiv.textContent = " Your result is " + result + "."
}
