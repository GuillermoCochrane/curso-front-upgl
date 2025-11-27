//Controla la visibilidad del párrafo extendido de la historia del club
function configurarToggleHistoria() {
  const btnToggle = document.getElementById('toggleHistoria');
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

document.addEventListener('DOMContentLoaded', configurarToggleHistoria);