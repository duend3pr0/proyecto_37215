


// Variables Globales
let carrito       = [];
let productos     = [{
    "id": 1,
    "nombre": "Marina",                
    "descripcion": "Inodoro de apoyo Marina blanco Ferrum",
    "precio": 8000,
    "stock": 30,
    "img": "marina.jpg",
    "tipo": "inodoro"
},
{
    "id": 2,
    "nombre": "Bari",
    
    "descripcion": "Inodoro de apoyo Bari blanco Ferrum",
    "precio": 8000,
    "stock": 30,
    "img": "bari.jpg",
     "tipo": "inodoro",          
     },

{
    "id": 3,
    "nombre": "Andina",
    
    "descripcion": "Inodoro de apoyo Andina blanco Ferrum",
    "precio": 8000,
    "stock": 30,
    "img": "andina.jpg",
    "tipo": "inodoro",
 },
{
    "id": 4,
    "nombre": "Trento",
    
    "descripcion": "Inodoro de apoyo Trento blanco Ferrum",
    "precio": 9000,
    "stock": 30,
    "img": "trento.jpg",
    "tipo": "inodoro",
    
},
{
    "id": 5,
    "nombre": "Varese",
    
    "descripcion": "Inodoro de apoyo Varese blanco Ferrum",
    "precio": 14000,
    "stock": 10,
    "img": "varese.jpg",
    "tipo": "inodoro",
    
},
{
    "id": 6,
    "nombre": "Veneto",
    
    "descripcion": "Inodoro de apoyo Veneto blanco Ferrum",
    "precio": 8000,
    "stock": 30,
    "img": "veneto.jpg",
    "tipo": "inodoro",
},
{
    "id": 7,
    "nombre": "Marina",
  
    "descripcion": "Bidet 3 agujeros Marina blanco Ferrum",
    "precio": 8000,
    "stock": 30,
    "img": "marina.jpg",
      "tipo": "bidet"
},
{
    "id": 8,
    "nombre": "Bari",
  
    "descripcion": "Bidet 3 agujeros Bari blanco Ferrum",
    "precio": 8000,
    "stock": 30,
    "img": "bari.jpg",
      "tipo": "bidet"
},
{
    "id": 9,
    "nombre": "Andina",
  
    "descripcion": "Bidet 3 agujeros Andina blanco Ferrum",
    "precio": 8000,
    "stock": 30,
    "img": "andina.jpg",
      "tipo": "bidet"
},
{
    "id": 10,
    "nombre": "Trento",
  
    "descripcion": "Bidet 3 agujeros Trento blanco Ferrum",
    "precio": 8000,
    "stock": 30,
    "img": "trento.jpg",
    "tipo": "bidet"
},
{
    "id": 11,
    "nombre": "Varese",
  
    "descripcion": "Bidet 3 agujeros Varese blanco Ferrum",
    "precio": 8000,
    "stock": 30,
    "img": "varese.jpg",
      "tipo": "bidet"
},
{
    "id": 12,
    "nombre": "Veneto",
  
    "descripcion": "Bidet 3 agujeros Veneto blanco Ferrum",
    "precio": 8000,
    "stock": 30,
    "img": "veneto.jpg",
    "tipo": "bidet"
},

];
productos.length

document.addEventListener('DOMContentLoaded',() =>{
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];        
})
}}
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