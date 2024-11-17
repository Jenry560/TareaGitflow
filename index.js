const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    alert(`Click en el botón: ${buttonText}`);
  });
});
