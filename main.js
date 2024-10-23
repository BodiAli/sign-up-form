let pass = document.querySelector("#password");
let confirmPass = document.querySelector("#confirmpass");
let confirmPassSpan = document.querySelector(".confirmpassspan");
let passSpan = document.querySelector(".passspan");
let loaderOverlay = document.querySelector(".loader-overlay");
let video = document.querySelector("#video");

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

function fadeOutLoader() {
  loaderOverlay.style.display = "none";
}

video.addEventListener("playing", function () {
  fadeOutLoader();
});

setTimeout(function () {
  fadeOutLoader();
}, 5000);
