function bienvenidaUsuario() {
    let nombreUsuario = prompt("Ingrese su nombre");
    while (nombreUsuario === "") {
        alert("No ha ingresado su nombre, por favor, ingréselo");
        nombreUsuario = prompt("Ingrese su nombre");
    }
    alert("Bienvenido " + nombreUsuario);
}

bienvenidaUsuario();

const arrayProductos =[
    {
        id: 1,
        nombre: "Depilador Facial cejas. Recargale-usb",
        precio: 2600,
        categoria: "Cuidado Personal",
        cantidad: 20

    },
    {
        id: 2,
        nombre: "Kit de 12 pinzas de depilar de acero inoxidable",
        precio: 3500,
        categoria: "Cuidado Personal",
        cantidad: 25,
    },
    {
        id: 3,
        nombre: "Depilador facial y corporal, 2 en 1.Recargable",
        precio: 4200,
        categoria: "Cuidado Personal",
        cantidad: 20,

    },
    {
        id: 4,
        nombre: "Humificador Aromático-Aceite, Relax",
        precio: 6300,
        categoria: "Regalería",
        cantidad: 10,

    },
    {
        id: 5,
        nombre: "Vela Aromanza Luxe- 9x7 cm",
        precio: 2100,
        categoria: "Regalería",
        cantidad: 25,

    },
    {
        id: 6,
        nombre: "Home Spay- Maderas de Oriente por 350ml",
        precio: 3500,
        categoria: "Regalería",
        cantidad: 30,

    },
    {
        id: 7,
        nombre: "Pack de 3 repasadores, 100% algodón",
        precio: 1800,
        categoria: "Bazar-Cocina",
        cantidad: 25,

    },
    {
        id: 8,
        nombre: "Botella para aceite, 630 ml",
        precio: 3000,
        categoria: "Bazar-Cocina",
        cantidad: 0,

    },
    
]


function mostrarProductos(){
    let eligeProducto = prompt("Elija el producto deseado: 1-Depilador Facial cejas. Recargale-usb\n precio: 2600\n 2-Kit de 12 pinzas de depilar de acero inoxidable\n precio: 3500\n 3-Depilador facial y corporal, 2 en 1.Recargable\n precio: 4200\n 4-Humificador Aromático-Aceite, Relax\n precio: 6300\n 5-Vela Aromanza Luxe- 9x7 cm\n precio: 2100\n 6-Home Spay- Maderas de Oriente por 350ml\n precio: 3500\n 7-Pack de 3 repasadores, 100% algodón\n precio: 1800\n 8-Botella para aceite, 630 ml\n precio: 3000\n 9-Cepillo lava platos, con dispensador para detergente\n precio: 1300\n 10-Salir");
    // let cantidad;
    // let formaDePago;
        if (eligeProducto === "10") {
            alert("Usted ha salido de la compra");
        
    }

    let eligeCantidad =parseInt(prompt("Elige la cantidad del producto seleccionado"));
    let formaDePago =prompt("Elija una forma de pago: \n 1- Transferencia bancaria\n 2- Tarjeta de crédito");
    let costoTotal = 0;
    if (eligeProducto >= 0 && eligeProducto < arrayProductos.length && eligeCantidad > 0) {
        if (formaDePago === "1") {
            // Transferencia bancaria con 10% de descuento
            const descuento = 0.1; // 10%
            costoTotal = arrayProductos[eligeProducto].precio * eligeCantidad * (1 - descuento);
        } else if (formaDePago === "2") {
            // Tarjeta de crédito sin descuento
            costoTotal = arrayProductos[eligeProducto].precio * eligeCantidad;
        } else {
            
            alert("Forma de pago inválida. Por favor, seleccione una opción válida.");
        }
    
        if (costoTotal > 0) {
            const costoRedondeado = Math.round(costoTotal * 100) / 100;
            alert("El costo total es: $" + costoRedondeado); 
        }
    } else {
        alert("Producto o cantidad inválida. Por favor, seleccione una opción válida.");
    }
}

mostrarProductos();


console.log(arrayProductos.length);

arrayProductos.push({id: 9, nombre: "Cepillo lava platos, con dispensador para detergente", precio: 1300, categoria: "Bazar-Cocina", cantidad: 3});
console.log(arrayProductos);


for(const nombre of arrayProductos){
    console.log(nombre.nombre);
}

const busquedaElemento = arrayProductos.filter((el) => el.categoria.includes("Bazar"));
console.log(busquedaElemento);
