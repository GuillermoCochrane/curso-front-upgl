import {$, $$, applyBackgroundColor} from '../utilities/dom.js';
import { createModalTypesBadges, createModalAbilitiesList, generateMoveTable, generateGameButtons, generateVersionButtons, generateMethodSelect, displayLocations } from '../components/components.js';
import { dataFetcher, fetchAbilityDetails } from './dataFetcher.js';
import { games, individualGames } from '../data/generationsData.js';
import { arraySorter } from '../utilities/formatData.js';

let cachedEncounters = [];
let currentPokemon = null;
let currentVersion = null;
let currentMethod = null;

// Función que maneja el modal de Pokemon
export function modalHandler() {
  const $container = $('#pokemons');
  // Escuchamos todos los click en el contenedor de tarjetas
  $container.addEventListener('click', async (event) => {
    const $clickedElement = event.target.closest('[data-pokemon]'); //capturamos el botón con data-pokemon en el que se hizo click
    if (!$clickedElement) return;

    // Fetch individual (datos siempre actualizados)
    const id = $clickedElement.getAttribute('data-pokemon'); // Obtenemos el id del Pokemon
    const {pokemons} = await dataFetcher(`https://pokeapi.co/api/v2/pokemon/${id}`, false); // Obtenemos los datos del Pokemon
    
    // Cargamos los datos del modal
    loadModalData(pokemons);
  });
}

// Carga completa del modal
export function loadModalData(pokemon) {
  currentPokemon = pokemon;
  cachedEncounters = []; // Limpia cache para nuevo Pokémon

  modalHeaderData(pokemon.id, pokemon.name, pokemon.types);
  modalCarouselData(pokemon.sprites, pokemon.name, pokemon.id);
  modalStatsData(pokemon.stats, pokemon.height, pokemon.weight);
  modalAbilitiesData(pokemon.abilities);
  sortingHandler();

  generateGameButtons(games, game => loadGameMoves(game, pokemon.moves, pokemon.types));
  loadPokemonLocations(pokemon.id, pokemon.types);
  loadGameMoves(games[0], pokemon.moves, pokemon.types); // Primer juego por defecto
}

// Función que carga los datos del header del modal
export function modalHeaderData(id,name, types) {
    // Header
    const $modalHeader = $('#modal-header');
    const $pokemonID = $('#modal-header span');
    const $pokemonName = $('#modal-header h2');
    const $accordionsSummary = $$('.games-filter summary');
    applyBackgroundColor($modalHeader, types, true, 90);
    for (const $accordionSummary of $accordionsSummary) {
      applyBackgroundColor($accordionSummary, types, true, 270); 
    }

    $pokemonID.textContent = `#${id.toString().padStart(3, '0')}`;
    $pokemonName.textContent = name;
    
    createModalTypesBadges(types);
}

// Función que carga los datos del carrusel del modal
export function modalCarouselData(sprites, name, id) {
  const $front = $('#carousel-front');
  const $back = $('#carousel-back');
  const $official = $('#carousel-official');
  const textData = {
      front: 'Vista frontal de ',
      back: 'Vista trasera de',
      official: 'Arte oficial de'
  }

  $front.src = sprites.front_default;
  $front.alt = textData.front + name;
  $front.title =  textData.front + name;
  $front.style.viewTransitionName = `pokemon-image-${id}`;

  $back.src = sprites.back_default;
  $back.alt = textData.back + name;
  $back.title = textData.back + name;

  $official.src = sprites.other['official-artwork'].front_default;
  $official.alt = textData.official + name;
  $official.title = textData.official + name;
}

// Función que carga las stats del modal
export function modalStatsData(stats, height, weight) {
  const $hp = $('#stat-hp');
  const $hpValue = $('#stat-hp-value');
  const $atk = $('#stat-attack');
  const $atkValue = $('#stat-attack-value');
  const $def = $('#stat-defense');
  const $defValue = $('#stat-defense-value');
  const $spd = $('#stat-speed');
  const $spdValue = $('#stat-speed-value');
  const $satk = $('#stat-special-attack');
  const $satkValue = $('#stat-special-attack-value');
  const $sdef = $('#stat-special-defense');
  const $sdefValue = $('#stat-special-defense-value');
  const $height = $('#modal-height');
  const $weight = $('#modal-weight');

  $hp.value = stats[0].base_stat;
  $hpValue.textContent = stats[0].base_stat;
  $atk.value = stats[1].base_stat;
  $atkValue.textContent = stats[1].base_stat;
  $def.value = stats[2].base_stat;
  $defValue.textContent = stats[2].base_stat;
  $spd.value = stats[5].base_stat; 
  $spdValue.textContent = stats[5].base_stat;
  $satk.value = stats[3].base_stat;
  $satkValue.textContent = stats[3].base_stat;
  $sdef.value = stats[4].base_stat;
  $sdefValue.textContent = stats[4].base_stat;
  $height.textContent = `${height / 10} m`;
  $weight.textContent = `${weight / 10} kg`;
}

// Función que carga las habilidades del modal
export function modalAbilitiesData(abilities) {
  createModalAbilitiesList(abilities, fetchAbilityDetails);
}

// Función que filtra los movimientos por juego
export function filterMovesByGame(moves, gameId) {
  //Instanciamos un Map (objeto literal con métodos especiales como has, set, get) para almacenar los movimientos, ya que no permite duplicados
  const movesMap = new Map();
  
  //Recorremos todos los movimientos del pokemon
  for (const move of moves) {
    //Recorremos todas las versiones del juego dentro de cada movimiento
    for (const detail of move.version_group_details) {
      // Filtramos por el juego específico 
      if (detail.version_group.name === gameId) {
        const moveName = move.move.name;
        
        //Si es la primera vez que se encuentra el movimiento...
        if (!movesMap.has(moveName)) {
          // Creamos entrada en el mapa con array de métodos vacío
          movesMap.set(moveName, {
            name: moveName,
            methods: [] // ← Aquí acumularemos todos los métodos de aprendizaje
          });
        }

        // Agregamos este método específico al movimiento
        movesMap.get(moveName).methods.push({
          method: detail.move_learn_method.name,
          level: detail.level_learned_at
        });
      }
    }
  }

  // Convertimos el Map a Array para facilitar su uso
  return Array.from(movesMap.values());
}

// Función que actualiza los movimientos de un juego
export function loadGameMoves(game, moves, sortBy='level', ascending=true) {
  // 1. Filtrar movimientos para el juego específico
  const filteredMoves = filterMovesByGame(moves, game.id);
  const orderedMoves = arraySorter(filteredMoves, sortBy, ascending);
  
  // 2. Actualizar header
  const $header = $('#generation-header');
  $header.textContent = game.name;
  $header.style.backgroundColor = game.color; // Color del juego
  $header.style.setProperty('--font-color', `var(${game.font})`);
  
  // 3. Generar tabla (SIN agrupación compleja)
  generateMoveTable(orderedMoves);
  
  // 4. Actualizar botón activo
  updateActiveGameButton(game.id);
}

// Función que actualiza el botón activo en la tabla de movimientos
export function updateActiveGameButton(activeId) {
  const $buttons = $$('#games-buttons button');
  for (const $button of $buttons) {
    $button.classList.remove('active');
  }
  
  const $activeBtn = $(`[data-game="${activeId}"]`);
  if ($activeBtn) $activeBtn.classList.add('active');
}

// Función que maneja el ordenamiento de las columnas de la tabla de movimientos
export function sortingHandler() {
  const $movesHeader = $('#moves-table-header'); // capturamos el header de la tabla de movimientos
  
  // delegamos el evento click al header
  $movesHeader.addEventListener('click', (event) => {
    // capturamos la columna que se ha pulsado
    const $clickedHeader = event.target.closest('th[data-sort-target]');
    // Si no se ha pulsado sobre ninguna columna, no hacemos nada
    if (!$clickedHeader) return;
    
    const sortBy = $clickedHeader.getAttribute('data-sort-target'); // Obtenemos por que columna queremos ordenar
    const isAscending = $clickedHeader.getAttribute('data-ascending') === 'true'; // Obtenemos si está ordenado ascendente o descendente
    const newAscending = !isAscending;
    
    // Actualizar UI del header
    updateSortHeaders(sortBy, newAscending);
    
    // Re-ordenar y refrescar
    const $activeGame = $('#games-buttons .active'); // capturamos el botón activo
    const game = games.find(g => g.id === $activeGame.getAttribute('data-game')); // obtenemos los datos del juego activo
    loadGameMoves(game, currentPokemon.moves, sortBy, newAscending); // actualizamos la tabla de movimientos
  });
}

//Función que actualiza los headers de la tabla de movimientos
export function updateSortHeaders(activeSort, newAscending) {
  const $allHeaders = $$('#moves-table-header th[data-sort-target]');// capturamos todos los headers de  las columnas de la tabla para reccorrrerlos

  for (const $header of $allHeaders) {
    const isActive = $header.getAttribute('data-sort-target') === activeSort; // buscamos el header que coincide
    $header.classList.remove('active-sort');
    if (isActive) {
      // Si es el header activo, actualizamos sus atributos
      $header.setAttribute('data-ascending', newAscending.toString());
      $header.classList.add('active-sort');
    }
  };
}

// Función que carga las ubicaciones donde se encuentra el Pokemon
async function loadPokemonLocations(pokemonId, types) {
  // 1. Fetch (solo cuando no hay cache o cambió el Pokémon)
  if (!cachedEncounters.length || currentPokemon.id !== pokemonId) {
    const { pokemons: encounters } = await dataFetcher(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}/encounters`,
      false
    );
    cachedEncounters = encounters;
  }
    // 2. procesamos los datos de las ubicaciones
    const processedLocations = processLocationData(cachedEncounters);

    // 3. filtramos los datos de las ubicaciones según el método y la versión
    const filteredLocations = filterLocationsData(processedLocations, currentVersion, currentMethod);

    // 4. extraemos los métodos de encuentro únicos para el select
    const methods = getUniqueMethods(processedLocations);

    // 5. generamos el control de filtrado
    generateMethodSelect(methods, handleMethodChange, currentMethod);
    generateVersionButtons(individualGames, handleVersionChange);

    // 6. renderizamos los resultados
    displayLocations(filteredLocations, individualGames, types);

    // 7. actualizamos el botón activo
    updateActiveVersionButton(currentVersion);
}

// Función que procesa los datos de las ubicaciones
export function processLocationData(data) {
  const processed = [];

  for (const area of data) {// recorremos cada area 
    const areaInfo = {
      name: area.location_area.name, // nombre de la area
      versions: []
    };

    for (const version of area.version_details) { // recorremos cada version de la area
      const versionInfo = {
        name: version.version.name, // nombre de la version del juego
        encounters: []
      };

      for (const encounter of version.encounter_details) { // recorremos cada encuentro de la version
        const encounterInfo = {
          method: encounter.method.name,  // nombre del método de encuentro
          chance: encounter.chance,       // probabilidad del encuentro
          min_level: encounter.min_level, // nivel mínimo del encuentro
          max_level: encounter.max_level, // nivel máximo del encuentro
          conditions: encounter.condition_values.map(cond => cond.name) // condiciones del encuentro
        };

        versionInfo.encounters.push(encounterInfo); // agregamos el encuentro al objeto de la version
      }

      // Eliminamos duplicados de encuentros idénticos (mismo método + condiciones + nivel)
      const uniqueEncounters = new Map(); // instanciamos un mapa para almacenar los encuentros, ya que no permite duplicados
      for (const encounter of versionInfo.encounters) { // recorremos cada encuentro
        const key = `${encounter.method}-${encounter.min_level}-${encounter.max_level}-${encounter.conditions.join(",")}`; //varaible auxiliar para detectar duplicados
        if (!uniqueEncounters.has(key)) uniqueEncounters.set(key, encounter); // si no existe, lo agregamos
      }
      versionInfo.encounters = [...uniqueEncounters.values()]; // actualizamos la lista de encuentros, sin duplicados

      areaInfo.versions.push(versionInfo); // agregamos la version al objeto de la area
    }

    processed.push(areaInfo); // agregamos la area al objeto procesado
  }

  return processed;
}

// Función que flitra los datos de las ubicaciones, por juego y método
const filterLocationsData = (data, selectedVersion, selectedMethod) => {
  const filteredData = data.map(area => {
  
    const filterByVersions = area.versions.filter(version => !selectedVersion || version.name === selectedVersion ) //Filtramos la version que coincide con la seleccionada o si no se ha seleccionado nada
    const fliterByMethod =  filterByVersions.map(version => ({ 
        ...version,
        encounters: version.encounters.filter(encounter =>
          !selectedMethod || encounter.method === selectedMethod // Filtramos los encuentros que coinciden con el método seleccionado o si no se ha seleccionado nada
        )
    }))
    const filteredEncounters = fliterByMethod.filter(version => version.encounters.length > 0); //descartamos los que no tengan encuentros

    // devolvemos solo áreas con versiones válidas
    return filteredEncounters.length
      ? { ...area, versions: filteredEncounters }
      : null;
  })
  return filteredData.filter(Boolean); // eliminamos nulls
}

// Función que actualiza el método de encuentro del sistema de filtrado de ubicaciones
export function handleMethodChange(selectedValue) {
  currentMethod = selectedValue || null;
  loadPokemonLocations(currentPokemon.id, currentPokemon.types);
}

// Función que actualiza versión del juego, del sistema de filtrado de ubicaciones
export function handleVersionChange(version) {
  currentVersion = version?.id || null;
    loadPokemonLocations(currentPokemon.id, currentPokemon.types);
}

// Función que devuelve un array con los métodos de encuentro únicos (para el <select>)
function getUniqueMethods(data) {
  return [
    ...new Set( // usamos un Set porque solo almacena valores únicos, eliminando duplicados automáticamente
      data.flatMap(area => // recorremos cada área; flatMap aplana el resultado, evitando arrays anidados
        area.versions.flatMap(version => // recorremos cada versión dentro de la misma área
          version.encounters.map(encounter => encounter.method) // extraemos el nombre del método de encuentro
        )
      )
    )
  ];
}

// Función que actualiza el botón activo en la tabla de ubicaciones (aplicar DRY con la de movimientos)
export function updateActiveVersionButton(activeId) {
  const $buttons = $$('#version-buttons button');
  for (const $button of $buttons) {
    $button.classList.remove('active');
  }
  
  const $activeBtn = $(`[data-game="${activeId}"]`);
  if ($activeBtn) $activeBtn.classList.add('active');
}