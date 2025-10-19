import { createModalAbilitiesList } from '../components/components.js';
import { fetchAbilityDetails } from './dataFetcher.js';

// Función que carga las habilidades del modal
export function modalAbilitiesData(abilities) {
  createModalAbilitiesList(abilities, fetchAbilityDetails);
}
