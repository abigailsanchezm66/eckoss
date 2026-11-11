document.addEventListener("DOMContentLoaded", function () {
    fetch("../conexionesPhp/estado.php")
        .then(res => res.text())
        .then(resul => {
            var btns = document.querySelectorAll(".btn-contratar");
            var sesionActiva = resul.trim();

            for (var i = 0; i < btns.length; i++) {
                if (sesionActiva === "1") {
                    btns[i].textContent = "Comprar pack";
                    
                     btns[i].onclick = function () {
                  var carrito = JSON.parse(localStorage.getItem("cart")) || [];
              carrito.push({
           title: this.dataset.title,
        price: parseFloat(this.dataset.price)
              });
              localStorage.setItem("cart", JSON.stringify(carrito));

    window.location.href = "../carrito/carritoo.html";
};
                } else {
                    btns[i].textContent = "🔒 Inicia sesión para contratar";
                    
                    btns[i].onclick = function () {
                        window.location.href = "../inicios.registro/inicio_sesion.html";
                    };
                }
            }
        });
});