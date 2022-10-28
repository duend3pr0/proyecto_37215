


class ListaProductos {

    iniciar() {

        //Arreglo de productos
        productos = [

            {
                "id": 1,
                "nombre": "Inodoro Largo Marina",
                "descripcion": "Inodoro de apoyo Marina blanco Ferrum",
                "precio": 20000,
                "stock": 10,
                "img": "",
                "destacado": 0
            },
            {
                "id": 2,
                "nombre": "Inodoro Largo Murano",
                "descripcion": "Inodoro de apoyo Murano blanco Ferrum",
                "precio": 18000,
                "stock": 10,
                "img": "",
                "destacado": 0
            },

            {
                "id": 3,
                "nombre": "Inodoro Largo Atuel",
                "descripcion": "Inodoro de apoyo Atuel blanco Ferrum",
                "precio": 8000,
                "stock": 30,
                "img": "",
                "destacado": 1
            },
            {
                "id": 4,
                "nombre": "Inodoro Largo Andina",
                "descripcion": "Inodoro de apoyo Andina blanco Ferrum",
                "precio": 9000,
                "stock": 30,
                "img": "",
                "destacado": 1
            },
            {
                "id": 5,
                "nombre": "Inodoro Largo Trento",
                "descripcion": "Inodoro de apoyo Trento blanco Ferrum",
                "precio": 14000,
                "stock": 10,
                "img": "",
                "destacado": 0
            },
            {
                "id": 6,
                "nombre": "Inodoro Largo Varese",
                "descripcion": "Inodoro de apoyo Varese blanco Ferrum",
                "precio": 25000,
                "stock": 5,
                "img": "",
                "destacado": 0
            }
        ]

        // Solo quiero mostrar los articulos destacados.
        let ofertas = productos.filter( prod => prod.destacado == 1 );

        this.cargarProductos( ofertas);
        
        this.mostrarCarrito();
        
        this.actualizarContador();
            
    }
}


    