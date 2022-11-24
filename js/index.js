
// Variables Globales
let carrito  = new Array();
let productos = [];

const key_carrito = "carrito";

const url = './json/productos.json';
const vaciarCarrito = document.querySelector('#vaciarCarrito');
const activarFuncion = document.querySelector('#activarFuncion');

let sistema;

document.addEventListener('DOMContentLoaded',() =>{
    carrito = JSON.parse(localStorage.getItem(key_carrito)) || [];   
    sistema = new GestionarProductos();
    sistema.iniciar(); 
    sistema.showCart();
    

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

    } else if ( q.length < 2 || q.length == 0 ) {        
        //Muestro todo sino hay nada el buscador   
        
        sistema.mensajeAviso('Todos los productos en stock');
        sistema.cargarProductos( productos );
    } 

})

function vaciar_Carrito(){

    carrito = [];
    sistema.showCart();
    sistema.actualizarCarrito();
    sistema.actCount();
    sistema.saveCart();


}





function finalizarCompra(){

    if(carrito.length === 0){
        Swal.fire({
            title: "El carrito está vacío",
            text:"Compra algún producto para continuar",
            icon: "error",
            confirmButtonText: "Aceptar"

    })
}else
    Swal.fire({
        title: "Desea finalizar la compra?",
        showCancelButton: true,
        cancelButtonColor: "red",
        confirmButtonText: "Confirmar",        
        cancelbuttonText: "No, seguir comprando",
        
    }).then( (respuesta) => {
        if(respuesta.isConfirmed){        
            location.href = "./views/fcompra.html";
            procesarPedido();            
    }
        })

}


function procesarPedido() {
    carrito.forEach((prod) => {
      const listaCompra = document.querySelector("#lista-compra tbody");
      const { id, nombre, precio, img, cantidad } = prod;
      if (listaCompra) {
        const row = document.createElement("tr");
        row.innerHTML += `
                <td>
                <img class="img-fluid img-carrito" src="${img}"/>
                </td>
                <td>${nombre}</td>
              <td>${precio}</td>
              <td>${cantidad}</td>
              <td>${precio * cantidad}</td>
              `;
        listaCompra.appendChild(row);
      }
    });
    totalProceso.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }











