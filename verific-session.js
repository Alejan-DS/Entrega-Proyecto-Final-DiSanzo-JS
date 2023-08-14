// Verificar si hay una sesión iniciada al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const sesionIniciada = localStorage.getItem('username');
    if (sesionIniciada) {
      mostrarSesion(sesionIniciada);
    }
  });
  
  function mostrarSesion(username) {
    const loggedInMessage = document.querySelector('.logged-in-message');
    const logoutButton = document.querySelector('.cerrar-sesion');
  
    if (loggedInMessage) {
      loggedInMessage.textContent = "¡Sesión iniciada como " + username + "!";
    }
  
    if (logoutButton) {
      logoutButton.style.display = 'inline'; // Mostrar el botón de cerrar sesión
    }
  }
  
  // Función para cerrar sesión
  function cerrarSesion() {
    localStorage.removeItem('username');
    location.reload();
  }
  