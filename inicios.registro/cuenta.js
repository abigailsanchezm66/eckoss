// Aviso si el inicio de sesión falló (conexion.php redirige con ?error=1)
var parametros = new URLSearchParams(window.location.search);
if (parametros.get("error") == "1") {
  alert("Datos incorrectos. Revisá nombre, apellido, DNI y contraseña.");
}

// Preguntar al servidor si hay una sesión iniciada
fetch("../conexionesPhp/estado.php")
  .then(function (respuesta) { return respuesta.text(); })
  .then(function (estado) {
    if (estado.trim() != "1") {
      return;
    }

    // Si ya inició sesión, no puede volver a registro ni a inicio de sesión
    var pagina = window.location.pathname;
    if (pagina.indexOf("registro.html") != -1 || pagina.indexOf("inicio_sesion.html") != -1) {
      window.location.href = "../Paginashtmk/inicio.html";
      return;
    }

    // Ocultar "Inicio De Sesion" y "Registro" del menú
    var enlaces = document.querySelectorAll('a[href$="registro.html"], a[href$="inicio_sesion.html"]');
    for (var i = 0; i < enlaces.length; i++) {
      enlaces[i].style.display = "none";
    }

    // Agregar "Cerrar sesión" y "Borrar cuenta" al menú
    var nav = document.querySelector("nav");

    var salir = document.createElement("a");
    salir.href = "../conexionesPhp/cerrar_sesion.php";
    salir.textContent = "Cerrar sesión";
    nav.appendChild(salir);

    var borrar = document.createElement("a");
    borrar.href = "../conexionesPhp/baja.php";
    borrar.textContent = "Borrar cuenta";
    borrar.addEventListener("click", function (e) {
      if (!confirm("¿Seguro que querés borrar tu cuenta? No se puede deshacer.")) {
        e.preventDefault();
      }
    });
    nav.appendChild(borrar);
  });