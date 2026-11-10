
const productos = [
    {
        nombre: "Set Topo y Cadena",
        precio: "$23.000",
        imagen: "Set Topo y Cadena.png",
        descripcion: "Material Covergold."
    },
    {
        nombre: "Marcadores doble punta",
        precio: "Desde $19.000",
        imagen: "Marcadores doble punta.png",
        descripcion: "24 piezas: $19.000 | 36: $25.000 | 48: $29.000 | 80: $43.000 | 100: $49.000 | 120: $53.000 | 168: $69.000 | 204: $119.000 | 262: $145.000."
    },
    {
        nombre: "Kpop x3",
        precio: "$49.000",
        imagen: "Kpop x3.png",
        descripcion: "Incluye luces y sonido."
    },
    {
        nombre: "Cocina de juguete",
        precio: "$210.000",
        imagen: "Cocina de juguete.png",
        descripcion: "Un producto ideal para los pequeños."
    },
    {
        nombre: "Conjunto navideño",
        precio: "$95.000",
        imagen: "Conjunto navideño.png",
        descripcion: "Hilo nacional. Oferta para pareja: $175.000."
    },
    {
        nombre: "Organizador de gorras",
        precio: "$25.000",
        imagen: "Organizador de gorras.png",
        descripcion: "Colores negro y blanco. Capacidad para 10 gorras."
    },
    {
        nombre: "Soporte para lavadora y nevera",
        precio: "$29.000",
        imagen: "Soporte para lavadora y nevera.png",
        descripcion: "Soporte ajustable, referencia 26203."
    },
    {
        nombre: "Body",
        precio: "$45.000",
        imagen: "Body.png",
        descripcion: "Polilicra embonada. Varios colores."
    },
    {
        nombre: "Overol",
        precio: "$95.000",
        imagen: "Overol.png",
        descripcion: "Talla única hasta talla 12. Varios colores."
    },
    {
        nombre: "Dino zazaza",
        precio: "$10.000",
        imagen: "image013.png",
        descripcion: "Conoce este producto en PIINK STOR."
    },
    {
        nombre: "Porta Celular",
        precio: "$49.000",
        imagen: "image015.png",
        descripcion: "Disponible en varios colores. Medidas: 18 cm de alto x 11 cm de largo."
    },
    {
        nombre: "Velo bordado 2 naves",
        precio: "$75.000",
        imagen: "image019.png",
        descripcion: "Disponible con varios colores de bordado."
    },
    {
        nombre: "Blusa en hilo",
        precio: "$49.000",
        imagen: "image031.png",
        descripcion: "Talla única. Disponible en varios colores."
    },
    {
        nombre: "Zapatero x6",
        precio: "$49.000",
        imagen: "image025.png",
        descripcion: "Organizador de zapatos con 6 niveles, sin tapas."
    },
    {
        nombre: "Zapatero x8",
        precio: "$55.000",
        imagen: "image025.png",
        descripcion: "Organizador de zapatos con 8 niveles, sin tapas."
    },
    {
        nombre: "Cepillo secador moldeador 5 en 1 Airwrap",
        precio: "$59.000",
        imagen: "image011.png",
        descripcion: "Cepillo secador y moldeador 5 en 1."
    }
];

console.log("PIINK STOR: tienda.js cargado");

const catalogo = document.getElementById("catalogo");

if (catalogo) {

    // Limpiar el catálogo antes de cargar los productos.
    catalogo.innerHTML = "";

    productos.forEach((producto) => {

        const mensaje = encodeURIComponent(
            `Hola, estoy interesada en ${producto.nombre}. ¿Me pueden dar más información?`
        );

        const tarjeta = document.createElement("article");
        tarjeta.className = "producto";

        tarjeta.innerHTML = `
            <img
                src="img/${producto.imagen}"
                alt="${producto.nombre}"
                class="imagen-producto"
            >

            <div class="informacion-producto">
                <h3>${producto.nombre}</h3>

                <p class="precio">${producto.precio}</p>

                <p class="descripcion-producto">
                    ${producto.descripcion}
                </p>

                <a
                    href="https://wa.me/573185720975?text=${mensaje}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="boton-producto"
                >
                    Consultar por WhatsApp
                </a>
            </div>
        `;

        catalogo.appendChild(tarjeta);
    });

    console.log("Productos cargados:", productos.length);
}
