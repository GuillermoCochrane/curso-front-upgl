const zapatillas = {
  "nike-dunk-low": {
    nombre: "Nike Dunk Low",
    precio: "$150",
    descripcion:
      "El icono del basquetbol de los 80, que se creó para la cancha pero conquistó las calles.",
    talles: "36, 37, 38, 45, 46",
    colores: "Blanco, Negro, Rojo",
  },
  "air-jordan-1-low-se": {
    nombre: "Air Jordan 1 Low SE",
    precio: "$120",
    descripcion: "Da tu máximo esfuerzo con estos AJ1 de edición especial.",
    talles: "36, 37, 38, 39, 40, 41, 42, 43, 44, 45",
    colores: "Negro, Blanco, Azul",
  },
"nike-pegasus-trail-5": {
        nombre: 'Nike Pegasus Trail 5',
        precio: '$130',
        descripcion: 'Despliega tus alas y observa lo que te depara la naturaleza mientras recorres caminos de tierra con los Peg Trail 5.',
        talles: '36, 37, 38, 39, 40, 41, 42, 43, 44, 45',
        colores: 'Verde, Gris, Azul'
  }  
};

// Espera a que el DOM esté totalmente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () { // escucha el evento DOMContentLoaded
    // Selecciona todos los elementos que tengan el atributo data-zapatilla
    var buttons = document.querySelectorAll('[data-zapatilla]');
    // Recorre la colección de botones con un bucle for clásico
    for (var i = 0; i < buttons.length; i++) {
        // Añade un manejador de evento 'click' a cada botón
        buttons[i].addEventListener('click', function () {
            // Obtiene el valor del atributo data-zapatilla del botón que se clickeó
            var id = this.getAttribute('data-zapatilla');
            // Busca los datos de la zapatilla en el objeto 'zapatillas' usando ese id
            var data = zapatillas[id];
            // Si existe información para ese id, actualiza el contenido del modal
            if (data) {
                // Pone el nombre de la zapatilla en el elemento con id 'modal-nombre'
                document.getElementById('modal-nombre').textContent = data.nombre;
                // Pone el precio en el elemento con id 'modal-precio'
                document.getElementById('modal-precio').textContent = data.precio;
                // Pone la descripción en el elemento con id 'modal-descripcion'
                document.getElementById('modal-descripcion').textContent = data.descripcion;
                // Pone los talles en el elemento con id 'modal-talles'
                document.getElementById('modal-talles').textContent = data.talles;
                // Pone los colores en el elemento con id 'modal-colores'
                document.getElementById('modal-colores').textContent = data.colores;
            } // fin del if (data)
        }); // fin del addEventListener click
    } // fin del for
}); // fin del DOMContentLoaded
