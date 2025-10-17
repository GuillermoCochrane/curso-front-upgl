import { $ } from '../utilities/dom.js';
import { dataFetcher, searchDataFetcher } from './dataFetcher.js';
import { formatText } from '../utilities/formatData.js';
import { createCardSection } from '../components/components.js';

let allPokemonList = [];
let searchedPokemonList = [];

// Inicializar event listeners de búsqueda
export function initSearch() {
    const $seachform = $('#search-form');

    // Event listeners de búsqueda
    $seachform.addEventListener('submit', (e) => {
        e.preventDefault();
        handleSearch();
    });
}

// Cargar lista completa para autocomplete
export async function loadAllPokemon() {
    try {
        const data = await dataFetcher('https://pokeapi.co/api/v2/pokemon?limit=1302', false);
        allPokemonList = data.pokemons.results.map(pokemon => ({
            name: pokemon.name,
            id: pokemon.url.split('/').filter(Boolean).pop(),
            url: pokemon.url
        }));
        console.log('📋 Lista de Pokémon cargada:', allPokemonList.length);
        
    } catch (error) {
        console.error('Error cargando lista de Pokémon:', error);
    }
}

// Función principal de búsqueda
async function handleSearch() {
    try {
        const {pokemons} = await searchDataFetcher(searchedPokemonList);
        // Ocultar resultados de autocomplete y limpiar input
        $('#search-results').innerHTML = '';
        $('#pokemon-search').value = '';
        $(`#pokemons`).innerHTML = '';
        createCardSection(pokemons);
    } catch (error) {
        console.error('❌ Pokémon no encontrado:', error);
        //showSearchSuggestions(searchTerm);
    }
}