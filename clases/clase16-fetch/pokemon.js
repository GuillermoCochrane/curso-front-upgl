function traerPokemons() {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      const pokemons = data.results;
      console.log(pokemons);
      generarListado(pokemons);
    })
    .catch(error => console.log(error));
}

function generarListado(pokemons) {
  const listado = document.getElementById('pokemons');
  let counter = 0
  for (const pokemon of pokemons) {
    counter++;
    const li = `<li class="list-group-item">#${counter} - ${pokemon.name}</li>`;
    listado.innerHTML += li;    
  }

}