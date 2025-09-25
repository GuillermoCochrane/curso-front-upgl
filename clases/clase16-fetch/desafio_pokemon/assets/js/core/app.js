import { createCardSection } from '../components/components.js';
import { modalHandler } from './modalHandler.js';
import { dataFetcher } from './dataFetcher.js';

async function createApp() {
    const pokemons = await dataFetcher();
    createCardSection(pokemons);
    modalHandler(pokemons);
}

document.addEventListener('DOMContentLoaded', createApp);