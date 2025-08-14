window.addEventListener('load', () => {
  const $fs = (selector) => document.querySelector(selector)
  const $numero1 = $fs('#num1')
  const $numero2 = $fs('#num2')
  const $operador = $fs('#operador')
  const $resultado = $fs('#resultado')
  const $calcularResulado = $fs('#calcular')

  const calcular = () => {
    const num1 = parseFloat($numero1.value)
    const num2 = parseFloat($numero2.value)
    const op = $operador.value
    const frase = "El resultado es: " 
    if (num1 && num2 || (num1 === 0 || num2 === 0)) {
      if ( op === '+' ) {
        $resultado.textContent = frase + (num1 + num2)
      } else if ( op === '-' ) {
        $resultado.textContent = frase + (num1 - num2)
      } else if ( op === 'x' ) {
        $resultado.textContent = frase + (num1 * num2)
      } else if ( op === '/' ) {
        if (num2 === 0) {
          $resultado.textContent = "No se puede dividir por cero"
        } else {
          $resultado.textContent = frase + (num1 / num2)
        }
      } else {
        $resultado.textContent = "Operador no soportado"
      }
    } else {
      $resultado.textContent = "Debe ingresar dos numeros"
    }
  }

  // preguntar diferencias entre textContent, innerText e innerHTML
  $calcularResulado.addEventListener('click', calcular)
})