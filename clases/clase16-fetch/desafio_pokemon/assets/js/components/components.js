import { $, createElement, createImage, createButton, createCell, createBadge  } from '../utilities/dom.js';
import { formatText } from '../utilities/formatData.js';

// Crea componente del header de la tarjeta del Pokemon
export function createCardHeader(id) {
    const $cardHeader = createElement('header', 'card-header text-center');
    const $span = createElement('h5', 'text-muted fw-semibold', `#${id}`);
    $cardHeader.append($span);
    return $cardHeader;
}

// Crea componente de los tipos del Pokemon
export function createCardTypesBadges(types) {
    const $cardTypes = createElement('section', 'd-flex justify-content-center flex-wrap gap-2 mb-3');
    for (const type of types) {
        const $badge = createBadge('', type.type.name, [type], true);
        $cardTypes.append($badge);
    }
    return $cardTypes;
}

// Crea componente de datos del Pokemon
export function createCardInfo(nombre, id, tipos) {
    const $cardInfo = createElement('div', 'card-body text-center');
    const $title = createElement('h5', 'card-title product-card-title fw-bold text-capitalize fs-4',  nombre ? nombre : ' Pokemon Generico', false);
    const $typeContainer = createCardTypesBadges(tipos);
    const $button = createButton('Ver Detalles', 'btn btn-outline-light', null, 'modal', '#detallesModal',  id ? id : 'pokemon-generico');
    $cardInfo.append($title,$typeContainer, $button);
    return $cardInfo;
}

// Crea componente tarjeta de Pokemon
export function createProductCard(pokemon) {
    const $productCard = createElement('article', 'card product-card m-3', null, false, null, pokemon.types);
    const $image = createImage(pokemon.sprites ? pokemon.sprites.front_default : './assets/img/default.png', pokemon.name ? pokemon.name : 'Pokemon Génerico', 'card-img-top');
    $image.style.viewTransitionName = `pokemon-image-${pokemon.id}`;
    const $cardInfo = createCardInfo(pokemon.name, pokemon.id, pokemon.types);
    $productCard.append($image, $cardInfo);
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

// Crea seccion de badges de tipos en el modal
export function createModalTypesBadges(types) {
    const typesContainer = $('#modal-types');
    typesContainer.innerHTML = '';
    for (const type of types) {
        const $badge = createBadge('', type.type.name, [type], true);
        typesContainer.appendChild($badge);
    };
};

// Crea listado de habilidades en el modal
export async function createModalAbilitiesList(abilities, fetchAbilityDetails) {
    const abilitiesContainer = $('#abilities-list');
    abilitiesContainer.innerHTML = '';
    for (const ability of abilities) {
        const description = await fetchAbilityDetails(ability.ability.url);
        const $li = createElement('li', 'mb-2 p-2 rounded bg-light');
        const $abilityHeader = createAbiltyHeader(ability.ability.name, ability.is_hidden);
        const $abilityDescription = createElement('p', 'small text-muted mb-0', description );
        $li.append($abilityHeader, $abilityDescription);
        abilitiesContainer.appendChild($li);
    };
};

// Crea encabezado de habilidades en el modal
export function createAbiltyHeader(name, is_hidden) {
    const $abilityHeader = createElement('aside', 'd-flex justify-content-between align-items-center mb-1');
    const $abilityName = createElement('strong', 'text-capitalize', name);
    const badgeStyle = is_hidden ? 'bg-warning text-dark' : 'bg-primary';
    const badgeText = is_hidden ? 'Oculta' : 'Normal';
    const $badge = createBadge(badgeStyle, badgeText);
    $abilityHeader.append($abilityName, $badge);
    return $abilityHeader;
}

// Crea la tabla de movimientos
export function generateMoveTable(filteredMoves) {
    const $tableBody = $('#moves-table-body');
    $tableBody.innerHTML = '';

    let counter = 0;
    let $currentRow = createElement('tr');
    for (const move of filteredMoves) {
        counter++;
        const $row = createMoveRow(move.name, move.methods);
        $currentRow.append($row.name, $row.method);
        if (counter % 2 === 0 || counter === filteredMoves.length) {
            // Solo agregar celdas vacías si es la ÚLTIMA fila y es IMPAR
            if (counter === filteredMoves.length && counter % 2 !== 0) {
                $currentRow.append(createCell(''), createCell(''));
            }

            $tableBody.appendChild($currentRow);
            $currentRow = createElement('tr');
        }
    }
}

// Crea los elementos de una movimiento de la fila de movimientos
export function createMoveRow(name, methods) {
    const $name = createCell(formatText(name), 'text-capitalize');
    const $method = createCell("", 'd-flex flex-wrap justify-content-center');

    const methodReference = {
        'level-up': { 
            text: 'Level Up',
            style: 'bg-primary'
        },
        'machine': {
            text: 'Machine',
            style: 'bg-dark text-white'
        },
        'egg': {
            text: 'Egg',
            style: 'bg-warning text-dark'
        },
        'tutor': {
            text: 'Tutor',
            style: 'bg-info text-dark'
        },
        'stadium-surfing': {
            text: 'Stadium',
            style: 'bg-success text-white'
        }
    }

    for (const method of methods) {
        const dataReference = methodReference[method.method];
        const text = `${dataReference.text}${method.level > 0 ? ` [LVL ${method.level}]` : ''}`;
        const $badge = createBadge(dataReference.style, text);
        $method.append($badge);
    }

    return {
        name: $name,
        method: $method
    };
}

//Crea los botones de filtrado por juego
export function generateGameButtons(games, loadGameMoves) {
    const $container = $('#games-buttons');
    $container.innerHTML = '';

        for (const game of games) {
            const $button = createElement('button', 'btn btn-outline-primary btn-sm', game.name);
            $button.setAttribute('data-game', game.id);
            $button.style.borderColor = game.color;
            $button.style.setProperty('--games-button', `${game.color}`);
            $button.style.setProperty('--font-color', `var(${game.font})`);
            
            $button.addEventListener('click', () => loadGameMoves(game));
            $container.appendChild($button);
        }
}

// Crea botones de filtrado por versiones
export function generateVersionButtons(versions, filterVersions) {
    const container = $("#version-buttons")
    container.innerHTML = "";

    for (const version of versions) {
        const $button = createElement("button", "btn btn-sm mb-2 text-center", version.name);
        $button.setAttribute("data-game", version.id);
        $button.style.borderColor = version.color;
        $button.style.setProperty("--game-button", `${version.color}`);
        $button.style.setProperty("--font-color", `var(${version.font})`);

        // Al hacer clic, aplica el filtro
        $button.addEventListener("click", () => filterVersions(version));
        container.appendChild($button);
    }
}