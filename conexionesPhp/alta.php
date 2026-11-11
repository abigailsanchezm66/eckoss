<?php
$servidor = "localhost";
$usuario  = "root";
$contraseña = "";
$base_datos = "eckos_univox"; 

$conexion = mysqli_connect($servidor, $usuario, $contraseña, $base_datos);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

$nombre   = $_POST['nombre'];
$apellido = $_POST['apellido'];
$dni      = $_POST['dni'];
$email    = $_POST['email'];
$clave    = $_POST['clave']; 


$sql = "INSERT INTO usuarios (nombre, apellido, dni, email, clave) 
        VALUES ('$nombre', '$apellido', '$dni', '$email', '$clave')";

if (mysqli_query($conexion, $sql)) {
    echo "<script>alert('Registro exitoso'); window.location='../Paginashtmk/inicio.html';</script>";
} else {
    echo "<script>alert('Ese DNI o email ya está registrado'); history.back();</script>";
}




mysqli_close($conexion);
?>