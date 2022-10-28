


// Variables Globales
let carrito       = [];
let productos     = [];



// Evento que se dispara cuadno se carga la pagina
document.addEventListener('DOMContentLoaded', () => {

    // Cargar el carrito con el localstorage, si no hay nada asignarle un array vacio
    carrito = JSON.parse( localStorage.getItem('carrito') ) || [];

    productos = new ListaProductos();
    productos.iniciar();
})


let ofertas = document.getElementById("ofertas");


