<!-- archivo: recomendaciones.php -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Recomendaciones de Guitarras</title>
    <style>
        body {
            margin: 0;
            background-image: url('fondo2.jpg');
            background-size: cover;
            background-position: center;
            font-family: Arial, sans-serif;
            color: white;
            text-align: center;
        }
        .contenido {
            padding: 40px;
            background-color: rgba(0, 0, 0, 0.5);
            margin: 50px auto;
            width: 70%;
            border-radius: 12px;
        }
        img {
            width: 300px;
            border-radius: 10px;
        }
        button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
        }
        textarea {
            width: 90%;
            height: 120px;
            margin: 20px auto;
            display: block;
            border-radius: 8px;
            padding: 10px;
            font-family: monospace;
        }
    </style>
</head>
<body>
    <div class="contenido">
        <h2>🎸 Recomendaciones de Guitarras</h2>
        <img src="guitarra.png" alt="Guitarra"><br><br>

        <ul style="list-style: none; padding: 0;">
            <li>Fender Stratocaster – Perfecta para rock y blues</li>
            <li>Gibson Les Paul – Tono potente, ideal para hard rock</li>
            <li>Yamaha Pacifica – Muy buena para principiantes</li>
            <li>Ibanez RG – Ideal para metal y solos rápidos</li>
            <li>Martin D-28 – Acústica con gran resonancia</li>
        </ul>

        <form method="post">
            <textarea name="recomendacion" placeholder="Escribe tu recomendación aquí..."></textarea>
            <button type="submit" name="guardar">Tus recomendaciones</button>
            <button type="submit" name="mostrar">Mostrar</button>
            <button type="submit" name="regresar">Regresar</button>
        </form>

        <?php
        $archivo = "recomendaciones.txt";

        if (isset($_POST["guardar"])) {
            $texto = trim($_POST["recomendacion"]);
            if (!empty($texto)) {
                file_put_contents($archivo, $texto . PHP_EOL, FILE_APPEND);
                header("Content-Type: text/plain");
                header("Content-Disposition: attachment; filename=recomendaciones.txt");
                readfile($archivo);
                exit;
            } else {
                echo "<p>⚠️ Por favor, escribe algo antes de guardar.</p>";
            }
        }

        if (isset($_POST["mostrar"])) {
            if (file_exists($archivo)) {
                header("Content-Type: text/plain");
                header("Content-Disposition: attachment; filename=recomendaciones.txt");
                readfile($archivo);
                exit;
            } else {
                echo "<p>⚠️ Aún no hay nada guardado en el bloc.</p>";
            }
        }

        if (isset($_POST["regresar"])) {
            header("Location: index.php");
            exit;
        }
        ?>
    </div>
</body>
</html>