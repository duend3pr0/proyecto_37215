

// Variables Globales
let carrito  = new Array();
let productos = [];



let sistema;

document.addEventListener('DOMContentLoaded',() =>{
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];   
    sistema = new GestionarProductos();
    sistema.iniciar(); 
    

});



function addCarrito(id) {
    
    const prod = document.querySelector('producto'+id);
    let producto = new Producto (   id,
                                    prod.querySelector('p').textContent,
                                    prod.querySelector('.precio').textContent.substring(1,6),
                                    prod.querySelector('img').src
                                );


   
    sistema.addCart( producto );
}











