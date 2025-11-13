document.addEventListener('DOMContentLoaded', () => {
      mostrarSecciones(); // Carga la lista de jugadores
});

    
// Imágenes de cada jugador
const imagenesJugadores = {
  "Airasca Santiago": "assets/jugadores/Airasca-Santiago.webp",
  "Gil Gabriel": "assets/jugadores/Gil-Gabriel.webp",
  "Gonzalez Valentin": "assets/jugadores/Gonzalez-Valentin.webp",
  "Andino Manuel": "assets/jugadores/Andino-Manuel.webp",
  "Ferrando Marcos": "assets/jugadores/Ferrando-Marcos.webp",
  "Fontana Santiago": "assets/jugadores/Fontana-Santiago.webp",
  "Monzon Maximiliano": "assets/jugadores/Monzon-Maximiliano.webp",
  "Velázquez Gaspar": "assets/jugadores/Velazquez-Gaspar.webp",
  "Zabaleta Javier": "assets/jugadores/Zabaleta-Javier.webp",
  "Rios Juan": "assets/jugadores/Rios-Juan.webp",
  "Rodriguez Joaquín": "assets/jugadores/Rodriguez-Joaquin.webp",
  "Montiel Gonzalo": "assets/jugadores/Montiel-Gonzalo.webp",
  "Galetto Máximo": "assets/jugadores/Galetto-Maximo.webp",
  "Guzmán Laureano": "assets/jugadores/Guzman-Laureano.webp",
  "Arce Timoteo": "assets/jugadores/Arce-Timoteo.webp",
  "Bocco Martin": "assets/jugadores/Bocco-Martin.webp",
  "Cortez Fermin": "assets/jugadores/Cortez-Fermin.webp",
  "Ferrando Joaquín": "assets/jugadores/Ferrando-Joaquin.webp",
  "Granero Juan Pablo": "assets/jugadores/Granero-Juan-Pablo.webp",
  "Reguero Franco": "assets/jugadores/Reguero-Franco.webp",
  "Rodriguez Bernabe": "assets/jugadores/Rodriguez-Bernabe.webp",
  "Moyano Francisco": "assets/jugadores/Moyano-Francisco.webp",
  "Victorio Juan Ignacio": "assets/jugadores/Victorio-Juan-Ignacio.webp",
  "Zarate Ezequiel": "assets/jugadores/Zarate-Ezequiel.webp",
  "Dopazo Martin": "assets/jugadores/Dopazo-Martin.webp",
  "Sanchez Bruno": "assets/jugadores/Sanchez-Bruno.webp",
  "Cataldo Ramiro": "assets/jugadores/Cataldo-Ramiro.webp",
  "Bruera Maximiliano": "assets/jugadores/Bruera-Maximiliano.webp",
  "Alarcon Francisco": "assets/jugadores/Alarcon-Francisco.webp",
  "Zabaleta Matias": "assets/jugadores/Zabaleta-Matias.webp",
};

//Jugadores
const jugadoresPorPosicion = [
  {
    posicion: "Arqueros",
    nombres: ["Airasca Santiago", "Gil Gabriel", "Gonzalez Valentin"]
  },
  {
    posicion: "Defensores",
    nombres: [
    "Andino Manuel", "Ferrando Marcos", "Fontana Santiago", 
    "Monzon Maximiliano", "Velázquez Gaspar", "Zabaleta Javier",
    "Rios Juan", "Rodriguez Joaquín", "Montiel Gonzalo",
    "Galetto Máximo", "Guzmán Laureano"
    ]
  },
  {
    posicion: "Mediocampistas",
    nombres: [
    "Arce Timoteo", "Bocco Martin", "Cortez Fermin",
    "Ferrando Joaquín", "Granero Juan Pablo", "Reguero Franco",
    "Rodriguez Bernabe", "Moyano Francisco", "Victorio Juan Ignacio",
    "Zarate Ezequiel"
    ]
  },
  {
    posicion: "Delanteros",
    nombres: [
    "Dopazo Martin", "Sanchez Bruno", "Cataldo Ramiro",
    "Bruera Maximiliano", "Alarcon Francisco", "Zabaleta Matias"
    ]
  }
];

function mostrarSecciones() {
  const seccionesContainer = document.getElementById('secciones-container');
  const detalleContainer = document.getElementById('detalle-container');
  seccionesContainer.innerHTML = '';
  detalleContainer.innerHTML = '';

  jugadoresPorPosicion.forEach((grupo, index) => {
    const card = document.createElement('div');
    card.className = 'col-md-3 mb-4';
    card.innerHTML = `
      <div class="card seccion-card h-100" onclick="mostrarDetalle(${index})">
        <div class="card-body d-flex align-items-center justify-content-center">
          <h4 class="card-title">${grupo.posicion}</h4>
        </div>
      </div>
    `;
    seccionesContainer.appendChild(card);
  });
}

function mostrarDetalle(index) {
  const grupo = jugadoresPorPosicion[index];
  const detalleContainer = document.getElementById('detalle-container');
  const seccionesContainer = document.getElementById('secciones-container');
  seccionesContainer.innerHTML = '';

  detalleContainer.innerHTML = `
    <h3 class="titulo-posicion">${grupo.posicion}</h3>
    <div class="row">
      ${grupo.nombres.map(nombre => `
        <div class="col-md-4 mb-4">
          <div class="card jugador-card">
            <div class="card-body">
            <img src="${imagenesJugadores[nombre]}" alt="${nombre}" class="jugador-img mb-2" loading="lazy">
              <h5 class="card-title">${nombre}</h5>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
    <button class="btn btn-outline-danger mt-3" onclick="mostrarSecciones()">Volver</button>
  `;
}
