import { createCardSection } from '../components/components.js';
import { modalHandler } from './modalHandler.js';
import { dataFetcher } from './dataFetcher.js';
import { infiniteScrollHandler } from './infiniteScrollHandler.js';

async function createApp() {
    const pokemons = await dataFetcher();
    createCardSection(pokemons);
    modalHandler(pokemons);
    infiniteScrollHandler();
}

document.addEventListener('DOMContentLoaded', createApp);