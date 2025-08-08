document.getElementById("btnAceptarRegistro").addEventListener("click", function () {
  setTimeout(function () {
      document.getElementById("login").click();

      // Solo si es responsive (pantalla pequeña)
      if (window.innerWidth <= 768) {
          const textSwitch = document.getElementById("textSwitch");
          const container = document.getElementById("container");
          const toggleSwitch = document.getElementById("toggleSwitch");

          toggleSwitch.checked = false; // Aquí cambiamos el estado del switch
          textSwitch.textContent = 'Registrarse';
          container.classList.remove("active");
      }
  }, 300);
  
});
document.getElementById("btnAceptarLogin").addEventListener("click", function () {
  
  setTimeout(function () {
    
    window.location.href = "index.html";
  }, 300);})