

function togglePassword(iconElement) {
    const passwordInput = iconElement.previousElementSibling;
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      iconElement.classList.remove("fa-eye");
      iconElement.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      iconElement.classList.remove("fa-eye-slash");
      iconElement.classList.add("fa-eye");
    }
  }
  