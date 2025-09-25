export async function dataFetcher(paramteres = "") {
  try {
    const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${paramteres}`)
    const list = await response.json();
    const allData = await allDataFetcher(list.results);
    return allData
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function allDataFetcher(pokemonList) {
  const promises = pokemonList.map(pokemon => 
    fetch(pokemon.url).then(res => res.json())
  );
  return await Promise.all(promises);
}