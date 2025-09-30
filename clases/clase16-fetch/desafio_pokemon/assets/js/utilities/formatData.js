export function formatMoveName(name) {
  return name.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

export function formatMoveLevel(level) {
  return level > 0 ? level : '-';
}