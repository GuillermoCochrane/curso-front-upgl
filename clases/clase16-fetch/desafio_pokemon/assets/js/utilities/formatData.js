import { versionDisplayNames } from '../data/generationsData.js';

export function formatText(name, separator = ' ') {
  return name.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(separator);
}

export function formatMoveLevel(level) {
  return level > 0 ? level : '-';
}

// Función mejorada para formatear versiones
export function formatVersionName(version) {
  // Si existe en el mapeo, usar ese nombre
  if (versionDisplayNames[version]) {
    return versionDisplayNames[version];
  }
  
  // Si no, usar formatText normal
  return formatText(version, ' / ');
}

// Función para ordenar un array de objetos
export function ordenarArray(array, columna, orden = 'asc') {
  return [...array].sort((a, b) => {
    let valorA = a[columna];
    let valorB = b[columna];
    
    // CASO ESPECIAL: Si ordenamos por nivel
    if (columna === 'level') {
      valorA = obtenerNivelMasBajo(a.methods);
      valorB = obtenerNivelMasBajo(b.methods);
    }
    
    if (orden === 'asc') {
      return valorA < valorB ? -1 : 1;
    } else {
      return valorA > valorB ? -1 : 1;
    }
  });
}