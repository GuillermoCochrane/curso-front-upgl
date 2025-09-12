import { $, createElement, createImage, createButton } from '../utilities/dom.js';
import { filterProduct, capitalizeWords } from '../utilities/utilities.js';

// Crea componente de datos del producto
export function createCardInfo(nombre, descripcion, id) {
    const $cardInfo = createElement('div', 'card-body');
    const $title = createElement('h5', 'card-title product-card-title');
    const $text = createElement('p', 'card-text product-card-text');
    const $button = createButton('Ver Detalles', 'btn btn-dark', 'btn-ver-detalles', 'modal', 'detallesModal');
    $title.textContent = nombre ? nombre : 'Zapatilla Generica';
    $text.textContent = descripcion ? descripcion : 'Descripción de la zapatilla';
    $button.setAttribute('data-zapatilla', id ? id : 'zapatilla-generica');
    $cardInfo.append($title, $text, $button);
    return $cardInfo;
}

// Crea componente de producto
export function createProductCard(product) {
    const $productCard = createElement('article', 'card product-card');
    const $image = createImage(product.url ? product.url : './assets/img/default.png', product.nombre ? product.nombre : 'Zapatilla Generica', 'card-img-top');
    const $cardInfo = createCardInfo(product.nombre, product.descripcion, product.id);
    $productCard.append($image, $cardInfo);
    return $productCard;
}

// Crea seccion de productos
export function createProductSection(section, counter) {
    const $section = $(`#${section}`);
    let aux = section
    if (section === 'new-balance') aux = 'New Balance';
    const products = filterProduct("marca", aux);
    /* text-end p-3 bg-danger text-light */
    const style = counter % 2 !== 0 ? 'text-end p-3 bg-danger text-light' : 'text-start p-3 bg-dark text-light';
    const $sectionTitle = createElement('h2', style, capitalizeWords(aux));
    const $sectionProducts = createElement('div', 'row justify-content-evenly p-4');
    for (const product of products) {
        const $productCard = createProductCard(product);
        $sectionProducts.append($productCard);
    };
    $section.append($sectionTitle, $sectionProducts);
}
