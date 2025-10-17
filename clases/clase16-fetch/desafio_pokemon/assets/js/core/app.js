import { createCardSection } from '../components/components.js';
import { modalHandler } from './modalHandler.js';
import { dataFetcher } from './dataFetcher.js';
import { infiniteScrollHandler } from './infiniteScrollHandler.js'
import { initSearch, loadAllPokemon } from './searchHandler.js';

let nextUrl = null;

async function createApp() {
    const {pokemons, nextPage} = await dataFetcher();
    nextUrl = nextPage;
    createCardSection(pokemons);
    modalHandler(pokemons);
    infiniteScrollHandler(loadMorePokemons);
    initSearch();
    loadAllPokemon();
}

export async function loadMorePokemons() {
    if (!nextUrl) return; // Si no hay más pókemons, salimos

    const {pokemons, nextPage} = await dataFetcher(nextUrl);
    nextUrl = nextPage;
    createCardSection(pokemons);
}

document.addEventListener('DOMContentLoaded', createApp);