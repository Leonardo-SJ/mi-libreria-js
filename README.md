# mi-libreria-js
MI libreria ayuda en la traduccion de la pagina web en la que se implemente
Esta libreria de JavaScript tiene como objetivo traducir dinámicamente el contenido textual de una página web desde el español hacia otro idioma, utilizando la API de MyMemory.
Instalación
Se debera descargar de este reporitorio
<script src="libreria.js"></script>

Uso
Implementacion con HTML
'''HTML
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Multilenguaje</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

  <div class="container d-flex flex-column justify-content-center align-items-center min-vh-100">

    <!-- Selector de idioma -->
    <div class="mb-4 text-center w-100">
      <label for="idioma" class="form-label fw-bold">🌐 Idioma</label>
      <select class="form-select w-auto mx-auto" id="idioma">
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="ru">Ruso</option>
        <option value="zh">Chino</option>
        <option value="ja">Japonés</option>
        <option value="pt">Portugués</option>
        <option value="de">Alemán</option>
        <option value="fr">Francés</option>
      </select>
    </div>

    <!-- Tarjeta de login -->
    <div class="card shadow p-4" style="max-width: 400px; width: 100%;">
      <h2 class="text-center mb-4">Iniciar sesión</h2>

      <form>
        <div class="mb-3">
          <label for="usuario" class="form-label">Correo</label>
          <input type="email" class="form-control" id="usuario" name="usuario">
        </div>

        <div class="mb-3">
          <label for="contrasena" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="contrasena" name="contrasena">
        </div>

        <div class="d-grid mb-3">
          <button type="submit" class="btn btn-primary ">Entrar</button>
        </div>

        <p class="text-center mb-1">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </p>
        <p class="text-center text-muted">¿No tienes una cuenta? Regístrate</p>
      </form>
    </div>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

  <!-- Tu script de traducción -->
  <script src="Libreria.js"></script>
</body>
</html>

![image](https://github.com/user-attachments/assets/e36ac6e4-3434-4ca7-9c66-197a3356d75b)

![image](https://github.com/user-attachments/assets/e2f77ef6-2eed-4d95-b8b4-010c4c118765)

![image](https://github.com/user-attachments/assets/b2d65557-4b3d-4aa4-a74b-4a9706a12a19)

![image](https://github.com/user-attachments/assets/f14e5b7a-7f5c-490e-a75b-48a3537f219d)

![image](https://github.com/user-attachments/assets/707c6c6e-4a37-4ffe-9a2a-ccf4656b3e8c)

![image](https://github.com/user-attachments/assets/4570273e-6f03-4d17-a26b-5df24eae3258)

