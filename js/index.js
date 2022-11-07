

// Variables Globales
let carrito  = new Array();
let productos = [];



let sistema;

document.addEventListener('DOMContentLoaded',() =>{
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];   
    sistema = new GestionarProductos();
    sistema.iniciar(); 
    

});













