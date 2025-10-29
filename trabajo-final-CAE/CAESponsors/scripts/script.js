document.addEventListener('DOMContentLoaded', () => {
  cargarJugadores();            // Carga la lista de jugadores
  cargarCancha();               // Muestra información del estadio
  cargarGaleria();              // Carga imágenes en la galería
  cargarCamisetaYEscudo();      // Muestra la camiseta y el escudo
  configurarToggleHistoria();   // Agrega funcionalidad al botón "Leer más"
});

//Controla la visibilidad del párrafo extendido de la historia del club
function configurarToggleHistoria() {
  const btnToggle = document.getElementById('toggleHistoria');
  const breve = document.getElementById('historia-breve');
  const extendida = document.getElementById('historia-extendida');

  btnToggle.addEventListener('click', () => {
    //Alterna entre mostrar u ocultar el contenido extendido
    if (extendida.style.display === 'none' || extendida.style.display === '') {
      extendida.style.display = 'block';
      btnToggle.textContent = 'Leer menos';
    } else {
      extendida.style.display = 'none';
      btnToggle.textContent = 'Leer más';
    }
  });
}

//Jugadores
function cargarJugadores() {
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

  const container = document.getElementById('jugadores-container');
  if (!container) return;

  let html = '';

  jugadoresPorPosicion.forEach(grupo => {
    grupo.nombres.forEach(nombre => {
      html += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${nombre}</h5>
              <p class="card-text">${grupo.posicion}</p>
            </div>
          </div>
        </div>
      `;
    });
  });

  container.innerHTML = html;
}

//Espera que el DOM cargue antes de llamar a la funcion
document.addEventListener('DOMContentLoaded', cargarJugadores);


//Cancha: muestra imagen y datos del estadio
function cargarCancha() {
  const canchaContainer = document.getElementById('cancha-container');
  if (!canchaContainer) return;

  const estadio = {
    nombre: 'Coco Bonanza "La Trampera"',
    direccion: 'Carlos Pellegrini y Martín Miguel Güemes, General Levalle, Córdoba',
    imagen: 'assets/cancha.jpg'
  };

  canchaContainer.innerHTML = `
    <div class="col-md-6">
      <img src="${estadio.imagen}" alt="Cancha del club" class="img-fluid rounded">
    </div>
    <div class="col-md-6">
      <h4>${estadio.nombre}</h4>
      <p>Dirección: ${estadio.direccion}</p>
    </div>
  `;
}


//Galeria:Carga imágenes dentro de la sección de galería
function cargarGaleria() {
  const galeria = [
    "assets/galeria0.jpeg",
    "assets/galeria1.jpeg",
    "assets/galeria2.jpeg",
  ];

  const galeriaContainer = document.getElementById('galeria-container');
  if (!galeriaContainer) return;

  let html = '';

  //Recorre cada imagen y genera una columna para mostrarla
  galeria.forEach(img => {
    html += `
      <div class="col-md-4 mb-3">
        <img src="${img}" class="img-fluid rounded" alt="Imagen del club">
      </div>
    `;
  });

  galeriaContainer.innerHTML = html;
}

//Carga imagen y titulo de la camiseta y el escudo del club
function cargarCamisetaYEscudo() {
  const container = document.getElementById('camiseta-escudo-container');
  if (!container) return;

  const datosClub = {
    camiseta: {
      titulo: "Camiseta Oficial",
      imagen: "assets/camiseta.png",
      alt: "Camiseta del Club"
    },
    escudo: {
      titulo: "Escudo del Club",
      imagen: "assets/escudo.ico",
      alt: "Escudo del Club"
    }
  };

  //Genera HTML para camiseta
  const camisetaHTML = `
    <div class="col-md-6 card p-3">
      <h5>${datosClub.camiseta.titulo}</h5>
      <img src="${datosClub.camiseta.imagen}" alt="${datosClub.camiseta.alt}" class="img-fluid rounded">
    </div>
  `;

  //Genera HTML para escudo
  const escudoHTML = `
    <div class="col-md-6 card p-3">
      <h5>${datosClub.escudo.titulo}</h5>
      <img src="${datosClub.escudo.imagen}" alt="${datosClub.escudo.alt}" class="img-fluid rounded" style="max-height: 200px;">
    </div>
  `;

  container.innerHTML = camisetaHTML + escudoHTML;
}

