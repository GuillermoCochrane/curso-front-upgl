console.log("Bienvenidos a la pagina DCI")

const jugadores = [
    { nombre: "Matías Sosa", posicion: "Arquero", numero: 1, imagen: "assets/jugador1.png", edad: 25, nacionalidad: "Argentina", tecnicas: ["Atajadas", "Reflejos", "Juego Aéreo"], detalles: "Portero ágil con gran dominio del área chica y reflejos excepcionales. Líder en la defensa." },
    { nombre: "Gabriel López", posicion: "Defensor", numero: 2, imagen: "assets/jugador2.png", edad: 26, nacionalidad: "Argentina", tecnicas: ["Marcaje", "Despejes", "Anticipación"], detalles: "Defensor sólido y experimentado, clave en la línea defensiva." },
    { nombre: "Diego Fernández", posicion: "Defensor", numero: 3, imagen: "assets/jugador3.png", edad: 27, nacionalidad: "Argentina", tecnicas: ["Marcaje", "Despejes", "Anticipación"], detalles: "Defensor ágil con gran capacidad de anticipación y recuperación." },
    { nombre: "Santiago Ruiz", posicion: "Defensor", numero: 4, imagen: "assets/jugador4.png", edad: 28, nacionalidad: "Argentina", tecnicas: ["Marcaje", "Despejes", "Anticipación"], detalles: "Defensor fuerte en el juego aéreo y en el marcaje." },
    { nombre: "Javier Gómez", posicion: "Defensor", numero: 5, imagen: "assets/jugador5.png", edad: 29, nacionalidad: "Argentina", tecnicas: ["Marcaje", "Despejes", "Anticipación"], detalles: "Defensor experimentado, líder en la defensa." },
    { nombre: "Lucas Martínez", posicion: "Volante", numero: 6, imagen: "assets/jugador6.png", edad: 30, nacionalidad: "Argentina", tecnicas: ["Pase", "Control", "Desborde"], detalles: "Volante creativo con gran visión de juego y capacidad de desborde." },
    { nombre: "Andrés Pérez", posicion: "Volante", numero: 7, imagen: "assets/jugador7.png", edad: 31, nacionalidad: "Argentina", tecnicas: ["Pase", "Control", "Desborde"], detalles: "Volante con gran capacidad de recuperación y pase." },
    { nombre: "Mario Torres", posicion: "Volante", numero: 8, imagen: "assets/jugador8.png", edad: 32, nacionalidad: "Argentina", tecnicas: ["Pase", "Control", "Desborde"], detalles: "Volante con gran capacidad de desborde y llegada al área." },
    { nombre: "Tomás Castro", posicion: "Delantero", numero: 9, imagen: "assets/jugador9.png", edad: 33, nacionalidad: "Argentina", tecnicas: ["Definición", "Desmarque", "Juego Aéreo"], detalles: "Delantero con gran capacidad de definición y juego aéreo." },
    { nombre: "Facundo Díaz", posicion: "Delantero", numero: 10, imagen: "assets/jugador10.png", edad: 34, nacionalidad: "Argentina", tecnicas: ["Definición", "Desmarque", "Juego Aéreo"], detalles: "Delantero con gran capacidad de desmarque y definición." },
    { nombre: "Fernando Vázquez", posicion: "Delantero", numero: 11, imagen: "assets/jugador11.png", edad: 35, nacionalidad: "Argentina", tecnicas: ["Definición", "Desmarque", "Juego Aéreo"], detalles: "Delantero con gran capacidad de definición y juego aéreo." }
];

document.addEventListener("DOMContentLoaded", function () {

    const filas = document.getElementById("jugadores");
    const verMasBtn = document.getElementById("verMasBtn");
    let mostrados = 0;
    const porPagina = 3;

    function mostrarJugadores() {
        const hasta = Math.min(mostrados + porPagina, jugadores.length);
        for (let i = mostrados; i < hasta; i++) {
            const jugador = jugadores[i];
            const card = document.createElement('div');
            card.className = "col-md-4 mb-4";
            card.innerHTML = `
                <div class="card shadow card-jugadores" >
                    <div class="position-relative">
                        <span class="sombreado-badge badge bg-danger text-dark position-absolute top-5 m-2">#${jugador.numero}</span>
                        <img src="${jugador.imagen}" class="card-img-top" alt="Jugador ${jugador.numero}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${jugador.nombre}</h5>
                        <p class="card-text">${jugador.posicion} | #${jugador.numero}</p>
                        <button type="button" class="btn btn-outline-danger btn-detalles"
                                data-bs-toggle="modal"
                                data-bs-target="#jugadorModal"
                                data-jugador-index="${i}">
                            Más detalles...
                        </button>
                    </div>
                </div >
            `;
            filas.appendChild(card);
        }
        mostrados = hasta;
        if (mostrados >= jugadores.length) {
            verMasBtn.style.display = "none";
        }
    }

    const modalElement = document.getElementById('jugadorModal');
    if (modalElement) {
        modalElement.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const index = button.getAttribute('data-jugador-index');
            const jugador = jugadores[index];

            const modalTitulo = this.querySelector('.modal-title');
            const modalNumero = this.querySelector('#modal-jugador-numero');
            const modalImage = this.querySelector('#modal-jugador-imagen');
            const modalInfo = this.querySelector('#modal-jugador-general');
            const modalHabilidades = this.querySelector('#modal-jugador-tecnicas');
            const modalDetails = this.querySelector('#modal-jugador-detalles');

            modalTitulo.textContent = `${jugador.nombre} | #${jugador.numero} (${jugador.posicion})`;
            modalImage.src = jugador.imagen;
            modalImage.alt = `Foto de ${jugador.nombre}`;
            modalNumero.textContent = jugador.numero;

            modalInfo.innerHTML = `
                <p><strong>Edad:</strong> ${jugador.edad} años</p>
                <p><strong>Nacionalidad:</strong> ${jugador.nacionalidad}</p>
            `;

            modalHabilidades.innerHTML = jugador.tecnicas.map(tecnica =>
                `<span class="badge bg-primary me-2">${tecnica}</span>`
            ).join('');

            modalDetails.textContent = jugador.detalles;
        });
    }
    mostrarJugadores();

    verMasBtn.addEventListener("click", mostrarJugadores);
});