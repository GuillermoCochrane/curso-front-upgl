    let display = document.getElementById('display'); // capturamos el div con id="display"
    let operacion = ''; // variable que almacena el resultado de la operación

    function presionar(valor) {
      if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = valor; // si el resultado es 0 o Error, lo cambiamos por el valor del botón presionado
      } else {
        display.textContent += valor;
        // si el resultado no es 0 o Error, lo sumamos al resultado actual
      }
      operacion = display.textContent;
      // actualizamos el valor de operacion
    }

    function calcular() {
      try {
        display.textContent = eval(display.textContent);
        // ejecutamos la función eval con el resultado actual del display
      } catch {
        display.textContent = 'Error';
        // si ocurre algún error, lo cambiamos por Error
      }
    }

    function borrarTodo() {
      display.textContent = '0'; 
      operacion = '';
      // actualizamos el valor de operacion a vacio y el display a 0
    }