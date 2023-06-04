// Obtener referencia al formulario de registro
const registerForm = document.getElementById("registerForm");

// Manejar el evento de envío del formulario
registerForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const username = document.getElementById("username").value;
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validar que todos los campos estén completos
  if (username === '' || nombre === '' || fecha === '' || correo === '' || password === '' || confirmPassword === '') {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Validar que las contraseñas coincidan
  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
    return;
  }

  // Registrar al usuario en Firebase Authentication
  register(correo, password)
    .then(() => {
      // Agregar datos del usuario a Firestore
      addUserToFirestore(username, nombre, fecha, correo)
        .then(() => {
          console.log("Usuario registrado y datos guardados en Firestore");
          alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
        })
        .catch(error => {
          console.error("Error al guardar los datos del usuario en Firestore:", error);
        });
    })
    .catch(error => {
      console.error("Error registrando al usuario en Firebase Authentication:", error);
    });
});

// Función para registrar al usuario en Firebase Authentication
function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Función para agregar datos del usuario a Firestore
function addUserToFirestore(username, nombre, fecha, correo) {
  const userCollection = collection(db, "users");
  const userData = { username, nombre, fecha, correo };
  return addDoc(userCollection, userData);
}
