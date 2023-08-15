const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function () {
  const email = emailInput.value;
  const password = passwordInput.value;
  if (email === "Shihab@gmail.com" || password === "shihab") {
    location.href = "dashboard.html";
  } else {
    alert("Hey! you are enter wrong email or password.");
  }
});
