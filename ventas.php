<?php
$productos = [
  ["nombre" => "Guitarra Clásica", "precio" => 1200, "imagen" => "imagen2.jpeg", "descuento" => 5],
  ["nombre" => "Guitarra Eléctrica", "precio" => 2200, "imagen" => "imagen1.jpg", "descuento" => 10],
  ["nombre" => "Guitarra Acústica", "precio" => 1800, "imagen" => "imagen4.jpg", "descuento" => 15]
];

$resultado_index = null;
$mensaje_resultado = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $producto = $_POST["producto"];
  $precio = (float) $_POST["precio"];
  $cantidad = (int) $_POST["cantidad"];
  $descuento = (float) $_POST["descuento"];
  $precio_con_descuento = $precio - ($precio * $descuento / 100);
  $total = $precio_con_descuento * $cantidad;
  $mensaje_resultado = "Has comprado $cantidad unidad(es) de '$producto'. Precio con $descuento% de descuento: <strong>\$$precio_con_descuento</strong><br>Total a pagar: <strong>\$$total MXN</strong>";

  foreach ($productos as $i => $p) {
    if ($p["nombre"] === $producto) {
      $resultado_index = $i;
      break;
    }
  }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tienda de Guitarras</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-image: url('fondo3.png');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      margin: 0;
      padding: 20px;
      text-align: center;
        color: #0a0a0a;
    }
    .producto {
      background: rgba(189, 93, 93, 0.6);
      display: inline-block;
      margin: 20px;
      padding: 20px;
      border-radius: 10px;
      width: 300px;
      vertical-align: top;
    }
    .producto img {
      width: 250px;
      height: auto;
    }
    input[type="number"] {
      width: 50px;
      text-align: center;
    }
    .boton {
      margin-top: 10px;
    }
    .mensaje {
      margin-top: 15px;
      font-size: 1em;
      background-color: rgba(255,255,255,0.85);
      color: #000;
      display: inline-block;
      padding: 10px 15px;
      border-radius: 8px;
    }
    .boton-regresar {
      margin-top: 40px;
      display: inline-block;
      padding: 10px 20px;
      background-color: #792929;
      color: white;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <h1>Catálogo de Guitarras con Descuento 🎸</h1>

  <?php foreach ($productos as $index => $p): 
    $precio_desc = $p["precio"] - ($p["precio"] * $p["descuento"] / 100);
  ?>
    <div class="producto">
      <h2><?= $p["nombre"] ?></h2>
      <img src="<?= $p["imagen"] ?>" alt="<?= $p["nombre"] ?>">
      <p>
        <strong>Precio original:</strong> $<?= $p["precio"] ?> MXN<br>
        <strong>Descuento:</strong> <?= $p["descuento"] ?>%<br>
        <strong>Precio final:</strong> $<?= number_format($precio_desc, 2) ?> MXN
      </p>
      <form method="POST">
        <label for="cantidad<?= $index ?>">Cantidad:</label>
        <input type="number" name="cantidad" id="cantidad<?= $index ?>" min="1" placeholder="Ej. 1" required>
        <input type="hidden" name="producto" value="<?= $p["nombre"] ?>">
        <input type="hidden" name="precio" value="<?= $p["precio"] ?>">
        <input type="hidden" name="descuento" value="<?= $p["descuento"] ?>">
        <div class="boton">
          <button type="submit">Comprar</button>
        </div>
      </form>

      <?php if ($resultado_index === $index): ?>
        <div class="mensaje">
          <?= $mensaje_resultado ?>
        </div>
      <?php endif; ?>
    </div>
  <?php endforeach; ?>

  <br>
  <a class="boton-regresar" href="index.php"> Regresar</a>

</body>
</html>