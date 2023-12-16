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
  const emailAddress = email.value;
  const atSignIndex = emailAddress.indexOf("@");
  const lastAtSignIndex = emailAddress.lastIndexOf("@");

  //   if 2 or more '@' exists
  if (atSignIndex !== lastAtSignIndex) return false;
  //   if no '@' exist
  if (atSignIndex === -1) return false;
  //   if '@' is first
  if (!atSignIndex) return false;
  //   if '@' is last
  if (atSignIndex + 1 >= emailAddress.length) return false;

  //  get string after '@'
  const domainText = emailAddress.slice(atSignIndex + 1);
  let dotIndex = domainText.indexOf(".");
  // if no '.' after '@'
  if (dotIndex === -1) return false;

  //  domain name < 2 or TLD length < 2
  dotIndex = emailAddress.indexOf(".");
  let lastDotIndex = emailAddress.lastIndexOf(".");
  if (lastDotIndex >= emailAddress.length - 2 || dotIndex <= atSignIndex + 2)
    return false;

  return true;
}
