import { zapatillas as productos } from '../../data/DB.js';

export function filterProduct(key, value) {
  return productos.filter(productos => productos[key].toLowerCase() === value.toLowerCase());
};

export function capitalizeWords(string) {
  // \b - Detecta el inicio o fin de una palabra, 
  // \w - Detecta cualquier caracter alfanumérico,
  // /g - global (busca en toda la cadena)
  return string.replace(/\b\w/g, char => char.toUpperCase());
}
