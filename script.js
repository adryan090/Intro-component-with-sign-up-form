const firstName = document.querySelector("form input:nth-of-type(1)");
const lastName = document.querySelector("form input:nth-of-type(2)");
const email = document.querySelector("form input:nth-of-type(3)");
const password = document.querySelector("form input:nth-of-type(4)");
const submitButton = document.querySelector("button.btn");
const errorMsg = document.querySelectorAll(".error-msg");

submitButton.addEventListener("click", () => {
  [firstName, lastName, email, password].forEach((element, index) => {
    let isCorrectInput;

    element !== email
      ? (isCorrectInput = element.value.length > 0) // check if input is empty
      : (isCorrectInput = checkEmail(element)); // check if email is correct

    //   if incorrect input show error msg
    !isCorrectInput
      ? errorMsg[index].classList.remove("hidden")
      : errorMsg[index].classList.add("hidden");
  });
});

function checkEmail(email) {
  const inputText = email.value;
  const separator = inputText.indexOf("@");
  const lastSeparator = inputText.lastIndexOf("@");

  //   if 2 or more '@' exists
  if (separator !== lastSeparator) return false;
  //   if no '@' exist
  if (separator === -1) return false;
  //   if '@' is first
  if (!separator) return false;
  //   if '@' is last
  if (separator + 1 >= inputText.length) return false;

  return true;
}
