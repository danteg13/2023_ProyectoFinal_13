var loginAttempts = 0;

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  if (username == "user" && password == "pass") {
    window.location.href = "index.html";
  } else {
    loginAttempts++;
    if (loginAttempts >= 3) {
      alert("Has introducido el username o contraseña incorrecto 3 veces. Vuelva a intentarlo dentro de algunos minutos.");
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.querySelector('input[type="submit"]').disabled = true;
    } else {
      alert("Usuario o contraseña incorrectos. Por favor vuelva a intentarlo.");
    }
  }
});
