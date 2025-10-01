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