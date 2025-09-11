import { $, $$, createElement, createImage, createButton } from '../utilities/dom.js';

// Crea componente de datos del producto
export function createCardInfo(nombre, descripcion, id) {
    const $cardInfo = createElement('div', 'card-body');
    const $title = createElement('h5', 'card-title');
    const $text = createElement('p', 'card-text');
    const $button = createButton('Ver Detalles', 'btn btn-dark', 'btn-ver-detalles', 'modal', 'detallesModal');
    $title.textContent = nombre ? nombre : 'Zapatilla Generica';
    $text.textContent = descripcion ? descripcion : 'Descripción de la zapatilla';
    $button.setAttribute('data-zapatilla', id ? id : 'zapatilla-generica');
    $cardInfo.append($title, $text, $button);
    return $cardInfo;
}