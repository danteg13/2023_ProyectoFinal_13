

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAn5ft3WQReuUxd8-TYOCxhzGnEc11IFSw",
  authDomain: "trailerbrasil-ff859.firebaseapp.com",
  projectId: "trailerbrasil-ff859",
  storageBucket: "trailerbrasil-ff859.appspot.com",
  messagingSenderId: "41682364242",
  appId: "1:41682364242:web:434555c8df0a82b4febc8b",
  measurementId: "G-7G5WEN38LT"
};

// Inicializar la app de Firebase
firebase.initializeApp(firebaseConfig);

// Obtener referencia al objeto de autenticación de Firebase
var auth = firebase.auth();

// Función para manejar el evento de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === '' || password === '') {
    alert("Por favor, complete todos los campos.");
    return;
  }

  login(username, password);
});

// Función para iniciar sesión en Firebase
function login(username, password) {
  auth.signInWithEmailAndPassword(username, password)
    .then(function(userCredential) {
      // Inicio de sesión exitoso, redirigir al usuario a la página principal
      window.location.href = "index.html";
    })
    .catch(function(error) {
      // Error de inicio de sesión, mostrar mensaje de error
      alert("Error al iniciar sesión. Por favor, verifique sus credenciales.");
      console.error("Error de inicio de sesión: ", error);
    });
}
