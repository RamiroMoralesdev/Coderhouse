// Variables y constantes
const productosDisponibles = ["Manzana", "Pan", "Leche", "Huevos"];
let carrito = [];
let total = 0;

// Mostrar productos
function mostrarProductos() {
    console.log("Productos disponibles:");
    for (let i = 0; i < productosDisponibles.length; i++) {
        console.log((i + 1) + ". " + productosDisponibles[i]);
    }
}

// Agregar producto
function agregarProducto() {
    let producto = prompt("Ingrese el nombre del producto que desea comprar:" + "Los productos disponibles son: " + productosDisponibles);
    if (productosDisponibles.includes(producto)) {
        carrito.push(producto);
        total += 100; // Precio fijo 
        alert(producto + " agregado al carrito.");
    } else {
        alert("Producto no disponible.");
    }
}

// Mostrar resumen de compra
function mostrarResumen() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert("Has comprado:\n" + carrito.join(", ") + "\nTotal: $" + total);
        console.log("Detalle de la compra:", carrito, "Total: $" + total);
    }
}

// Ejecución del simulador
if (confirm("¿Desea iniciar el simulador de compras?")) {
    mostrarProductos();
    let seguirComprando = true;

    while (seguirComprando) {
        agregarProducto();
        seguirComprando = confirm("¿Desea agregar otro producto?");
    }

    mostrarResumen();
} else {
    alert("Simulador finalizado.");
}
