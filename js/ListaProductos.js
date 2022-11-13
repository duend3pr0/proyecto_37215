
class GestionarProductos {

    iniciar() {       
       
       productos = [ 
            {
                "id": 1,
                "nombre": "Marina",                
                "descripcion": "Inodoro de apoyo Marina blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "inodmarina.jpg",
                "tipo": "inodoro"
            },
            {
                "id": 2,
                "nombre": "Bari",                
                "descripcion": "Inodoro de apoyo Bari blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "inodbari.jpg",
                 "tipo": "inodoro",          
                 },

            {
                "id": 3,
                "nombre": "Andina",
                
                "descripcion": "Inodoro de apoyo Andina blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "inodandina.jpg",
                "tipo": "inodoro",
             },
            {
                "id": 4,
                "nombre": "Trento",
                
                "descripcion": "Inodoro de apoyo Trento blanco Ferrum",
                "precio": 9000,
                "stock": 30,
                "img": "inodtrento.jpg",
                "tipo": "inodoro",
                
            },
            {
                "id": 5,
                "nombre": "Varese",
                
                "descripcion": "Inodoro de apoyo Varese blanco Ferrum",
                "precio": 14000,
                "stock": 10,
                "img": "inodvarese.jpg",
                "tipo": "inodoro",
                
            },
            {
                "id": 6,
                "nombre": "Veneto",
                
                "descripcion": "Inodoro de apoyo Veneto blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "inodveneto.jpg",
                "tipo": "inodoro",
            },          
                {
                "id": 7,
                "nombre": "Marina",                
                "descripcion": "Bidet 3 agujeros Marina blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "bidmarina.jpg",
                "tipo": "bidet"
            },
            {
                "id": 8,
                "nombre": "Bari",
                
                "descripcion": "Bidet 3 agujeros Bari blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "bidbari.jpg",
                 "tipo": "bidet",          
                 },

            {
                "id": 9,
                "nombre": "Andina",
                
                "descripcion": "Bidet 3 agujeros Andina blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "bidandina.jpg",
                "tipo": "bidet",
             },
            {
                "id": 10,
                "nombre": "Trento",
                
                "descripcion": "Bidet 3 agujeros Trento blanco Ferrum",
                "precio": 9000,
                "stock": 30,
                "img": "bidtrento.jpg",
                "tipo": "bidet",
                
            },
            {
                "id": 11,
                "nombre": "Varese",
                
                "descripcion": "Bidet 3 agujeros Varese blanco Ferrum",
                "precio": 14000,
                "stock": 10,
                "img": "bidvarese.jpg",
                "tipo": "bidet",
                
            },
            {
                "id": 12,
                "nombre": "Veneto",
                
                "descripcion": "Bidet 3 agujeros Veneto blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "bidveneto.jpg",
                "tipo": "bidet",
            },
            {
                "id": 13,
                "nombre": "Marina",                
                "descripcion": "Depósito de apoyo Marina blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "depomarina.jpg",
                "tipo": "deposito"
            },
            {
                "id": 14,
                "nombre": "Bari",
                
                "descripcion": "Depósito de apoyo Bari blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "depobari.jpg",
                 "tipo": "deposito"
                 },

            {
                "id": 15,
                "nombre": "Andina",
                
                "descripcion": "Depósito de apoyo Andina blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "depoandina.jpg",
                "tipo": "deposito",
             },
            {
                "id": 16,
                "nombre": "Trento",
                
                "descripcion": "Depósito de apoyo Trento blanco Ferrum",
                "precio": 9000,
                "stock": 30,
                "img": "depotrento.jpg",
                "tipo": "deposito",
                
            },
            {
                "id": 17,
                "nombre": "Varese",
                
                "descripcion": "Depósito de apoyo Varese blanco Ferrum",
                "precio": 14000,
                "stock": 10,
                "img": "depovarese.jpg",
                "tipo": "deposito",
                
            },
            {
                "id": 18,
                "nombre": "Veneto",
                
                "descripcion": "Depósito de apoyo Veneto blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "depoveneto.jpg",
                "tipo": "deposito",
            },]
            let inodoros = productos.filter((prod)=> prod.tipo == "inodoro");
            let bidets = productos.filter((prod)=> prod.tipo == "bidet");
            let depositos = productos.filter((prod)=> prod.tipo == "deposito");
            
            this.cargarProductos(inodoros);
            this.showCart();
            this.actCount();
            
    }

    
    cargarProductos(productos){
        const divProductos = document.getElementById('productos')
        divProductos.innerHTML = "";

        if( productos.length === 0 ) {

            this.mensajeAviso('No se han encontrado productos para su búsqueda');
            return false;
        } 
        else {          




        divProductos.classList.add('row','gap-4');
            productos.forEach((producto) => {
            let prod = document.createElement('div');
            prod.classList.add('card','tarjeta');
            prod.setAttribute('style','width: 18rem')
            prod.setAttribute('id','producto'+producto.id);
            prod.innerHTML = `
            <img src="./img/${producto.img}" class="card-img-top img__card" alt="Inodoro de la card ">
            <div class="card-body cuerpo__card">
              <h5 class="card-title cuerpo__titulo">${producto.nombre} </h5>
              <p class="card-text texto__tarjeta">${producto.descripcion}</p>
              <h6 class="precio">${producto.precio}</h6>
              <a href="javascript:addCarrito(${producto.id})" class="btn btn-primary boton__addCarrito">Agregar al carrito</a>
            </div>         
            
            `
            divProductos.appendChild(prod);


            
        });

    
    }
}



    buscar( q ) { 


    let resultado = productos.filter( producto => producto.nombre.toLowerCase().includes( q.toLowerCase() ) || producto.descripcion.toLowerCase().includes( q.toLowerCase() ) || producto.tipo.toLowerCase().includes( q.toLowerCase() ));      
    this.cargarProductos( resultado );                   
}




addCart( infoProducto ) {
        
        
    const existe = carrito.some( producto => producto.id === infoProducto.id );
    
    if(existe) 
    {
        
        const articulos = carrito.map( producto => {

            if(producto.id === infoProducto.id)
            {
                producto.cantidad++;
                return producto;
            }
            else
            {
                return producto;
            }

                    

        })

            alert("Se actualizo la cantidad del producto");

    }
    else 
    {
        // Como no existe lo agrego
        carrito.push(infoProducto);
        alert("Se agrego el producto exitosamente");

    }

    this.actualizarCarrito();
    }



    contarProductos() { 

        let contadorProductos = 0;

        carrito.forEach(( producto ) => {

            contadorProductos = contadorProductos + parseInt(producto.cantidad);
        })

        return contadorProductos;
    }





    actualizarCarrito() {

        
        this.actCount();

        
        this.showCart();

        
        this.saveCart();
    }



    // Actualizar contador carrito
    actCount() { 

        let totalArticulos = this.contarProductos();

        let countCarrito = document.querySelector('#badgeCarrito');

        // Actualizar contador del carrito
        countCarrito.innerHTML = totalArticulos;

    }




     // Actualizar detalle del carrito
     showCart() { 
        

        let divCart = document.querySelector('#detailCart');

        divCart.innerHTML = '';

        let total = 0;

        if (carrito.length == 0){
            divCart.innerHTML = "No hay productos en la lista";
        } else{
       

        carrito.forEach( ( producto ) => {        

             

            const row = document.createElement('div');
            row.classList.add('row');
            
            total = total + parseInt(producto.precio);
                        row.innerHTML =`
                
            <div class="rowCarrito">
            <img src="${producto.img}" class="card-img-top img__card imgCarrito" alt="Inodoro de la card ">
            <div class="card-body cuerpo__card cardCarritoo">
              <p class="card-text texto__tarjeta">${producto.descripcion}</p>
              <h6 class="cantidad">${producto.cantidad}</h6>
              <h6 class="precio">$${producto.precio}</h6>
             
              
              <a href="javascript:eliminar(${producto.id})" class="btn btn-primary boton__addCarrito"><i class="fa-solid fa-square-minus fa-2x"></i></a>
            </div>
           

            </div>
            `;

            
            divCart.appendChild(row);

        })
    }

        let totalArt = document.createElement('div');
        totalArt.classList.add('totalContainer');
        
        totalArt.innerHTML = `   <div class="total">
                                    Total a pagar
                                 </div>
                                <div class="precioFinal">
                                    $${total}
                                </div>`;

        // Agrega el HTML del carrito en el tbody
            divCart.appendChild(totalArt);
             }





// A partir de un id se elimina el producto
deleteArt(id) { 

    let resp = confirm("Esta seguro de eliminar el producto ?")
    if (resp)  {
        carrito = carrito.filter( producto => producto.id != id);
        this.actualizarCarrito();

        alert("El articulo fue eliminado del carrito");

    }            

}





              // Guardar en Storage
    saveCart() {     
        localStorage.setItem('carrito', JSON.stringify( carrito ));        
    }

    //Muestra un detalle de lo mostrado en pantalla
    mensajeAviso( msg ) { 
        const mensajeProd = document.querySelector('#mensajeProd');
        mensajeProd.innerHTML = msg;
    }







}