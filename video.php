<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Video con fondo</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-image: url('fon4.jpg');
      background-size: cover;
      background-position: center;
      font-family: Arial, sans-serif;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
    }
    .video-container {
      background-color: rgba(0, 0, 0, 0.6);
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 15px #000;
      text-align: center;
    }
    video {
      width: 70%; /* Ahora es más pequeño */
      height: auto;
      border-radius: 10px;
    }
    .btn-regresar {
      margin-top: 15px;
      padding: 10px 20px;
      background-color: #00aaff;
      color: white;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      font-size: 16px;
      transition: background-color 0.3s ease;
      display: inline-block;
    }
    .btn-regresar:hover {
      background-color: #0088cc;
    }
  </style>
</head>
<body>
  <div class="video-container">
    <video controls>
      <source src="854923-hd_1920_1080_25fps.mp4" type="video/mp4">
      Tu navegador no soporta el video.
    </video>
    <a class="btn-regresar" href="index.php">← Regresar</a>
  </div>
</body>
</html>