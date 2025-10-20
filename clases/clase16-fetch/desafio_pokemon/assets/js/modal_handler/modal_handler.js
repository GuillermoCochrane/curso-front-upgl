import {$, $$, applyBackgroundColor} from '../utilities/dom.js';
import {  generateGameButtons, generateVersionButtons, generateMethodSelect, displayLocations } from '../components/components.js';
import { createModalTypesBadges } from '../components/modal/modal_abilities.js';
import { dataFetcher } from '../core/dataFetcher.js';
import { games, individualGames } from '../data/generationsData.js';
import { modalCarouselData, modalStatsData } from './modal_stats_handler.js';
import { modalAbilitiesData } from './modal_abilities_handler.js';
import { loadGameMoves, sortingHandler } from './modal_moves_handler.js';

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
  sortingHandler(currentPokemon);

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
    generateVersionButtons(individualGames, handleVersionChange, `var(--solid_${types[0].type.name})`);

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