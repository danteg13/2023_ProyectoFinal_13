<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtener los datos enviados por la solicitud POST
  $data = json_decode(file_get_contents('php://input'), true);

  // Validar los datos (opcional)
  if (empty($data['email']) || empty($data['password'])) {
    http_response_code(400); // Código de error 400 (Solicitud incorrecta)
    echo "Por favor, complete todos los campos.";
    exit();
  }

  // Verificar las credenciales de inicio de sesión (aquí se muestra un ejemplo de verificación en un archivo)
  $file = 'usuarios.txt';
  $lines = file($file, FILE_IGNORE_NEW_LINES);
  foreach ($lines as $line) {
    $fields = explode(',', $line);
    if ($fields[2] === $data['email'] && $fields[3] === $data['password']) {
      http_response_code(200); // Código de éxito 200 (OK)
      echo "Inicio de sesión exitoso.";
      exit();
    }
  }

  // Si no se encontraron coincidencias, enviar una respuesta de error al cliente
  http_response_code(401); // Código de error 401 (No autorizado)
  echo "Credenciales inválidas. Por favor, inténtelo de nuevo.";
}
?>
