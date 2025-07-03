<?php
$descripcion = "\\m/ DESCRIPCIÓN \\m/";
$fotones = [
  [
    "id" => "info1",
    "texto" => "La guitarra eléctrica es un tipo de guitarra en la que, a diferencia de la guitarra española y la guitarra sonaja, su caja no hace resonancia",
    "imagen" => "imagen1.jpg",
    "alt" => "Imagen 1",
    "titulo" => "Fotón 1"
  ],
  [
    "id" => "info2",
    "texto" => "Una guitarra acústica es un tipo de guitarra en la que el sonido se produce por la vibración de las cuerdas",
    "imagen" => "imagen2.jpeg",
    "alt" => "Imagen 2",
    "titulo" => "Fotón 2"
  ],
  [
    "id" => "info3",
    "texto" => "Las guitarras acústicas tienen un tono más natural, mientras que las electroacústicas proporcionan una mayor potencia y amplificación.",
    "imagen" => "imagen3.jpg",
    "alt" => "Imagen 3",
    "titulo" => "Fotón 3"
  ]
];
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Descripción</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-image: url('fondo.jpg');
      background-size: cover;
      background-position: center;
      color: #0a0a0a;
    }
    h1 {
      margin-top: 30px;
    }
    .radio-container {
      margin: 20px;
      display: flex;
      justify-content: center;
      gap: 20px;
    }
    .info {
      display: none;
      margin-top: 15px;
    }
    img {
      max-width: 200px;
      height: auto;
      margin-top: 10px;
    }
  </style>
  <script>
    function mostrarInfo(id) {
      const infos = document.querySelectorAll('.info');
      infos.forEach(info => info.style.display = 'none');
      document.getElementById(id).style.display = 'block';
    }
  </script>
</head>
<body>

  <h1><?= $descripcion ?></h1>

  <div class="radio-container">
    <?php foreach ($fotones as $f): ?>
      <label><input type="radio" name="fotones" onclick="mostrarInfo('<?= $f['id'] ?>')"> <?= $f['titulo'] ?></label>
    <?php endforeach; ?>
  </div>

  <?php foreach ($fotones as $f): ?>
    <div id="<?= $f['id'] ?>" class="info">
      <p><?= $f['texto'] ?></p>
      <img src="<?= $f['imagen'] ?>" alt="<?= $f['alt'] ?>">
    </div>
  <?php endforeach; ?>

  <a href="index.php"><button>Regresar</button></a>

</body>
</html>