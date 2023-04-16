/** PRODUCT0S **/

const productos = [
    {
        nombre: "Capot Forged Carbon",
        modeloAuto: "Porsche 911 Turbo S",
        id: "producto01",
        precio: 1300,
        imagen: "../assets/img/producto-capot-forged-carbon.jpg",
    },
    {
        nombre: "Spoiler TECHART",
        modeloAuto: "Porsche 911 Turbo S",
        id: "producto02",
        precio: 2650,
        imagen: "../assets/img/producto-spoilerGTstreetR.jpeg",
    },
    {
        nombre: "Brank capot",
        modeloAuto: "Porsche 911 Turbo S",
        id: "producto03",
        precio: 450,
        imagen: "../assets/img/producto-forged-carbon-3.jpg",
    },
    {
        nombre: "Exhaust TECHART",
        modeloAuto: "Porsche 911 Turbo S",
        id: "producto04",
        precio: 1450,
        imagen: "../assets/img/producto-full-exhaust.jpeg",
    },
    {
        nombre: "Volante Carbon Fibre",
        modeloAuto: "Mercedes Benz A45 ",
        id: "producto05",
        precio: 900,
        imagen: "../assets/img/producto-volantemb.jpg",
    },
    {
        nombre: "Kit Front-Bumper TECHART",
        modeloAuto: "Porsche 911 Turbo S",
        id: "producto06",
        precio: 1800,
        imagen: "../assets/img/front-bumper-carritodecompras.jpeg",
    },
    {
        nombre: "Cachas Carbon Fibre",
        modeloAuto: "BMW M240",
        id: "producto07",
        precio: 720,
        imagen: "../assets/img/producto-cachas-espejo-carbono.jpg",
    },
    {
        nombre: "Spoiler Forged Carbon",
        modeloAuto: "Porsche 911 Turbo S",
        id: "producto08",
        precio: 650,
        imagen: "../assets/img/producto-spoiler-forged-carbon.jpg",
    }
];


/**     FUNCION LISTA DE PRODUCTOS PAGINA ACCESORIOS    **/

const productosContainer = document.querySelector("#productosContainer")

function cargarProductos() {

    productos.forEach(producto => {
        const productCard = document.createElement("div")
        productCard.className = "rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
        productCard.innerHTML = `
        <div>
            <div class="relative flex items-end overflow-hidden rounded-xl">
                <img src="${producto.imagen}" alt="${producto.nombre}" />
                <div class="flex items-center space-x-1.5 rounded-lg bg-indigo-500 px-4 py-1.5 text-white duration-100 hover:bg-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
            </div>
            <div class="mt-1 p-2">
                <h2 class="text-slate-700">${producto.nombre}</h2>
                <p class="mt-1 text-sm text-slate-400">${producto.modeloAuto}</p>
                <div class="mt-3 flex items-end justify-between">
                    <p class="text-lg font-bold text-indigo-500">$${producto.precio}</p>
                    <div class="flex items-center space-x-1.5 rounded-lg bg-indigo-500 px-4 py-1.5 text-white duration-100 hover:bg-indigo-600">
                        <button class="btnAddCart text-sm" id="${producto.id}">Add to cart</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        `
        productosContainer.append(productCard);
    });
}

cargarProductos();


let botonesAgregar = document.querySelectorAll(".btnAddCart");

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
});


let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productosEnCarrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #4f46e5, #6366f1)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function () { } // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
}