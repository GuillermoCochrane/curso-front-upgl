// Mostrar alerta cuando se envía el formulario
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío real
    const nombre = document.getElementById("nombre").value;
    alert(`Gracias ${nombre}, tu mensaje fue enviado con éxito. ¡Vamos Estudiantes! 🔴⚪`);
    this.reset();
});