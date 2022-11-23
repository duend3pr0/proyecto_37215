
class GestionarProductos {

    iniciar() {
        
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado =>{
            productos = resultado.productos;
            
            
            let marina = productos.filter( prod => prod.linea == "Marina" );
            let andina = productos.filter( prod => prod.linea == "Andina" );
            let bari = productos.filter( prod => prod.linea == "Bari" );
            let trento = productos.filter( prod => prod.linea == "Trento" );
            let veneto = productos.filter( prod => prod.linea == "Veneto" );
            let varese = productos.filter( prod => prod.linea == "Varese" );




            this.cargarLineas(veneto);
            
            this.cargarProductos(productos);
            this.showCart();
            this.actCount();
            
            
        })     
                    
                       
    }


    cargarLineas(linea){
        const divLineas = document.getElementById('lineas');
        divLineas.innerHTML = "";
                       
        if(linea.length === 0){
            divLineas.innerHTML= "No hay productos en la línea elegida";
        }else{
                divLineas.classList.add('div__secondary')

                linea.forEach((producto)=>{
                 const {id, linea, descripcion,precio, img,stock,cantidad} = producto;   
                let prod = document.createElement('div');
                prod.classList.add('card','tarjeta','tarjeta__premium');
                prod.setAttribute('style','width: 28rem')
                prod.setAttribute('id','producto'+producto.id);
                prod.innerHTML = `
                <img src="./img/${img}" class="card-img-top img__card" alt="Inodoro de la card ">
                <div class="card-body cuerpo__card cuerpo__premium">
                  <h5 class="card-title cuerpo__titulo titulo__premium">${linea} </h5>
                  <p class="card-text texto__tarjeta texto__premium">${descripcion}</p>
                  <p class="card-text texto__tarjeta">Stock:${stock}</p>
                  <div class="numeros__premium">
                  <h6 class="precio precio__premium">${precio}</h6>
                  <a href="javascript:addCarrito(${id})" class="btn btn-primary boton__addCarrito btn__premium">Agregar al carrito</a>
                  </div> 
                  </div>         
                
                `;
                divLineas.appendChild(prod)


            })
            

           
        }

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
const {id, linea, descripcion,precio, img,stock,cantidad} = producto;
            let prod = document.createElement('div');
            prod.classList.add('card','tarjeta');
            prod.setAttribute('style','width: 18rem')
            prod.setAttribute('id','producto'+id);
            prod.innerHTML = `
            <img src="./img/${img}" class="card-img-top img__card" alt="Inodoro de la card ">
            <div class="card-body cuerpo__card cuerpo__premium">
              <h5 class="card-title cuerpo__titulo titulo__premium">${linea} </h5>
              <p class="card-text texto__tarjeta texto__premium">${descripcion}</p>
              <p class="card-text texto__tarjeta">Stock:${stock}</p>
              <div class="numeros__premium">
              <h6 class="precio precio__premium">${precio}</h6>
              <a href="javascript:addCarrito(${id})" class="btn btn-primary boton__addCarrito btn__premium">Agregar al carrito</a>
              </div> 
              </div>    
            
            `;
            divProductos.appendChild(prod);


            
        });

    
    }
}



    buscar( q ) { 


    let resultado = productos.filter( producto => producto.linea.toLowerCase().includes( q.toLowerCase() ) || producto.descripcion.toLowerCase().includes( q.toLowerCase() ) || producto.tipo.toLowerCase().includes( q.toLowerCase() ));      
    this.cargarProductos( resultado );                   
}




addCart( infoProducto ) {
        
        
    const existe = carrito.some( producto => producto.id === infoProducto.id );
    
    if(existe) 
    {        
        const prod = carrito.map( producto => {

            if(producto.id === infoProducto.id)
            {
                producto.cantidad++;  }                 


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

        

        let countCarrito = document.querySelector('#badgeCarrito');

        // Actualizar contador del carrito
        countCarrito.innerHTML = carrito.length;

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
            const {id,linea, descripcion,precio, img, cantidad,stock } = producto;                  

            const row = document.createElement('div');
            row.classList.add('row');            
                        row.innerHTML =`                
            <div class="rowCarrito">
            <img src="${img}" class="card-img-top img__card imgCarrito" alt="Inodoro de la card ">
            <div class="card-body cuerpo__card cardCarritoo">
              <p class="card-text texto__tarjeta texto__carrito">${descripcion}</p>
              <a href="javascript:borrarUnidad(${id})" class="btn btn-primary boton__addCarritocanvas padd-card"><i class="fa-solid fa-square-minus fa-2x"></i></a>
              <h6 class="cantidad padd-card texto__carrito">Cantidad:${cantidad}</h6>
              <a href="javascript:addCarrito(${id})" class="btn btn-primary boton__addCarritocanvas padd-card"><i class="fa-solid fa-square-plus fa-2x"></i></a>
              <h6 class="precio padd-card">Precio:$${precio}</h6>
              <p class="card-text texto__tarjeta ">Subtotal:$ ${precio*cantidad}</p>
                           
            </div>
           

            </div>
            `;

            
            divCart.appendChild(row);

        })
    }

        let totalArt = document.createElement('div');
        totalArt.classList.add('totalContainer');
        
        totalArt.innerHTML = `Total a pagar: $`+carrito.reduce((acc,prod)=> acc+ prod.cantidad*prod.precio,0);

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
    }).then( (respuesta) => {
        if(respuesta.isConfirmed){        
            carrito = carrito.filter( producto => producto.id != id);
            
            this.actualizarCarrito();
            this.showCart();
            this.mensajeCarrito("Producto eliminado");
    }
        })
    



  
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







