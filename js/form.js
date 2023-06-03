// Importar las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAn5ft3WQReuUxd8-TYOCxhzGnEc11IFSw",
  authDomain: "trailerbrasil-ff859.firebaseapp.com",
  projectId: "trailerbrasil-ff859",
  storageBucket: "trailerbrasil-ff859.appspot.com",
  messagingSenderId: "41682364242",
  appId: "1:41682364242:web:434555c8df0a82b4febc8b",
  measurementId: "G-7G5WEN38LT"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Obtener referencia al formulario de registro
const registerForm = document.getElementById("registerForm");

// Manejar el evento de envío del formulario
registerForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const username = document.getElementById("username").value;
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validar que todos los campos estén completos
  if (username === '' || nombre === '' || correo === '' || password === '' || confirmPassword === '') {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Validar que las contraseñas coincidan
  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
    return;
  }

  // Registrar al usuario en Firebase
  register(correo, password);
});

// Función para registrar al usuario en Firebase
async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado: ", userCredential.user);
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
  } catch (e) {
    console.error("Error registrando al usuario: ", e);
  }
}
