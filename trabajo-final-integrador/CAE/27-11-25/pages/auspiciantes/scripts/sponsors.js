const auspiciantes = [
    { id: 1, auspiciante: "Dutto & Cheerham", logo: "dutto_cheetham.webp" },
    { id: 2, auspiciante: "Parrilla: La conquista de la vaca", logo: "la_conquista_de_la_vaca.webp" },
    { id: 3, auspiciante: "Masi Neumáticos", logo: "masi_neumaticos.webp" },
    { id: 4, auspiciante: "RM Automotores", logo: "RM_automotores.webp" },
    { id: 5, auspiciante: "Ros Sport", logo: "ros_sport.webp" },
];

// Helpers para manipular el DOM

// Obtener elemento del DOM
function $(selector) {
    return document.querySelector(selector);
}

// Obtener todos los elementos DOM
function $$(selector) {
    return document.querySelectorAll(selector);
}

// Crea elementos del DOM
function createElement(tagName, className = null, content = null, isHTML = false, id = null) {
    const element = document.createElement(tagName);
    className && (element.className = className);
    id && (element.id = id);
    if (content !== null) {
        isHTML ? (element.innerHTML = content) : (element.textContent = content);
    }
    return element;
}

// Crea elemento de imagen
function createImage(url = null , nombre = null, className = null, id = null) {
    const image = createElement('img', className, null, false, id);
    url && (image.src = url);
    const backdropMsg = "Imagen de respaldo";
    image.alt = nombre ? nombre : backdropMsg;
    image.title = nombre ? nombre : backdropMsg;
    image.loading = "lazy";
    image.onerror = function() {
        this.onerror = null;
        this.src = './assets/sponsors/default.png';
        this.alt = nombre ? `${nombre} - ${backdropMsg}` : backdropMsg;
        this.title = nombre ? `${nombre} - ${backdropMsg}` : backdropMsg;
    };
    return image;
}

// Función auxiliar para verificar existencia de archivos
async function verifyFileExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}

// Función para generar el carousel infinito
async function generarCarouselInfinito() {
    const track = $('#auspiciantes-track');
    const auspiciantesDuplicados = [...auspiciantes, ...auspiciantes, ...auspiciantes, ...auspiciantes];
    const path = './assets/sponsors/';
    const image = `${path}default.webp`;
    for (const auspiciante of auspiciantesDuplicados) {
        const $auspiciante = createElement('article', 'auspiciante-item');
        const logo = `${path}${auspiciante.logo}`;

        if (await verifyFileExists(logo))  image = logo;

        const $logo = createImage(image, auspiciante.auspiciante, 'auspiciante-logo');
        const $span = createElement('span', 'text-muted', auspiciante.auspiciante);
        $auspiciante.append($logo, $span);
        track.append($auspiciante);
    }
}

// Generar el carousel cuando la página cargue
document.addEventListener('DOMContentLoaded', async() => await generarCarouselInfinito());