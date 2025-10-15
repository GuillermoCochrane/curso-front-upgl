import { $, createElement, createImage, createButton, createCell, createBadge, applyBackgroundColor  } from '../utilities/dom.js';
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
export function generateVersionButtons(versions, filterVersions, allButtonColor) {
    const $container = $("#version-buttons")
    $container.innerHTML = "";

    for (const version of versions) {
        const $button = createElement("button", "btn btn-sm mb-2 text-center", version.name);
        $button.setAttribute("data-game", version.id);
        $button.style.borderColor = version.color !== null ? version.color : allButtonColor;
        $button.style.setProperty("--games-button", `${version.color !== null ? version.color : allButtonColor}`);
        $button.style.setProperty("--font-color", `var(${version.font})`);

        // Al hacer clic, aplica el filtro
        $button.addEventListener("click", () => filterVersions(version));
        $container.appendChild($button);
    }
}

// Crea el selector de métodos de encuentro del sistema de filtrado de ubicaciones
export function generateMethodSelect(methods, handleMethodChange, currentMethod) {
    const $select = $('#encounter-method');
    $select.innerHTML = '<option value="">Todos los métodos</option>';

    for (const method of methods) {
        const $option = createElement("option", null, formatText(method));
        $option.value = method;
        $select.appendChild($option);
    }
    $select.value = currentMethod || '';

    $select.addEventListener('change', e => handleMethodChange(e.target.value));
}

// Función que renderiza la lista de ubicaciones en el modal
export function displayLocations(locations, individualGames, types) {
    const $container = $("#pokemon-locations");
    $container.innerHTML = "";

    if (!locations.length) {
        const $emptyLocations = createElement("p", "text-center text-muted", "No hay ubicaciones disponibles con los filtros seleccionados.");
        $container.appendChild($emptyLocations);
        return;
    }

    // Crear cada ubicación
    for (const area of locations) {
        const $details = createLocationsCards(area, individualGames, types);
        $container.appendChild($details);
    }
}

// Función que crea las tarjetas de las ubicaciones
export function createLocationsCards(area, individualGames, types){
    const $details = createElement("details", "location-card");
    $details.setAttribute("name", "location-group"); // agrupamos para que solo se abra uno a la vez

    // Summary (título del área)
    const $summary = createElement("summary", "location-summary d-flex justify-content-between align-items-center text-dark");
    $summary.textContent = formatText(area.name); // Ej: cerulean-city-area → Cerulean City Area
    applyBackgroundColor($summary, types, true, 135);

    const $content = createElement("div", "location-content mt-2");

    // Crear listado de versiones y métodos
    for (const version of area.versions) {
        const gameData = individualGames.find(game => game.id === version.name);

        const $versionBlock = createLocationsCardsInfo(version, gameData);
        $content.appendChild($versionBlock);
    }

    $details.appendChild($summary);
    $details.appendChild($content);
    return $details;
}

// Función que crea la información de las tarjetas de ubicaciones
export function createLocationsCardsInfo(version, gameData) {
  // Creamos el contenedor principal
    const $versionTable = createElement("table", "location-table table table-sm mb-3");

    // --- HEADER DOBLE: nombre del juego y nombres de columnas ---
    const $thead = createLocationsTableHeader(version, gameData);

    // --- BODY: datos de encuentros ---
    const $tbody = createElement("tbody");
    for (const encounter of version.encounters) {
        const $row = createLocationsTableRows(encounter);
        $tbody.appendChild($row);
    }

    $versionTable.append($thead, $tbody);
    return $versionTable;
}