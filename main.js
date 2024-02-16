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

document.addEventListener("DOMContentLoaded", function () {
  let loaderOverlay = document.querySelector(".loader-overlay");
  let video = document.querySelector("#video");
  function fadeOutLoader() {
    let fadeOutInterval = setInterval(function () {
      if (loaderOverlay.style.opacity > 0) {
        loaderOverlay.style.opacity -= 0.01;
      } else {
        clearInterval(fadeOutInterval);
        loaderOverlay.style.display = "none";
      }
    }, 10);
  }

  video.addEventListener("play", function () {
    fadeOutLoader();
  });

  setTimeout(function () {
    fadeOutLoader();
  }, 10000);
});
