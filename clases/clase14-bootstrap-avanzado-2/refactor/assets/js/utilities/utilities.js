import { zapatillas as productos } from '../../data/DB.js';

export function filterProduct(key, value) {
  return productos.filter(productos => productos[key].toLowerCase() === value.toLowerCase());
}
