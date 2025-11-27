const imagenes = [
  {
    src: "assets/galeria/galeria1.webp",
    titulo: "Campeonato",
    descripcion: "Festejo del campeonato"
  },
  {
    src: "assets/galeria/galeria2.webp",
    titulo: "Cancha",
    descripcion: "Preparativos para el torneo relámpago del '69"
  },
  {
    src: "assets/galeria/galeria3.webp",
    titulo: "Inferiores CAE",
    descripcion: "Inferiores CAE del torneo relámpago del '69"
  },
  {
    src: "assets/galeria/galeria4.webp",
    titulo: "Hinchada",
    descripcion: "Hinchada en la cancha"
  },
  {
    src: "assets/galeria/galeria5.webp",
    titulo: "Inferiores CAE",
    descripcion: "Inferiores CAE del torneo relámpago del '69"
  },
  {
    src: "assets/galeria/galeria6.webp",
    titulo: "Torneo relámpago",
    descripcion: "Preparativos para el torneo relámpago del '69"
  },
  {
    src: "assets/galeria/galeria7.webp",
    titulo: "Tributo a Elsa",
    descripcion: "Colocacion de la placa en conmemoración a Elsa"
  },
  {
    src: "assets/galeria/galeria8.webp",
    titulo: "Inferiores CAE",
    descripcion: "Inferiores CAE del torneo relámpago del '69"
  },
  {
    src: "assets/galeria/galeria9.webp",
    titulo: "Torneo relámpago",
    descripcion: "Acto de introducción al torneo relámpago del '69"
  },
  { 
    src: "assets/galeria/galeria10.webp",
    titulo: "Hincha del club",
    descripcion: 'Hincha del club viendo un partido en "La Trampera"'
  },
  {
    src: "assets/galeria/galeria11.webp",
    titulo: "Inferiores CAE",
    descripcion: "Inferiores CAE del torneo relámpago del '69"
  },
  {
    src: "assets/galeria/galeria12.webp",
    titulo: "Jugadores",
    descripcion: "Jugadores en la previa del torneo relámpago del '69"
  },
  {
    src: "assets/galeria/galeria13.webp",
    titulo: "Camiseta",
    descripcion: "Camiseta oficial del CAE"
  },
  {
    src: "assets/galeria/galeria14.webp",
    titulo: "Torneo relámpago",
    descripcion: "Palco de premios del torneo relámpago del '69"
  },
  {
    src: "assets/galeria/galeria15.webp",
    titulo: "Campeonato",
    descripcion: "Festejo del campeonato"
  },
  {
    src: "assets/galeria/galeria16.webp",
    titulo: "Torneo relámpago",
    descripcion: "Entrada a un partido del torneo relámpago del '69"
  },
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

  imagenes.forEach((data) => {
    const div = document.createElement("div");
    div.classList.add("card", "m-2", "h-100");
    div.innerHTML = `
      <img src="${data.src}" class="card-img-top" alt="${data.titulo}" loading="lazy">
      <div class="card-body text-center">
        <h5 class="card-title">${data.titulo}</h5>
        <p class="card-text">${data.descripcion}</p>
      </div>
    `;
    galeriaInfinita.appendChild(div);
  });
});