    function calcular() {
      let numero1 = parseFloat(document.getElementById('num1').value);
      let numero2 = parseFloat(document.getElementById('num2').value);
      let operacion = document.getElementById('operacion').value;
      let resultado;

      if (operacion === '+') {
        resultado = numero1 + numero2;
      } else if (operacion === '-') {
        resultado = numero1 - numero2;
      } else if (operacion === '*') {
        resultado = numero1 * numero2;
      } else if (operacion === '/') {
        if (numero2 === 0) {
          resultado = 'Error: División por cero';
        } else {
          resultado = numero1 / numero2;
        }
      }

      document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
    }