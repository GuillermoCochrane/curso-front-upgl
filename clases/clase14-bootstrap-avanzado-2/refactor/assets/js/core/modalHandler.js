import { zapatillas } from '../../data/DB.js';
import {$} from '../utilities/dom.js';

export function modalHandler() {
  const $zapatillas = document.querySelectorAll('[data-zapatilla]');
  for (const $zapatilla of $zapatillas) {
    $zapatilla.addEventListener('click', function(event) {
      event.preventDefault();
      const $modalName = $('#modal-nombre');
      const $modalPrecio = $('#modal-precio');
      const $modalDescripcion = $('#modal-descripcion');
      const $modalTalles = $('#modal-talles');
      const $modalColores = $('#modal-colores');
      const $modalImg = $('#modal-img');
      let id = this.getAttribute('data-zapatilla');$
      let currentZapatilla = "";
      for (const zapatilla of zapatillas) {
        if (zapatilla.id == id) {
          currentZapatilla = zapatilla;
        }
      }
      $modalName.textContent = currentZapatilla.nombre;
      $modalPrecio.textContent = currentZapatilla.precio;
      $modalDescripcion.textContent = currentZapatilla.descripcion;
      $modalTalles.textContent = currentZapatilla.talles;
      $modalColores.textContent = currentZapatilla.colores;
      $modalImg.src = currentZapatilla.url;
      $modalImg.alt = currentZapatilla.nombre;
    });
  };
}