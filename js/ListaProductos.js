
class GestionarProductos {

    iniciar() {
        
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado =>{
            productos = resultado.productos;
        })
       
      
            let inodoros = productos.filter((prod)=> prod.tipo == "inodoro");
            let bidets = productos.filter((prod)=> prod.tipo == "bidet");
            let depositos = productos.filter((prod)=> prod.tipo == "deposito");
            let marina = productos.filter((prod)=> prod.nombre == "Marina" );
            let bari = productos.filter((prod)=> prod.nombre == "Bari" );
            let andina = productos.filter((prod)=> prod.nombre == "Andina" );
            let trento = productos.filter((prod)=> prod.nombre == "Trento" );
            let varese = productos.filter((prod)=> prod.nombre == "Varese" );
            let veneto = productos.filter((prod)=> prod.nombre == "Veneto" );

        
            
            this.cargarProductos(inodoros);
            this.showCart();
            this.actCount();
                       
    }

    cargarProductos(productos){
        const divProductos = document.getElementById('productos');
        divProductos.innerHTML = "";
        
        if( productos.length  === 0 ) {

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
            carrito = articulos;  
                    

        })

            this.mensajeCarrito("Se acualizó la cantidad del producto");

    }
    else 
    {
        // Como no existe lo agrego
        carrito.push(infoProducto);
        this.mensajeCarrito("Producto agregado al carrito");

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

    mensajeCarrito(mensaje){
        Toastify({
            text: mensaje ,
            duration: "2000",
            gravity: "bottom"

        }).showToast();
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
              <p class="card-text texto__tarjeta ">${producto.descripcion}</p>
              <a href="javascript:borrarUnidad(${producto.id})" class="btn btn-primary boton__addCarritocanvas padd-card"><i class="fa-solid fa-square-minus fa-2x"></i></a>
              <h6 class="cantidad padd-card">${producto.cantidad}</h6>
              <a href="javascript:addCarrito(${producto.id})" class="btn btn-primary boton__addCarritocanvas padd-card"><i class="fa-solid fa-square-plus fa-2x"></i></a>
              <h6 class="precio padd-card">$${producto.precio}</h6>
                           
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

    Swal.fire({
        title: "Confirma eliminar producto?",
        showCancelButton: true,
        cancelButtonColor: "red",
        confirmButtonText: "Confirmar",
        cancelbuttonText: "Abortar eliminar producto"
    }).then( (respuesta) => {
        if(respuesta.isConfirmed){        
            carrito = carrito.filter( producto => producto.id != id);
            
            this.actualizarCarrito();
            this.mensajeCarrito("Producto eliminado");
    }
        })
    



    // let resp = confirm("Esta seguro de eliminar el producto ?")
    // if (resp)  {
    //     carrito = carrito.filter( producto => producto.id != id);
    //     this.actualizarCarrito();

    //     Swal.fire({
    //         position: 'center',
    //         icon: 'info',
    //         title: 'Producto eliminado del carrito exitosamente',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })
    // }            

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







