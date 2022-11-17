

// Variables Globales
let carrito  = new Array();
let productos = [];

const key_carrito = "carrito";


let sistema;

document.addEventListener('DOMContentLoaded',() =>{
    carrito = JSON.parse(localStorage.getItem(key_carrito)) || [];   
    sistema = new GestionarProductos();
    sistema.iniciar(); 
    

});



function addCarrito(id) {
    
    const prod = document.querySelector('#producto'+id);
    let producto = new Productos (id, prod.querySelector('h5').textContent , prod.querySelector('p').textContent, parseInt(prod.querySelector('h6').textContent), prod.querySelector('img').src); 

   
    sistema.addCart(producto);
}

// Eliminar un articulo del carrito
function agregarUnidad( id ) {   

    sistema.addArt(id);
}

function borrarUnidad( id ) {   

    sistema.deleteArt(id);
}

// Eventos de tecla para buscador
document.querySelector('#buscar').addEventListener('keyup', () => {

    let q = document.querySelector('#buscar').value;

    //Empezamos a buscar solo cuadno hay se hayan tipeado mas 2 letras o mas
    if( q.length >= 2 ) { 

        sistema.mensajeAviso(`Resultados para: ${q}`);
        sistema.buscar( q );        

    } else if ( q.length < 2 ) {
        
        //Muestro todo sino hay nada el buscador   
        
        sistema.mensajeAviso('Todos los productos en stock');
        sistema.cargarProductos( productos );
    } 

})











