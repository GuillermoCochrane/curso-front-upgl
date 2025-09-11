const zapatillas = {
    "nike-dunk-low": {
    nombre: "Nike Dunk Low",
    precio: "$199",
    descripcion: "El icono del basquetbol de los 80, que se creó para la cancha pero conquistó las calles del mundo.",
    talles: "36, 37, 38, 43, 45",
    colores: "Blanco, Rojo, Negro",
    url: "https://nikearprod.vtexassets.com/arquivos/ids/378649-800-800?width=800&height=800&aspect=true"
    },
    "air-jordan-1-low": {
      nombre: "Air Jordan 1 Low",
      precio: "$199",
      descripcion: "La unidad encapsulada Air-Sole proporciona amortiguación ligera y un diseño de alta calidad para mayor comodidad.",
      talles: "36, 37, 38, 43, 45",
      colores: "Blanco, Rojo, Negro",
      url: "https://nikearprod.vtexassets.com/arquivos/ids/981162-800-800?width=800&height=800&aspect=true"
    },
    "nike-pegasus-40": {
      nombre: "Nike Pegasus 40",
      precio: "$199",
      descripcion: "Con una pisada elástica para cada tipo de carrera, vuelve la sensación ideal para ayudarte a alcanzar tus objetivos",
      talles: "36, 37, 38, 43, 45",
      colores: "Blanco, Rojo, Negro",
      url: "https://nikearprod.vtexassets.com/arquivos/ids/701565-800-800?width=800&height=800&aspect=true"
    },
    "adidas-rivalry-low": {
      nombre: "Adidas Rivalry Low",
      precio: "$199",
      descripcion: "Las Rivalry son una leyenda en las canchas, pero ademas representan un modelo versátil para cualquier estilo de vida.",
      talles: "36, 37, 38, 43, 45",
      colores: "Blanco, Rojo, Negro",
      url: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/0f108327ea874f9b93fdaf20014a38e5_9366/Zapatillas_Rivalry_Low_Negro_FZ6327_01_00_standard.jpg"
    },
    "adidas-gazelle": {
      nombre: "Adidas Gazelle",
      precio: "$199",
      descripcion: "Las Gazelle nacieron como zapatillas de training versátiles, pero se convertirsieron en un clásico de la moda urbana",
      talles: "36, 37, 38, 43, 45",
      colores: "Blanco, Rojo, Negro",
      url: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/0748ddb37db24595abf4a80b00ee643d_9366/Zapatillas_Gazelle_UNISEX_Negro_BB2507_01_standard.jpg"
    },
    "adidas-forum-84-low": {
      nombre: "Adidas Forum 84 Low",
      precio: "$199",
      descripcion: "Desde 1984 su diseño vanguardista fue icónico. Siguen evolucionando al ser reimaginadas para el skate",
      talles: "36, 37, 38, 43, 45",
      colores: "Blanco, Rojo, Negro",
      url: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d5c2891dd9c24b56b6d6cdb6bc438f8b_9366/Zapatillas_Forum_84_Low_ADV_Blanco_JP6094_01_00_standard.jpg"
    },
    "puma-pounce-lite": {
      nombre: "Puma Pounce Lite",
      precio: "$199",
      descripcion: "Las Pounce Lite te ofrecen comodidad durante todo el día y en cualquier ocasión. Perfectas para tu vida activa, combinan confort y diseño moderno.",
      talles: "36, 37, 38, 43, 45",
      colores: "Blanco, Rojo, Negro",
      url: "https://images.puma.com/image/upload/f_auto,q_auto,w_2000,b_rgb:FAFAFA/global/312033/01/sv01/fnd/ARG/fmt/png"
    },
    "puma-suede-xl": {
      nombre: "Puma Suede XL",
      precio: "$199",
      descripcion: "Esta nueva versión de las Suede se inspira en la herencia de PUMA en el mundo del breakdance y en su influencia en el streetwear moderno, conservando su ADN icónico",
      talles: "36, 37, 38, 43, 45",
      colores: "Blanco, Rojo, Negro",
      url: "https://images.puma.com/image/upload/f_auto,q_auto,w_2000,b_rgb:FAFAFA/global/395205/02/sv01/fnd/ARG/fmt/png"
    },
    "puma-speedcat-cuero": {
      nombre: "Puma Speedcat Cuero",
      precio: "$199",
      descripcion: "Las Speedca destacan entre la multitud por su forma inspirada en las zapatillas de carreras y sus líneas elegantes, que le confieren un aspecto rápido y atrevido",
      talles: "36, 37, 38, 43, 45",
      colores: "Blanco, Rojo, Negro",
      url: "https://images.puma.com/image/upload/f_auto,q_auto,w_2000,b_rgb:FAFAFA/global/401534/01/sv01/fnd/ARG/fmt/png"
    }
  };
const $zapatillas = document.querySelectorAll('[data-zapatilla]');
for (const zapatilla of $zapatillas) {
  zapatilla.addEventListener('click', function(event) {
    event.preventDefault();
    const modalName = document.querySelector('#modal-nombre');
    const modalPrecio = document.querySelector('#modal-precio');
    const modalDescripcion = document.querySelector('#modal-descripcion');
    const modalTalles = document.querySelector('#modal-talles');
    const modalColores = document.querySelector('#modal-colores');
    const modalImg = document.querySelector('#modal-img');
    var id = this.getAttribute('data-zapatilla');
    const currentZapatilla = zapatillas[id];
    modalName.textContent = currentZapatilla.nombre;
    modalPrecio.textContent = currentZapatilla.precio;
    modalDescripcion.textContent = currentZapatilla.descripcion;
    modalTalles.textContent = currentZapatilla.talles;
    modalColores.textContent = currentZapatilla.colores;
    modalImg.src = currentZapatilla.url;
    modalImg.alt = currentZapatilla.nombre;
  }
  );
};