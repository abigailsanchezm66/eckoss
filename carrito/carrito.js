document.addEventListener("DOMContentLoaded", () =>
    {
    const carritoItemsStorage = JSON.parse(localStorage.getItem("cart")) || [];
    const carritoTableBody = document.getElementById("carrito-items");
    const totalgeneral = document.getElementById("total");
    let total = 0;
    carritoItemsStorage.forEach(item =>
    {
        const row = document.createElement('tr');
        const nombreCelda = document.createElement('td');
        nombreCelda.textContent = item.title;
        row.appendChild(nombreCelda);

        const precioCelda = document.createElement('td');
        precioCelda.textContent = `$${item.price}`;
        row.appendChild(precioCelda);

        const cantidadCelda = document.createElement('td');
        cantidadCelda.textContent = 1;
        row.appendChild(cantidadCelda);

        const subtotal = item.price;
        const subtotalCelda = document.createElement('td');
        subtotalCelda.textContent = `$${subtotal}`;
        row.appendChild(subtotalCelda);

        carritoTableBody.appendChild(row);
        total += subtotal;
    });
    totalgeneral.textContent = total.toFixed(2);

    document.getElementById('limpiar-carrito').addEventListener('click', () =>
    {
        localStorage.removeItem('cart');
        window.location.href = '../Paginashtmk/inicio.html';
    });


    document.getElementById('finalizar-compra').addEventListener('click', () =>
    {
        Swal.fire({
            title: 'Compra Realizada',
            text: 'Gracias por tu compra! N° de referencia: #0001',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        localStorage.removeItem('cart');

        setTimeout(() => {
        window.location.href = '../Paginashtmk/inicio.html';
        }, 4000);
    });
});