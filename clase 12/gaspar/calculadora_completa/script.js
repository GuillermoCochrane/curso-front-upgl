    let display = document.getElementById('display');
    let operacion = '';

    function presionar(valor) {
      if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = valor;
      } else {
        display.textContent += valor;
      }
      operacion = display.textContent;
    }

    function calcular() {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = 'Error';
      }
    }

    function borrarTodo() {
      display.textContent = '0';
      operacion = '';
    }