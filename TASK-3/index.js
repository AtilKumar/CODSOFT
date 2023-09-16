document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".ans");
    const buttons = document.querySelectorAll(".grid div");
  
    let currentValue = "";
    let currentOperator = "";
    let previousValue = "";
  
    // Add event listener to all buttons
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonText = button.textContent;
  
        if (buttonText === "AC") {
          // Clear the calculator
          currentValue = "";
          currentOperator = "";
          previousValue = "";
          display.textContent = "";
        } else if (buttonText === "DEL") {
          // Delete the last character
          currentValue = currentValue.slice(0, -1);
          display.textContent = currentValue;
        } else if (buttonText === "=") {
          // Perform calculation when "=" is pressed
          if (currentValue && previousValue && currentOperator) {
            const result = calculate(previousValue, currentOperator, currentValue);
            display.textContent = result;
            currentValue = result;
            previousValue = "";
            currentOperator = "";
          }
        } else {
          // Append digits and operators to the current input
          currentValue += buttonText;
          display.textContent = currentValue;
          if (["+", "-", "x", "/"].includes(buttonText)) {
            if (currentOperator) {
              // Calculate when two operators are pressed consecutively
              const result = calculate(previousValue, currentOperator, currentValue.slice(0, -1));
              display.textContent = result;
              currentValue = result;
              previousValue = result;
              currentOperator = buttonText;
            } else {
              currentOperator = buttonText;
              previousValue = currentValue;
              currentValue = "";
            }
          }
        }
      });
    });
  
    // Function to perform the calculation
    function calculate(num1, operator, num2) {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      switch (operator) {
        case "+":
          return (num1 + num2).toString();
        case "-":
          return (num1 - num2).toString();
        case "x":
          return (num1 * num2).toString();
        case "/":
          if (num2 !== 0) {
            return (num1 / num2).toString();
          } else {
            return "Error";
          }
        default:
          return "Error";
      }
    }
  });
  