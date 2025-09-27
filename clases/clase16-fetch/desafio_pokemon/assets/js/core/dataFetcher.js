export async function dataFetcher(url = "https://pokeapi.co/api/v2/pokemon", multipleData = true) {
  try {
    const response =  await fetch(url)
    const info = await response.json();
    const data = multipleData ? await allDataFetcher(info.results) : info;
    const nextPage = multipleData ? info.next : null;
    return {pokemons: data, nextPage: nextPage};
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