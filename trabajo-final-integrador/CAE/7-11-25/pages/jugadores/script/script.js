document.addEventListener('DOMContentLoaded', () => {
      mostrarSecciones(); // Carga la lista de jugadores
});

    
// Imágenes de cada jugador
const imagenesJugadores = {
  "Airasca Santiago": "assets/Airasca-Santiago.jpeg",
  "Gil Gabriel": "assets/Gil-Gabriel.jpeg",
  "Gonzalez Valentin": "assets/Gonzalez-Valentin.jpeg",
  "Andino Manuel": "assets/Andino-Manuel.jpeg",
  "Ferrando Marcos": "assets/Ferrando-Marcos.jpeg",
  "Fontana Santiago": "assets/Fontana-Santiago.jpeg",
  "Monzon Maximiliano": "assets/Monzon-Maximiliano.jpeg",
  "Velázquez Gaspar": "assets/Velazquez-Gaspar.jpeg",
  "Zabaleta Javier": "assets/Zabaleta-Javier.jpeg",
  "Rios Juan": "assets/Rios-Juan.jpeg",
  "Rodriguez Joaquín": "assets/Rodriguez-Joaquin.jpeg",
  "Montiel Gonzalo": "assets/Montiel-Gonzalo.jpeg",
  "Galetto Máximo": "assets/Galetto-Maximo.jpeg",
  "Guzmán Laureano": "assets/Guzman-Laureano.jpeg",
  "Arce Timoteo": "assets/Arce-Timoteo.jpeg",
  "Bocco Martin": "assets/Bocco-Martin.jpeg",
  "Cortez Fermin": "assets/Cortez-Fermin.jpeg",
  "Ferrando Joaquín": "assets/Ferrando-Joaquin.jpeg",
  "Granero Juan Pablo": "assets/Granero-Juan-Pablo.jpeg",
  "Reguero Franco": "assets/Reguero-Franco.jpeg",
  "Rodriguez Bernabe": "assets/Rodriguez-Bernabe.jpeg",
  "Moyano Francisco": "assets/Moyano-Francisco.jpeg",
  "Victorio Juan Ignacio": "assets/Victorio-Juan-Ignacio.jpeg",
  "Zarate Ezequiel": "assets/Zarate-Ezequiel.jpeg",
  "Dopazo Martin": "assets/Dopazo-Martin.jpeg",
  "Sanchez Bruno": "assets/Sanchez-Bruno.jpeg",
  "Cataldo Ramiro": "assets/Cataldo-Ramiro.jpeg",
  "Bruera Maximiliano": "assets/Bruera-Maximiliano.jpeg",
  "Alarcon Francisco": "assets/Alarcon-Francisco.jpeg",
  "Zabaleta Matias": "assets/Zabaleta-Matias.jpeg",
  
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