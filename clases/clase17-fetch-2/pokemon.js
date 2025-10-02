

function mostrarPokemones(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
   .then(function (respuesta){ //Este es el paso 1: Convertirlo a json.
        return respuesta.json();
    }) 
    .then (function (data){
    data.results.forEach(function (pokemon, index){
        fetch(pokemon.url).then(function (respuesta){
            return respuesta.json();
            }).then(function (data){
                const listaPokemon = document.getElementById("lista");
                console.log("pokemon: ", pokemon)
                console.log("indice", index)
                const li = document.createElement("li");
                const altura = data.height / 10;
                const peso = data.weight / 10;
                const imagen = data.sprites.other['official-artwork'].front_default;
                const imagenhtml = `<img src="${imagen}" alt="${pokemon.name}" class="img-fluid rounded" style="width: 100px; height: 100px;">`;
                //li.textContent = `# ${index + 1} ${pokemon.name} - Altura: ${altura} m - Peso: ${peso} kg `;
                li.innerHTML = imagenhtml;
                listaPokemon.appendChild(li);
            })
        })
    })
}