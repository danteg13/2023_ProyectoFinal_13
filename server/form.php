<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtener los datos enviados por la solicitud POST
  $data = json_decode(file_get_contents('php://input'), true);

  // Validar los datos (opcional)
  if (empty($data['username']) || empty($data['nombre']) || empty($data['fecha']) || empty($data['correo']) || empty($data['password'])) {
    http_response_code(400); // Código de error 400 (Solicitud incorrecta)
    echo "Por favor, complete todos los campos.";
    exit();
  }

  // Guardar los datos en un archivo o base de datos (aquí se muestra un ejemplo de guardado en archivo)
  $file = 'server/usuarios.txt';
  $line = $data['username'] . ',' . $data['nombre'] . ',' . $data['fecha'] . ',' . $data['correo'] . ',' . $data['password'] . PHP_EOL;
  file_put_contents($file, $line, FILE_APPEND);

  // Enviar una respuesta de éxito al cliente
  http_response_code(200); // Código de éxito 200 (OK)
  echo "Registro exitoso. Puede iniciar sesión ahora.";
}
?>
