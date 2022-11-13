

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
    
    const prod = document.querySelector('#producto'+id);
    let producto = new Productos (id, prod.querySelector('h5').textContent , prod.querySelector('p').textContent, prod.querySelector('h3'), prod.querySelector('img').src); 
    


   
    sistema.addCart(producto);
}











