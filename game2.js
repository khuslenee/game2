document.addEventListener("DOMContentLoaded", () => {
  const countDisplay = document.getElementById("count");
  const increaseButton = document.getElementById("increase-btn");
  const decreaseButton = document.getElementById("decrease-btn");
  const resetButton = document.getElementById("reset-btn");

  let count = 0;

  function updateDisplay() {
    countDisplay.textContent = count;

    decreaseButton.disabled = count <= 0;
    resetButton.disabled = count === 0;
  }

  increaseButton.addEventListener("click", () => {
    count++;
    updateDisplay();
  });

  decreaseButton.addEventListener("click", () => {
    if (count > 0) {
      count--;
      updateDisplay();
    }
  });

  resetButton.addEventListener("click", () => {
    count = 0;
    updateDisplay();
  });

  updateDisplay();
});
