const Button = document.querySelector("#crear");
const tablaBody = document.querySelector("#tabla-body");

Button.addEventListener("click", () => {
    const Producto = document.querySelector("#product").value.trim();
    const Cantidad = parseInt(document.querySelector("#cantidad").value.trim());

    if (Producto === "" || isNaN(Cantidad) || Cantidad <= 0) {
        alert("Por favor, ingrese un producto válido y una cantidad mayor a 0.");
        return;
    }

    let productoExiste = false;
    const filas = tablaBody.querySelectorAll("tr");

    filas.forEach(fila => {
        const celdaProducto = fila.querySelector("td:first-child");
        const celdaCantidad = fila.querySelector("td:last-child");

        if (celdaProducto.textContent === Producto) {
            const nuevaCantidad = parseInt(celdaCantidad.textContent) + Cantidad;
            celdaCantidad.textContent = nuevaCantidad;
            productoExiste = true;
        }
    });

    if (!productoExiste) {
        
        const nuevaFila = document.createElement("tr");

        const celdaProducto = document.createElement("td");
        celdaProducto.textContent = Producto;

        const celdaCantidad = document.createElement("td");
        celdaCantidad.textContent = Cantidad;

        nuevaFila.appendChild(celdaProducto);
        nuevaFila.appendChild(celdaCantidad);

        tablaBody.appendChild(nuevaFila);
    }

   
    document.querySelector("#product").value = "";
    document.querySelector("#cantidad").value = "";
});
