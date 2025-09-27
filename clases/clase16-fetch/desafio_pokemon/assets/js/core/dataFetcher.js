let nextUrl = null;

export async function dataFetcher(url = "https://pokeapi.co/api/v2/pokemon") {
  try {
    const response =  await fetch(url)
    const list = await response.json();
    const allData = await allDataFetcher(list.results);
    nextUrl = list.next;
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