import {$, $$, applyBackgroundColor} from '../utilities/dom.js';
import { createModalTypesBadges, createModalAbilitiesList, generateMoveTable, generateGenerationButtons, generateGameButtons } from '../components/components.js';
import { dataFetcher, fetchAbilityDetails } from './dataFetcher.js';
import { generations, games } from '../data/generationsData.js';
import { formatVersionName } from '../utilities/formatData.js';

// Función que maneja el modal de Pokemon
export function modalHandler() {
  const $container = $('#pokemons');
  // Escuchamos todos los click en el contenedor de tarjetas
  $container.addEventListener('click', async (e) => {
    const $clickedElement = e.target.closest('[data-pokemon]'); //capturamos el botón con data-pokemon en el que se hizo click
    if (!$clickedElement) return;

    // Fetch individual (datos siempre actualizados)
    const id = $clickedElement.getAttribute('data-pokemon'); // Obtenemos el id del Pokemon
    const {pokemons} = await dataFetcher(`https://pokeapi.co/api/v2/pokemon/${id}`, false); // Obtenemos los datos del Pokemon
    
    // Cargamos los datos del modal
    loadModalData(pokemons);
  });
}

// Función que carga los datos del modal
function loadModalData(pokemon) {
    modalHeaderData(pokemon.id, pokemon.name, pokemon.types);
    modalCarouselData(pokemon.sprites, pokemon.name, pokemon.id);
    modalStatsData(pokemon.stats, pokemon.height, pokemon.weight);
    modalAbilitiesData(pokemon.abilities);
    
    // generateGenerationButtons(generations, (gen) => loadGenerationMoves(gen, pokemon.moves));
    // loadGenerationMoves(generations[0], pokemon.moves, pokemon.types);
    
    generateGameButtons(games, (game) => loadGameMoves(game, pokemon.moves, pokemon.types));
    loadGameMoves(games[0], pokemon.moves, pokemon.types); // Primer juego por defecto
}

// Función que carga los datos del header del modal
function modalHeaderData(id,name, types) {
    // Header
    const $modalHeader = $('#modal-header');
    const $pokemonID = $('#modal-header span');
    const $pokemonName = $('#modal-header h2');
    const $accordionSummary = $('.games-filter summary');
    applyBackgroundColor($modalHeader, types, true, 90);
    applyBackgroundColor($accordionSummary, types, true, 270);

    $pokemonID.textContent = `#${id.toString().padStart(3, '0')}`;
    $pokemonName.textContent = name;
    
    createModalTypesBadges(types);
}

// Función que carga los datos del carrusel del modal
function modalCarouselData(sprites, name, id) {
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
function modalStatsData(stats, height, weight) {
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
function modalAbilitiesData(abilities) {
  createModalAbilitiesList(abilities, fetchAbilityDetails);
}

function filterMovesByGeneration(moves, generation) {
  const filteredMoves = [];
  let counter = 0;
  for (const move of moves) {
    for (const detail of move.version_group_details) {
      if (generation.includes(detail.version_group.name)) {
        const arrayLength = filteredMoves.length;
        const lastPosition = arrayLength - 1;
        counter++
        if (lastPosition >= 0) {
          const lastMove = filteredMoves[lastPosition];
          
          if (lastMove.name === move.move.name) {
            // Verificar si el método YA EXISTE
            const methods = lastMove.method.split(', ');
            const newMethod = detail.move_learn_method.name;
            
            if (!methods.includes(newMethod)) {
              // Si el método es NUEVO, agregarlo
              lastMove.method += `, ${newMethod}`;
            }
            
            // Verificar si la versión YA EXISTE
            const versions = lastMove.version.split('-');
            const newVersion = detail.version_group.name;
            
            if (!versions.includes(newVersion)) {
              // Si la versión es NUEVA, agregarla
              lastMove.version += `-${newVersion}`;
            }
          } else {
            // Agregar nuevo movimiento
            filteredMoves.push({
              name: move.move.name,
              level: detail.level_learned_at,
              method: detail.move_learn_method.name,
              version: detail.version_group.name
            });
          }
        } else {
          // Primer movimiento
          filteredMoves.push({
            name: move.move.name,
            level: detail.level_learned_at,
            method: detail.move_learn_method.name,
            version: detail.version_group.name
          });
        }
      }
    }
  };
  
  return filteredMoves;
}

// Función que maneja la carga de datos de la tabla de movimientos
export function loadGenerationMoves(generation, moves, types = null) {
  // 1. Filtrar movimientos
  const filteredMoves = filterMovesByGeneration(moves, generation.versions);
  
  // 2. Actualizar header de la tabla
  const $header = $('#generation-header');
  types && applyBackgroundColor($header, types, true, 90);

  const formattedVersions = generation.versions.map(formatVersionName).join(' / ');
  
  $header.textContent = `${generation.name} - ${formattedVersions}`;
  
  // 3. Generar filas
  generateMoveTable(filteredMoves);
  
  // 4. Actualizar botón activo
  updateActiveGenerationButton(generation.id);
}

function updateActiveGenerationButton(activeId) {
  // Remover active de todos los botones
  const $buttons = $$('#generation-buttons button');
  for (const $button of $buttons) {
    $button.classList.remove('active');
  }
  
  // Agregar active al botón clickeado
  const $activeBtn = $(`[data-generation="${activeId}"]`);
  if ($activeBtn) $activeBtn.classList.add('active');
}

function filterMovesByGame(moves, gameId) {
  const movesList = [];
  
  for (const move of moves) {
    for (const detail of move.version_group_details) {
      // ✅ FILTRADO DIRECTO: Si coincide con el juego específico
      if (detail.version_group.name === gameId) {
        movesList.push({
          name: move.move.name,
          level: detail.level_learned_at,
          method: detail.move_learn_method.name,
          version: detail.version_group.name // ← Solo UNA versión
        });
      }
    }
  }
  
  return movesList;
}

export function loadGameMoves(game, moves) {
  // 1. Filtrar movimientos para el juego específico
  const filteredMoves = filterMovesByGame(moves, game.id);
  
  // 2. Actualizar header
  const $header = $('#generation-header');
  $header.textContent = game.name;
  $header.style.backgroundColor = game.color; // Color del juego
  $header.style.setProperty('--font-color', `var(${game.font})`);
  
  // 3. Generar tabla (SIN agrupación compleja)
  generateMoveTable(filteredMoves);
  
  // 4. Actualizar botón activo
  updateActiveGameButton(game.id);
}

function updateActiveGameButton(activeId) {
  const $buttons = $$('#games-buttons button');
  for (const $button of $buttons) {
    $button.classList.remove('active');
  }
  
  const $activeBtn = $(`[data-game="${activeId}"]`);
  if ($activeBtn) $activeBtn.classList.add('active');
}