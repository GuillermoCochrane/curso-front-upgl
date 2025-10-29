const auspiciantes = [
    { id: 1, auspiciante: "Dutto & Cheerham", logo: "dutto_cheetham.jpg" },
    { id: 2, auspiciante: "Parrilla: La conquista de la vaca", logo: "la_conquista_de_la_vaca.jpg" },
    { id: 3, auspiciante: "Masi Neumáticos", logo: "masi_neumaticos.jpg" },
    { id: 4, auspiciante: "RM Automotores", logo: "RM_automotores.jpg" },
    { id: 5, auspiciante: "Ros Sport", logo: "ros_sport.jpg" },
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
    if (nombre) {
        image.alt = nombre;
        image.title = nombre;
        image.onerror = function() {
            this.onerror = null;
            this.src = './assets/sponsors/default.png';
            this.alt = `${nombre} - Logo temporal`;
            this.title = `${nombre} - Logo temporal`;
        }
    };
    
    return image;
}