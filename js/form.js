document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Validar que los campos no estén vacíos
    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
      alert("Por favor, complete todos los campos.");
      return;
    }
  
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
      return;
    }
  
    // Aquí puedes realizar el registro del usuario
    // Puedes enviar los datos a un servidor, almacenarlos en una base de datos, etc.
  
    // Ejemplo de mensaje de registro exitoso
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
  
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "login.html";
  });
  