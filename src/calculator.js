let currentResult = 0;

export function setupCalculator() {
  const input = document.getElementById("input-number");
  const resultText = document.querySelector("#result-text");
  const calcText = document.querySelector("#calculation-text");
  const resetBtn = document.getElementById("btn-reset");

  function calculate(operator) {
    const enteredNumber = Number(input.value);
    const initialResult = currentResult;
    if (operator === "+") {
      currentResult += enteredNumber;
    } else if (operator === "-") {
      currentResult -= enteredNumber;
    } else if (operator === "*") {
      currentResult *= enteredNumber;
    } else if (operator === "/") {
      currentResult /= enteredNumber;
    }

    calcText.textContent = `${initialResult} ${operator} ${enteredNumber}`;
    resultText.textContent = `Result: ${currentResult}`;
  }

  function resetCalculation() {
    currentResult = 0;
    input.value = "";
    resultText.textContent = "Result: 0";
    calcText.textContent = "Calculation:";
  }

  document
    .getElementById("btn-add")
    .addEventListener("click", () => calculate("+"));
  document
    .getElementById("btn-subtract")
    .addEventListener("click", () => calculate("-"));
  document
    .getElementById("btn-multiply")
    .addEventListener("click", () => calculate("*"));
  document
    .getElementById("btn-divide")
    .addEventListener("click", () => calculate("/"));
  resetBtn.addEventListener("click", resetCalculation);
}
