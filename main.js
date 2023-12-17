let pass = document.querySelector("#password");
let confirmPass = document.querySelector("#confirmpass");
let confirmPassSpan = document.querySelector(".confirmpassspan");
let passSpan = document.querySelector(".passspan");

function validate() {
  if (pass.value !== confirmPass.value) {
    confirmPassSpan.textContent = "Passwords do not match!";
    passSpan.textContent = "Passwords do not match!";
    confirmPass.setCustomValidity(" ");
    pass.setCustomValidity(" ");
  } else {
    confirmPassSpan.textContent = "";
    passSpan.textContent = "";
    confirmPass.setCustomValidity("");
    pass.setCustomValidity("");
  }
}
pass.addEventListener("input", validate);
confirmPass.addEventListener("input", validate);
