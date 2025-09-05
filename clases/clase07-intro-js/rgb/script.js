
// Selecciona los elementos de los inputs 
const rojo = document.getElementById('input-rojo');
const verde = document.getElementById('input-verde');
const azul = document.getElementById('input-azul');
// Selecciona los elementos donde se mostrarán los valores
const rValue = document.getElementById('valor-rojo');
const gValue = document.getElementById('valor-verde');
const bValue = document.getElementById('valor-azul');
// Selecciona el elemento donde se mostrará el color RGB
const rgbString = document.getElementById('rgb-salida');

// Actualiza el fondo, los valores y el color de los inputs
function cambiarColores() {
    // Obtiene los valores actuales
    const rojoValor = rojo.value;
    const verdeValor = verde.value;
    const azulValor = azul.value;

    // Actualiza los valores mostrados
    rValue.textContent = rojoValor;
    gValue.textContent = verdeValor;
    bValue.textContent = azulValor;

    // Actualiza el fondo de la página y el texto RGB
    const rgb = `rgb(${rojoValor}, ${verdeValor}, ${azulValor})`;
    document.body.style.background = rgb;
    rgbString.textContent = rgb;

    // Actualiza el color de fondo
    rojo.style.background = `rgb(${rojoValor},0,0)`;
    verde.style.background = `rgb(0,${verdeValor},0)`;
    azul.style.background = `rgb(0,0,${azulValor})`;

    // Actualiza el thumb de fondo
    rojo.style.setProperty('--thumb-color', `rgb(${rojoValor},0,0)`);
    verde.style.setProperty('--thumb-color', `rgb(0,${verdeValor},0)`);
    azul.style.setProperty('--thumb-color', `rgb(0,0,${azulValor})`);
}

// Escucha los cambios en los inputs y actualiza la función
[rojo, verde, azul].forEach(input => {
    input.addEventListener('input', cambiarColores);
});

[rojo, verde, azul].forEach(function(input){
    input.addEventListener('change', cambiarColores);
});

// Inicializa la función al cargar la página
cambiarColores();