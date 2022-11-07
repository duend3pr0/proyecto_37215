

// Variables Globales
let carrito  = new Array();
let productos = new Array();


let ;










document.addEventListener('DOMContentLoaded',() =>{
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];        

});

cargarProductos( productos ) { 
        
    const divProductos    = document.querySelector('#productos');
    divProductos.innerHTML = '';

    if( productos.length === 0 ) {

        mostrarMsj('No se han encontrado productos para su búsqueda');
        return false;
    } 
    else {          

        productos.forEach( (producto) => {
                let prod = document.createElement('div');
                prod.classList.add("card");
                prod.innerHTML =  ` 
                <img src="./img/${producto.img}" class="card-img-top" alt="${producto.descripcion}">
                <div class="card-body">
                  <h5 class="card-title">${producto.nombre} </h5>
                  <p class="card-text">${producto.descripcion}</p>
                  <h3 class="precio">$${producto.precio}</h3>
                  <a href=":javascript:agregarAlCarrito(${producto.id})" class="btn btn-primary">Agregar al carrito</a>
                </div>`; 
            })
         }
}


         function mostrarMsj(msj){
            let divMsj = document.querySelector('#mensajeProd');
            divMsj.innerHTML= msj;


        }

    