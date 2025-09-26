fetch(
  "http://localhost/landing_cursos/pages/clases-front/bloque_2/usuarios.php"
) // hacemos la petición
  .then((respuesta) => respuesta.json()) // convertimos la respuesta en JSON
  .then((data) => {
    console.log(data); // usamos los datos
    const usuariosDiv = document.getElementById("usuarios");
    // usuariosDiv.innerHTML = data[0].nombre + data[0].email; //Esto es para mostrar 1
    for (let i = 0; i < data.usuarios.length; i++) {
      //usuariosDiv.innerHTML += `<p>${data.usuarios[i].nombre} - ${data.usuarios[i].email}</p>`;
      usuariosDiv.innerHTML += `  
                    <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">Hola!! ${data.usuarios[i].nombre}</h5>
                                <p class="card-text">Email: ${data.usuarios[i].email}</p>
                                <p class="card-text">Edad: ${data.usuarios[i].edad}</p>
                                <a href="#" class="btn btn-primary">Enviar Mensaje</a>
                            </div>
                    </div>
                    <br>
                    `;
    }
  })
  .catch((error) => console.log("Error:", error));

  function buscarZapatillas(){

    fetch(
  "http://localhost/landing_cursos/pages/clases-front/bloque_2/usuarios.php"
) // hacemos la petición
  .then((respuesta) => respuesta.json()) // convertimos la respuesta en JSON
  .then((data) => {
    console.log(data); // usamos los datos
    const zapatillasDiv = document.getElementById("zapatillas");
    data.zapatillas.forEach((zapatilla) => {
      //usuariosDiv.innerHTML += `<p>${data.usuarios[i].nombre} - ${data.usuarios[i].email}</p>`;
      zapatillasDiv.innerHTML += `  
                                    <div class="card" style="width: 18rem;">
                                            <div class="card-body">
                                                <h5 class="card-title">Zapatilla!! ${zapatilla.modelo}</h5>
                                                <p class="card-text">Precio: $${zapatilla.precio}</p>
                                                <a href="#" class="btn btn-success">Comprar</a>
                                            </div>
                                    </div>
                                    `;
    });
  })
  .catch((error) => console.log("Error:", error));

}