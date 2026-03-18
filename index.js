const textareaInput = document.getElementById("textareaInput");
const symbols = document.getElementById("symbols");

textareaInput.addEventListener("input", () => {
  const text = textareaInput.value;
  let textLength = text.length;

  if (textLength > 250) {
    textareaInput.value = text.slice(0, 250);
    textLength = 250;
  }

  if (textLength === 250) {
    textareaInput.classList.add("error");
    symbols.classList.add("error-symbol");
  } else {
    textareaInput.classList.remove("error");
    symbols.classList.remove("error-symbol");
  }

  symbols.textContent = `${textLength} / 250`;
});
