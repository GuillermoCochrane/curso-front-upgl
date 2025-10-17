import { createCardSection } from '../components/components.js';
import { modalHandler } from './modalHandler.js';
import { dataFetcher, searchDataFetcher } from './dataFetcher.js';
import { infiniteScrollHandler } from './infiniteScrollHandler.js'
import { initSearch } from './searchHandler.js';
import {$} from '../utilities/dom.js';

let nextUrl = null;

async function createApp() {
    const {pokemons, nextPage} = await dataFetcher();
    nextUrl = nextPage;
    createCardSection(pokemons);
    modalHandler(pokemons);
    infiniteScrollHandler(loadMorePokemons);
    initSearch(handleSearch);
}

// Cargar lista completa para autocomplete
export async function loadMorePokemons() {
    if (!nextUrl) return; // Si no hay más pókemons, salimos

    const {pokemons, nextPage} = await dataFetcher(nextUrl);
    nextUrl = nextPage;
    createCardSection(pokemons);
}

// Función principal de búsqueda
async function handleSearch(searchedPokemonList) {
    try {
        const {pokemons, nextPage} = await searchDataFetcher(searchedPokemonList);
        nextUrl = nextPage;

        // Ocultar resultados de autocomplete, limpiar input y limpiar contenido previo
        $('#search-results').innerHTML = '';
        $('#pokemon-search').value = '';
        $(`#pokemons`).innerHTML = '';
        createCardSection(pokemons);
    } catch (error) {
        console.error('❌ Pokémon no encontrado:', error);
        showSearchSuggestions(searchTerm);
    }
}

document.addEventListener('DOMContentLoaded', createApp);