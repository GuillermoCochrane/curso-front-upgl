document.addEventListener('DOMContentLoaded', () => {
      cargarComisionDirectiva();   // Muestra comision directiva
});


//Función para mostrar comision directiva
const integrantesComision = [
  {
    nombre: "Cheetham Maximiliano",
    cargo: "Presidente",
  },
  {
    nombre: "Cuello Daniel",
    cargo: "Vicepresidente",
  },
  {
    nombre: "Pomba Vanesa",
    cargo: "Secretaria",
  },
  {
    nombre: "Gonzalez Camila",
    cargo: "Pro-Secretaria",
  },
  {
    nombre: "Cuello Adriana",
    cargo: "Tesorero",
  },
  {
    nombre: "Canavesio Analía",
    cargo: "Pro-Tesorero",
  },
  {
    nombre: "Massi Carlos",
    cargo: "Primer Vocal",
  },
  {
    nombre: "Dominguez Arlando",
    cargo: "Segundo Vocal",
  },
  {
    nombre: "Casali Bruno",
    cargo: "Tercer Vocal",
  },
  {
    nombre: "Gonzalez Roberto",
    cargo: "Vocal Suplente",
  },
  {
    nombre: "Anfossi Juan Pablo",
    cargo: "Vocal Suplente",
  },
  {
    nombre: "Molina Sergio",
    cargo: "Vocal Suplente",
  },
  {
    nombre: "Montiel Lino",
    cargo: "Revisadores de Cuentas",
  },
  {
    nombre: "Geuna Cristina",
    cargo: "Revisadores de Cuentas",
  },
  {
    nombre: "Molina Jorge",
    cargo: "Revisadores de Cuentas",
  },
  {
    nombre: "Actual Período",
    cargo: "Gestion (2024 - 2026)",
  },
];

// Función para renderizar los integrantes en el HTML
function cargarComisionDirectiva() {
  const container = document.getElementById("comision-directiva-container");

  integrantesComision.forEach(integrante => {
    const div = document.createElement("div");
    div.className = "col-sm-6 col-lg-3 mb-4";

    div.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${integrante.nombre}</h5>
          <p class="card-text">${integrante.cargo}</p>
        </div>
      </div>
    `;

    container.appendChild(div);
  });
}