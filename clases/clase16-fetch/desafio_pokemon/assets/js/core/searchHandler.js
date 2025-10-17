import { $ } from '../utilities/dom.js';
import { dataFetcher, searchDataFetcher } from './dataFetcher.js';
import { formatText } from '../utilities/formatData.js';
import { createCardSection } from '../components/components.js';

let allPokemonList = [];
let searchedPokemonList = [];

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