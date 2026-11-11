<?php
session_start();

if (!isset($_SESSION['dni'])) {
    header("Location: ../Paginashtmk/inicio.html");
    exit;
}

$servidor = "localhost";
$usuario  = "root";
$contraseña = "";
$base_datos = "eckos_univox";

$conexion = mysqli_connect($servidor, $usuario, $contraseña, $base_datos);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

$dni = (int) $_SESSION['dni'];

// Se borra de abajo hacia arriba por las claves foráneas
mysqli_query($conexion, "DELETE FROM servicios WHERE IDPedido IN (SELECT IDPedido FROM compras WHERE DNI = $dni)");
mysqli_query($conexion, "DELETE FROM compras WHERE DNI = $dni");
mysqli_query($conexion, "DELETE FROM usuarios WHERE DNI = $dni");

mysqli_close($conexion);

session_destroy();
header("Location: ../Paginashtmk/inicio.html");
exit;
?>