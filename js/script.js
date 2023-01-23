const errorMessageEl = document.querySelector(".error-message");
const passwordField = document.querySelector("#password-field");
const phoneField = document.querySelector("#phone");
const confirmPasswordField = document.querySelector("#confirm-password-field");

const changeBorderToRed = () => {
  passwordField.style.border = "2px solid red";
  confirmPasswordField.style.border = "2px solid red";
}

const changeBorderToBlue = () => {
  passwordField.style.border = "2px solid blue";
  confirmPasswordField.style.border = "2px solid blue";
}

const displayPasswordMatchError = () => {
  const errorMessage = "*Passwords do not match."
  const passwordsMatchMessage = "Passwords match"
  errorMessageEl.classList.remove("passwords-match-message")
  if (passwordField.value !== confirmPasswordField.value) {
    errorMessageEl.innerText = errorMessage;
    errorMessageEl.classList.add("error-message");
    changeBorderToRed();
  }  else {
    errorMessageEl.classList.remove("error-message");
    errorMessageEl.classList.add("passwords-match-message");
    errorMessageEl.innerText = passwordsMatchMessage;
    changeBorderToBlue();
  }
}
passwordField.addEventListener("input", displayPasswordMatchError);
confirmPasswordField.addEventListener("input", displayPasswordMatchError);

const phoneNumber = phoneField.value;


function validatePhoneNumber(phoneNumber) {
  const errorMessage = "Please enter a valid phone number. 10 digits only."
  if (!phoneNumber) {
      errorMessageEl.innerText = "You must enter a phone number.";
  } else {
      if (!/^\d{10}$/.test(phoneNumber)) {
        errorMessageEl.innerText = errorMessage;
      } 
  }
}

phoneField.addEventListener("blur", () => {
  validatePhoneNumber(phoneField.value);
});
