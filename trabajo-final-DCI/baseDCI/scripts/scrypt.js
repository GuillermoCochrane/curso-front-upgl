
console.log("Bienvenidos a la pagina DCI")

const jugadores = [ /* Datos de jugadores, se pueden cargar mas o modificar los existentes */
    { nombre: "Matías Sosa", posicion: "Arquero", numero: 1, imagen: "assets/jugador1.png" },
    { nombre: "Gabriel López", posicion: "Defensor", numero: 2, imagen: "assets/jugador2.png" },
    { nombre: "Diego Fernández", posicion: "Defensor", numero: 3, imagen: "assets/jugador3.png" },
    { nombre: "Santiago Ruiz", posicion: "Defensor", numero: 4, imagen: "assets/jugador4.png" },
    { nombre: "Javier Gómez", posicion: "Defensor", numero: 5, imagen: "assets/jugador5.png" },
    { nombre: "Lucas Martínez", posicion: "Volante", numero: 6, imagen: "assets/jugador6.png" },
    { nombre: "Andrés Pérez", posicion: "Volante", numero: 7, imagen: "assets/jugador7.png" },
    { nombre: "Mario Torres", posicion: "Volante", numero: 8, imagen: "assets/jugador8.png" },
    { nombre: "Tomás Castro", posicion: "Delantero", numero: 9, imagen: "assets/jugador9.png" },
    { nombre: "Facundo Díaz", posicion: "Delantero", numero: 10, imagen: "assets/jugador10.png" },
    { nombre: "Fernando Vázquez", posicion: "Delantero", numero: 11, imagen: "assets/jugador11.png" }
]

const filas = document.getElementById("jugadores");
console.log("Jugadores cargados:", jugadores.length);

jugadores.forEach(jugador => {/* Genera las tarjetas de los jugadores */
    const card = document.createElement('div');
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
    <div class="card shadow">
    <img src="${jugador.imagen}" class="card-img-top" alt="Jugador ${jugador.numero}">
    <div class="card-body">
        <h5 class="card-title">${jugador.nombre}</h5>
        <p class="card-text">${jugador.posicion} | #${jugador.numero}</p>
    </div>
    </div>
`;
    filas.appendChild(card); /* Agrega la tarjeta al contenedor principal */
    console.log("Tarjeta creada para:", jugador.nombre);

});
