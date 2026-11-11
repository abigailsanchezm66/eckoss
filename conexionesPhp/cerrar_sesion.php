<?php
session_start();
session_destroy();
header("Location: ../Paginashtmk/inicio.html");
exit;
?>