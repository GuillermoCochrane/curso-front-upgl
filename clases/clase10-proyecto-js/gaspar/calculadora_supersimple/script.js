    function calcular() {
      let numero1 = parseFloat(document.getElementById('num1').value); // Capturamos el valor del input con id="num1"  y lo converitmos a un número (parseFloat)
      let numero2 = parseFloat(document.getElementById('num2').value); // Capturamos el valor del input con id="num2"  y lo converitmos a un número (parseFloat)
      let operacion = document.getElementById('operacion').value; // Capturamos el valor del select con id="operacion"
      
      let resultado;

      if (operacion === '+') { // Si la operación es +, sumamos los dos números
        resultado = numero1 + numero2;
      } else if (operacion === '-') { // Si la operación es -, restamos el segundo número del primero
        resultado = numero1 - numero2;
      } else if (operacion === '*') { // Si la operación es *, multiplicamos los dos números
        resultado = numero1 * numero2;
      } else if (operacion === '/') { // Si la operación es /:
        if (numero2 === 0) { // Si el segundo número es 0, mostramos un mensaje de error
          resultado = 'Error: División por cero';
        } else { // Si el segundo número no es 0, dividimos el primero por el segundo
          resultado = numero1 / numero2;
        }
      }

      document.getElementById('resultado').textContent = 'Resultado: ' + resultado; // Mostramos el resultado en el div con id="resultado"
    }