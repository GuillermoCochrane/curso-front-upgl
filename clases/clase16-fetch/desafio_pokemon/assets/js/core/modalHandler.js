import {$} from '../utilities/dom.js';

export function modalHandler(data) {
  const $pokemonBTN = document.querySelectorAll('[data-pokemon]');
  for (const $pokeBtn of $pokemonBTN) {
    $pokeBtn.addEventListener('click', function(event) {
      event.preventDefault();
      const $modalName = $('#modal-nombre');
      const $modalImg = $('#modal-img');

      let id = this.getAttribute('data-pokemon');
      let currentPokemon = "";
      for (const pokemon of data) {
        if (pokemon.id == id) {
          currentPokemon = pokemon;
          break;
        }
      }
      $modalName.textContent = currentPokemon.name;
      $modalImg.setAttribute('src', currentPokemon.sprites.front_default);
      $modalImg.setAttribute('alt', currentPokemon.name);
    });
  };
}