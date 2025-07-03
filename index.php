<?php
// Puedes usar esto para definir el título o futuras rutas dinámicamente
$titulo = "GUITARRAS";
$menu = [
  ["label" => "Descripción    ", "link" => "descripcion.php"],
  ["label" => "Recomendaciones", "link" => "recomen.php"],
  ["label" => "Ventas", "link" => "ventas.php"],
  ["label" => "Video", "link" => "video.php"]
];
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Menú</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #792929;
      margin: 0;
      padding: 0;
    }
    h1 {
      margin-top: 30px;
      text-align: center;
    }
    .contenedor {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      gap: 30px;
    }
    .menu {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
    .menu button {
      padding: 20px 30px;
      font-size: 19px;
    }
    .imagen img {
      width: 410px;
      height: auto;
    }
  </style>
</head>
<body>

  <h1><?php echo $titulo; ?></h1>

  <div class="contenedor">
    <div class="menu">
      <?php foreach ($menu as $item): ?>
        <a href="<?php echo $item['link']; ?>">
          <button><?php echo $item['label']; ?></button>
        </a>
      <?php endforeach; ?>
    </div>
    <div class="imagen">
      <img src="guitarra.png" alt="guitarra">
    </div>
  </div>

</body>
</html>