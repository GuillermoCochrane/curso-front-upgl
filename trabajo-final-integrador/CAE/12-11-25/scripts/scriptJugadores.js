document.addEventListener('DOMContentLoaded', () => {
      mostrarSecciones(); // Carga la lista de jugadores
});

    
// Imágenes de cada jugador
const imagenesJugadores = {
  "Airasca Santiago": "assets/jugadores/Airasca-Santiago.jpeg",
  "Gil Gabriel": "assets/jugadores/Gil-Gabriel.jpeg",
  "Gonzalez Valentin": "assets/jugadores/Gonzalez-Valentin.jpeg",
  "Andino Manuel": "assets/jugadores/Andino-Manuel.jpeg",
  "Ferrando Marcos": "assets/jugadores/Ferrando-Marcos.jpeg",
  "Fontana Santiago": "assets/jugadores/Fontana-Santiago.jpeg",
  "Monzon Maximiliano": "assets/jugadores/Monzon-Maximiliano.jpeg",
  "Velázquez Gaspar": "assets/jugadores/Velazquez-Gaspar.jpeg",
  "Zabaleta Javier": "assets/jugadores/Zabaleta-Javier.jpeg",
  "Rios Juan": "assets/jugadores/Rios-Juan.jpeg",
  "Rodriguez Joaquín": "assets/jugadores/Rodriguez-Joaquin.jpeg",
  "Montiel Gonzalo": "assets/jugadores/Montiel-Gonzalo.jpeg",
  "Galetto Máximo": "assets/jugadores/Galetto-Maximo.jpeg",
  "Guzmán Laureano": "assets/jugadores/Guzman-Laureano.jpeg",
  "Arce Timoteo": "assets/jugadores/Arce-Timoteo.jpeg",
  "Bocco Martin": "assets/jugadores/Bocco-Martin.jpeg",
  "Cortez Fermin": "assets/jugadores/Cortez-Fermin.jpeg",
  "Ferrando Joaquín": "assets/jugadores/Ferrando-Joaquin.jpeg",
  "Granero Juan Pablo": "assets/jugadores/Granero-Juan-Pablo.jpeg",
  "Reguero Franco": "assets/jugadores/Reguero-Franco.jpeg",
  "Rodriguez Bernabe": "assets/jugadores/Rodriguez-Bernabe.jpeg",
  "Moyano Francisco": "assets/jugadores/Moyano-Francisco.jpeg",
  "Victorio Juan Ignacio": "assets/jugadores/Victorio-Juan-Ignacio.jpeg",
  "Zarate Ezequiel": "assets/jugadores/Zarate-Ezequiel.jpeg",
  "Dopazo Martin": "assets/jugadores/Dopazo-Martin.jpeg",
  "Sanchez Bruno": "assets/jugadores/Sanchez-Bruno.jpeg",
  "Cataldo Ramiro": "assets/jugadores/Cataldo-Ramiro.jpeg",
  "Bruera Maximiliano": "assets/jugadores/Bruera-Maximiliano.jpeg",
  "Alarcon Francisco": "assets/jugadores/Alarcon-Francisco.jpeg",
  "Zabaleta Matias": "assets/jugadores/Zabaleta-Matias.jpeg",
  
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
            <img src="${imagenesJugadores[nombre]}" alt="${nombre}" class="jugador-img mb-2">
              <h5 class="card-title">${nombre}</h5>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
    <button class="btn btn-outline-danger mt-3" onclick="mostrarSecciones()">Volver</button>
  `;
}
