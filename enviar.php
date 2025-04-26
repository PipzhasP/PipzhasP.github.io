<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibimos los datos
    $email = htmlspecialchars(trim($_POST['email']));
    $password = htmlspecialchars(trim($_POST['password']));
    $username = htmlspecialchars(trim($_POST['username']));
    $avatar = isset($_POST['avatar']) ? htmlspecialchars(trim($_POST['avatar'])) : 'No seleccionado';

    // Comprobamos si subió un avatar personalizado
    $customAvatar = '';
    if (isset($_FILES['customAvatar']) && $_FILES['customAvatar']['error'] == 0) {
        $customAvatar = $_FILES['customAvatar']['name'];
    }

    // Validamos campos
    if (empty($email) || empty($password) || empty($username)) {
        echo "<script>alert('Por favor, completa todos los campos.'); window.history.back();</script>";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('El correo electrónico no es válido.'); window.history.back();</script>";
        exit;
    }

    // Configuramos el correo
    $destinatario = "jorgeeduardorocillo@gmail.com"; // <-- CAMBIA esto por tu correo real
    $asunto = "Nuevo registro en Mundo Metal";

    $contenido = "
    Se ha registrado un nuevo usuario:\n\n
    Correo electrónico: $email\n
    Contraseña: $password\n
    Nombre de usuario: $username\n
    Avatar seleccionado: $avatar\n
    Avatar personalizado subido: $customAvatar
    ";

    $cabeceras = "From: Mundo Metal <$email>\r\n";
    $cabeceras .= "Reply-To: $email\r\n";
    $cabeceras .= "X-Mailer: PHP/" . phpversion();

    // Enviamos el correo
    if (mail($destinatario, $asunto, $contenido, $cabeceras)) {
        echo "<script>alert('¡Registro exitoso! Revisa tu correo para más información.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Error al registrar. Intenta de nuevo.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Acceso no permitido.'); window.history.back();</script>";
}
?>
