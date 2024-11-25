let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    // Handling scientific functions like sin, cos, tan, sqrt, log, etc.
    let result = display.value;

    // Replace shorthand for operations
    result = result.replace('^', '**'); // Replace ^ with exponentiation
    result = result.replace('sqrt(', 'Math.sqrt('); // sqrt to Math.sqrt
    result = result.replace('log(', 'Math.log10('); // log to Math.log10
    result = result.replace('sin(', 'Math.sin('); // sin to Math.sin
    result = result.replace('cos(', 'Math.cos('); // cos to Math.cos
    result = result.replace('tan(', 'Math.tan('); // tan to Math.tan

    // Evaluate the expression
    display.value = eval(result);
  } catch (e) {
    display.value = 'Error';
  }
}

// Optional: Add keyboard support for the calculator
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key >= '0' && key <= '9' || ['+', '-', '*', '/', '.', 'Enter', 'Backspace'].includes(key)) {
    if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      display.value = display.value.slice(0, -1);
    } else {
      appendToDisplay(key);
    }
  }
});
