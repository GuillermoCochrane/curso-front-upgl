

function mostrarPokemones(){
   fetch("https://pokeapi.co/api/v2/pokemon")
   .then(function (respuesta){ //Este es el paso 1: Convertirlo a json.
        return respuesta.json();
   }) 
   .then (function (data){
    data.results.forEach(function (pokemon, index){
        const listaPokemon = document.getElementById("lista");
        console.log(pokemon +index)
        const li = document.createElement("li");
        li.textContent = `# ${index + 1} ${pokemon.name}`;
        listaPokemon.appendChild(li);
    })
   })

}