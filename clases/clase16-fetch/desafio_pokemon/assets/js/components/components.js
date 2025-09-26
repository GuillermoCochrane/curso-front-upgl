import { $, createElement, createImage, createButton  } from '../utilities/dom.js';

// Crea componente del header de la tarjeta del Pokemon

export function createCardHeader(id) {
    const $cardHeader = createElement('header', 'card-header text-center');
    const $span = createElement('h5', 'text-muted fw-semibold', `#${id}`);
    $cardHeader.append($span);
    return $cardHeader;
}

// Crea componente de datos del Pokemon
export function createCardInfo(nombre,id) {
    const $cardInfo = createElement('div', 'card-body');
    const $title = createElement('h5', 'card-title product-card-title',  nombre ? nombre : ' Pokemon Generico', false);
    const $button = createButton('Ver Detalles', 'btn btn-outline-dark', null, 'modal', '#detallesModal',  id ? id : 'pokemon-generico');
    $cardInfo.append($title, $button);
    return $cardInfo;
}

// Crea componente tarjeta de Pokemon
export function createProductCard(pokemon) {
    const $productCard = createElement('article', 'card product-card m-3', null, false, null, pokemon.types);
    const $header = createCardHeader(pokemon.id);
    const $image = createImage(pokemon.sprites ? pokemon.sprites.front_default : './assets/img/default.png', pokemon.name ? pokemon.name : 'Pokemon Génerico', 'card-img-top');
    const $cardInfo = createCardInfo(pokemon.name, pokemon.id);
    $productCard.append($header,$image, $cardInfo);
    return $productCard;
}

// Crea Seccion de tarjetas de Pokemon
export function createCardSection(pokemones) {
    const $section = $(`#pokemons`);
    for (const pokemon of pokemones) {
        const $productCard = createProductCard(pokemon);
        $section.append($productCard);
    };
}