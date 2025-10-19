import {$, $$, applyBackgroundColor} from '../utilities/dom.js';
import { createModalTypesBadges, generateGameButtons } from '../components/components.js';
import { dataFetcher } from './dataFetcher.js';
import { games } from '../data/generationsData.js';

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