// Base de datos auxiliar con los datos de los jugadores
const jugadores = [
    { nombre: "Matías Sosa", posicion: "Arquero", numero: 1, imagen: "assets/jugadores/jugador1.webp", edad: 25, nacionalidad: "Argentina", tecnicas: ["Atajadas", "Reflejos", "Juego Aéreo"], detalles: "Portero ágil con gran dominio del área chica y reflejos excepcionales. Líder en la defensa." },
    { nombre: "Gabriel López", posicion: "Defensor", numero: 2, imagen: "assets/jugadores/jugador2.webp", edad: 26, nacionalidad: "Argentina", tecnicas: ["Marcaje", "Despejes", "Anticipación"], detalles: "Defensor sólido y experimentado, clave en la línea defensiva." },
    { nombre: "Diego Fernández", posicion: "Defensor", numero: 3, imagen: "assets/jugadores/jugador3.webp", edad: 27, nacionalidad: "Argentina", tecnicas: ["Marcaje", "Despejes", "Anticipación"], detalles: "Defensor ágil con gran capacidad de anticipación y recuperación." },
    { nombre: "Santiago Ruiz", posicion: "Defensor", numero: 4, imagen: "assets/jugadores/jugador4.webp", edad: 28, nacionalidad: "Argentina", tecnicas: ["Marcaje", "Despejes", "Anticipación"], detalles: "Defensor fuerte en el juego aéreo y en el marcaje." },
    { nombre: "Javier Gómez", posicion: "Defensor", numero: 5, imagen: "assets/jugadores/jugador5.webp", edad: 29, nacionalidad: "Argentina", tecnicas: ["Marcaje", "Despejes", "Anticipación"], detalles: "Defensor experimentado, líder en la defensa." },
    { nombre: "Lucas Martínez", posicion: "Volante", numero: 6, imagen: "assets/jugadores/jugador6.webp", edad: 30, nacionalidad: "Argentina", tecnicas: ["Pase", "Control", "Desborde"], detalles: "Volante creativo con gran visión de juego y capacidad de desborde." },
    { nombre: "Andrés Pérez", posicion: "Volante", numero: 7, imagen: "assets/jugadores/jugador7.webp", edad: 31, nacionalidad: "Argentina", tecnicas: ["Pase", "Control", "Desborde"], detalles: "Volante con gran capacidad de recuperación y pase." },
    { nombre: "Mario Torres", posicion: "Volante", numero: 8, imagen: "assets/jugadores/jugador8.webp", edad: 32, nacionalidad: "Argentina", tecnicas: ["Pase", "Control", "Desborde"], detalles: "Volante con gran capacidad de desborde y llegada al área." },
    { nombre: "Tomás Castro", posicion: "Delantero", numero: 9, imagen: "assets/jugadores/jugador9.webp", edad: 33, nacionalidad: "Argentina", tecnicas: ["Definición", "Desmarque", "Juego Aéreo"], detalles: "Delantero con gran capacidad de definición y juego aéreo." },
    { nombre: "Facundo Díaz", posicion: "Delantero", numero: 10, imagen: "assets/jugadores/jugador10.webp", edad: 34, nacionalidad: "Argentina", tecnicas: ["Definición", "Desmarque", "Juego Aéreo"], detalles: "Delantero con gran capacidad de desmarque y definición." },
    { nombre: "Fernando Vázquez", posicion: "Delantero", numero: 11, imagen: "assets/jugadores/jugador11.webp", edad: 35, nacionalidad: "Argentina", tecnicas: ["Definición", "Desmarque", "Juego Aéreo"], detalles: "Delantero con gran capacidad de definición y juego aéreo." }
];

let mostrados = 0;

// Función para crear el cuerpo de la tarjeta de un jugador
function crearJugadorBody(jugador, index){
    const $body = createElement('div', 'card-body');
    const $title = createElement('h5', 'card-title', `${jugador.nombre}`);
    const $text = createElement('p', 'card-text', `${jugador.posicion} | #${jugador.numero}`);
    const $button = createElement('button', 'btn btn-outline-danger btn-detalles', `Ver Más`, false);
    $button.setAttribute('data-bs-toggle', 'modal');
    $button.setAttribute('data-bs-target', `#jugadorModal`);
    $button.setAttribute('data-jugador-index', index);
    $body.append($title, $text, $button);
    return $body;
}

// Función para crear la imagen de un jugador
function crearJugadorImagen(numero){
    const $imgContainer = createElement('div', 'position-relative');
    const $text = createElement('span', 'sombreado-badge badge bg-danger text-dark position-absolute top-5 m-2', `#${numero}`);
    const $img = createElement('img', 'card-img-top');
    $img.src = `./assets/renderCamiseta.webp`;
    $img.alt = `Foto de Jugador ${numero}`;
    $img.title = `Foto de Jugador ${numero}`;
    $img.loading = "lazy";
    $imgContainer.append($text, $img);
    return $imgContainer;
}

// Función para crear la tarjeta de un jugador
function crearCardJugador(jugador , index){
    const $card = createElement('div', 'col-md-6 col-xl-3 mb-4');
    const $container = createElement('div', 'card shadow card-jugadores');
    const $img = crearJugadorImagen(jugador.numero);
    const $body = crearJugadorBody(jugador, index);
    $container.append($img, $body);
    $card.append($container);
    return $card;
}

// Función que maneja la creación de las tarjetas de los jugadores
function crearJugadores(){
    const $filas = $('#jugadores');
    const $verMasBtn = $('#verMasBtn');
    const porPagina = 4;
    const hasta = Math.min(mostrados + porPagina, jugadores.length);
    for (let i = mostrados; i < hasta; i++) {
        const $card = crearCardJugador(jugadores[i], i);
        $filas.appendChild($card);
    }

    mostrados = hasta;

    if (mostrados >= jugadores.length) {
        $verMasBtn.style.display = "none";
        $verMasBtn.disabled = true;
    }
};

// Función para cargar la edad del jugador seleccionado en el modal
function crearEdadJugador(edad){
    const $edadTag = createElement("strong", null, "Edad: ");
    const $edadText = createElement("span", null, `${edad} años`);
    const $info = createElement("p", null);
    $info.append($edadTag, $edadText);
    return $info;
}

// Función para cargar la nacionalidad del jugador seleccionado en el modal
function crearNacionalidadJugador(nacionalidad){
    const $nacionalidadTag = createElement("strong", null, "Nacionalidad: ");
    const $nacionalidadText = createElement("span", null, nacionalidad);
    const $info = createElement("p", null);
    $info.append($nacionalidadTag, $nacionalidadText);
    return $info;
}

// Función para cargar las habilidades del jugador seleccionado en el modal
function crearHabilidadesJugador(tecnica){
    return createElement("span", "badge bg-primary me-2", tecnica);
}

// Función para cargar el resto de la información del jugador seleccionado en el modal
function modalJugadorManager(){
    const $modal = $('#jugadorModal');
    if ($modal) {
        $modal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const index = button.getAttribute('data-jugador-index');
            const jugador = jugadores[index];

            const $modalTitulo = $modal.querySelector('.modal-title');
            const $modalNumero = $('#modal-jugador-numero');
            const $modalImage = $('#modal-jugador-imagen');
            const $modalInfo = $('#modal-jugador-general');
            const $modalHabilidades = $('#modal-jugador-tecnicas');
            const $modalDetails = $('#modal-jugador-detalles');

            $modalTitulo.textContent = `${jugador.nombre} | #${jugador.numero} (${jugador.posicion})`;
            $modalImage.src = `./assets/renderCamiseta.webp`;
            $modalImage.alt = `Foto de ${jugador.nombre}`;
            $modalNumero.textContent = jugador.numero;
            $modalDetails.textContent = jugador.detalles;

            const $edad = crearEdadJugador(jugador.edad);
            const $nacionalidad = crearNacionalidadJugador(jugador.nacionalidad);

            $modalInfo.innerHTML = "";
            $modalInfo.append($edad, $nacionalidad);
            
            $modalHabilidades.innerHTML = "";
            for (const tecnica of jugador.tecnicas) {
                const $habilidad = crearHabilidadesJugador(tecnica);
                $modalHabilidades.append($habilidad);
            }
        });
    }
}

// Función que inicia la creación de las tarjetas de los jugadores y el manejo del modal
function iniciarJugadores() {
    const $verMasBtn = $('#verMasBtn');
    crearJugadores();
    modalJugadorManager();
    $verMasBtn.addEventListener("click", crearJugadores);
};

document.addEventListener("DOMContentLoaded", iniciarJugadores);