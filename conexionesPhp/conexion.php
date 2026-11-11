<?php
session_start();

$servidor = "localhost";
$usuario  = "root";
$contraseña = "";
$base_datos = "eckos_univox";

$conexion = mysqli_connect($servidor, $usuario, $contraseña, $base_datos);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

$nombre     = mysqli_real_escape_string($conexion, $_POST['nombre']);
$apellido   = mysqli_real_escape_string($conexion, $_POST['apellido']);
$dni        = mysqli_real_escape_string($conexion, $_POST['dni']);
$contrasena = mysqli_real_escape_string($conexion, $_POST['contrasena']);

$sql = "SELECT * FROM usuarios
        WHERE nombre = '$nombre' AND apellido = '$apellido' AND dni = '$dni' AND clave = '$contrasena'";

$resultado = mysqli_query($conexion, $sql);

if (mysqli_num_rows($resultado) == 1) {
    $_SESSION['dni'] = $dni;
    header("Location: ../Paginashtmk/inicio.html");
} else {
    header("Location: ../inicios.registro/inicio_sesion.html?error=1");
}

mysqli_close($conexion);
exit;
?>