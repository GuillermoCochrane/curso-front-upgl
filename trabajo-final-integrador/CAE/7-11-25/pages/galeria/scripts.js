const imagenes = [
  {
    src: "Imagen1.jpeg",
    titulo: "Primer Imagen",
    descripcion: "-"
  },
  {
    src: "Imagen2.jpeg",
    titulo: "Segunda Imagen",
    descripcion: "-"
  },
  {
    src: "Imagen3.jpeg",
    titulo: "Tercer Imagen",
    descripcion: "-"
  },
  {
    src: "Imagen4.jpeg",
    titulo: "Cuarta Imagen",
    descripcion: "Competencias amistosas entre cursos en la cancha principal del instituto."
  },
  {
    src: "Imagen5.jpeg",
    titulo: "Quinta Imagen",
    descripcion: "-"
  },
  {
    src: "Imagen6.jpeg",
    titulo: "Sexta Imagen",
    descripcion: "-"
  },
  {
    src: "Imagen7.jpeg",
    titulo: "Septima Imagen",
    descripcion: "-"
  },
  {
    src: "Imagen8.jpeg",
    titulo: "Octava Imagen",
    descripcion: "-"
  }
];

const galeriaSecundaria = document.querySelector(".galeria_cardSecundarias");
const cartasSecundarias = galeriaSecundaria.querySelectorAll(".card");

let indice = 0;

function rotarImagenes() {
  cartasSecundarias.forEach((card, i) => {
    const img = card.querySelector(".face.front img");
    const tituloFront = card.querySelector(".face.front h3");
    const tituloBack = card.querySelector(".face.back h3");
    const descripcionBack = card.querySelector(".face.back p");

    const actual = (indice + i) % imagenes.length;
    const data = imagenes[actual];

    img.src = data.src;
    img.alt = data.titulo;
    tituloFront.textContent = data.titulo;
    tituloBack.textContent = data.titulo;
    descripcionBack.textContent = data.descripcion;
  });

  indice = (indice + 1) % imagenes.length;
}


rotarImagenes();
setInterval(rotarImagenes, 3000);


const modal = document.getElementById("galeriaModal");
const galeriaInfinita = document.getElementById("galeriaInfinita");

modal.addEventListener("show.bs.modal", () => {
  galeriaInfinita.innerHTML = "";

  imagenes.forEach((data, i) => {
    const div = document.createElement("div");
    div.classList.add("card", "m-2");
    div.style.width = "18rem";
    div.innerHTML = `
      <img src="${data.src}" class="card-img-top" alt="${data.titulo}">
      <div class="card-body text-center">
        <h5 class="card-title">${data.titulo}</h5>
        <p class="card-text">${data.descripcion}</p>
      </div>
    `;
    galeriaInfinita.appendChild(div);
  });
});
