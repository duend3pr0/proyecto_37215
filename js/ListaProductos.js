
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
                "img": "inodbari.jpg,",
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
                "img": "bidbari.jpg,",
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
                "img": "depodbari.jpg",
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
            this.cargarproductos(productos);
    }

    cargarproductos(productos){
        const divProductos = document.querySelector('#cards');
        divProductos.innerHTML = "";
        divProductos.classList.add('row','gap-4');
        productos.forEach((producto) => {
            let prod = document.createElement('div');
            prod.classList.add('card');
            prod.setAttribute('style','width: 18rem')
            prod.setAttribute('id','producto'+producto.id);
            prod.innerHTML = `
            <img src="./img/${producto.img}" class="card-img-top" alt="Inodoro de la card ">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre} </h5>
              <p class="card-text">${producto.descripcion}</p>
              <h3 class="precio">$${producto.precio}</h3>
              <a href="javascript:addCarrito(id)" class="btn btn-primary">Agregar al carrito</a>
            </div>         
            
            `
            divProductos.appendChild(prod);


            
        });

    
}
}