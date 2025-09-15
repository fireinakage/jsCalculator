const idChoice1 = document.getElementById('inputBox1');
const idChoice2 = document.getElementById('choiceBox');
const idChoice3 = document.getElementById('inputBox2');
let operator = "";
let number1 = "";
let number2 = "";
let result = "";

function decCheck(num) {
    if (num.includes('.')) {
      const decimalPlace = result.toString().indexOf(".");
      const stringifyResult = Number(result.toString().substring(decimalPlace + 1));

      if (stringifyResult > 9) {
        result = resultHolder.toFixed(2)
      } else if (stringifyResult > 0) {
        result = resultHolder.toFixed(1)
      }
    }
  }

idChoice1.addEventListener("input", function () {
  number1 = Number(idChoice1.value)
  console.log(number1)
});

idChoice2.addEventListener("input", function () {
  operator = idChoice2.value
  console.log(operator)
});

idChoice3.addEventListener("input", function () {
  number2 = Number(idChoice3.value)
  console.log(number2)
});

function calculateResult() {
  if (operator === "+") {
    result = number1 + number2;
  } else if (operator === "-") {
    result = number1 - number2;
  } else if (operator === "*") {
    result = number1 * number2;
  } else if (operator === "/") {
    result = number1 / number2;
    if (number2 === 0) {
      result = undefined
    }
  } else if (operator === '^') {
    result = number1 ** number2
  } else if (operator === '') {
    result = number1 + number2
  }

  console.log(number1 + operator + number2)

  resultHolder = Number(result)
  const toString1 = resultHolder.toString();



  decCheck(toString1)
  console.log(result)

  outputDiv.textContent = " Your result is " + result
}



document.querySelectorAll('button').forEach(button => {
    button.classList.add('button-ripple');
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        button.appendChild(ripple);
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});

