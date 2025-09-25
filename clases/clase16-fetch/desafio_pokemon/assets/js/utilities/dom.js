// Funciones para manipular el DOM

// Obtener elemento DOM
export function $(selector) {
    return document.querySelector(selector);
}

// Obtener todos los elementos DOM
export function $$(selector) {
    return document.querySelectorAll(selector);
}

// Crea elemento DOM con su clase
export function createElement(tagName, className = null, content = null, isHTML = false, id = null, background = null) {
    const element = document.createElement(tagName);
    className && (element.className = className);
    id && (element.id = id);
    if (content !== null) {
        isHTML ? (element.innerHTML = content) : (element.textContent = content);
    }
    if (background) {
        if (  background.length === 1) {
            element.style.background = `var(--${background[0].type.name})`;
        } else {
            // Gradiente lineal entre los colores de los tipos
            const colores = background.map(colores => `var(--${colores.type.name})`).join(', ');
            element.style.background = `linear-gradient(145deg, ${colores})`;
        }
    }
    return element;
}

export function createImage(url = null , nombre = null, className = null, id = null) {
    const image = createElement('img', className, null, false, id);
    image.src = url;
    image.alt = nombre;
    return image;
}

export function createButton(text = null, className = null, id = null, toggle = null, target = null, dataPokemon = null) {
    const button = createElement('button', className, text, false, id);
    button.setAttribute('data-bs-toggle', toggle);
    button.setAttribute('data-bs-target', target);
    button.setAttribute('data-pokemon', dataPokemon);
    return button;
}