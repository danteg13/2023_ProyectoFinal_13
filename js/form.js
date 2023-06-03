import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAn5ft3WQReuUxd8-TYOCxhzGnEc11IFSw",
  authDomain: "trailerbrasil-ff859.firebaseapp.com",
  projectId: "trailerbrasil-ff859",
  storageBucket: "trailerbrasil-ff859.appspot.com",
  messagingSenderId: "41682364242",
  appId: "1:41682364242:web:434555c8df0a82b4febc8b",
  measurementId: "G-7G5WEN38LT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (username === '' || nombre === '' || correo === '' || password === '' || confirmPassword === '') {
    alert("Por favor, complete todos los campos.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
    return;
  }

  register(correo, password);
});

async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado: ", userCredential.user);
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
  } catch (e) {
    console.error("Error registrando al usuario: ", e);
  }
}
