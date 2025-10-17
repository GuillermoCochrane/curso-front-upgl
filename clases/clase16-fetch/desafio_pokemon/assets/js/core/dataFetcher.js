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

// Helper para fetch de detalles de habilidad
export async function fetchAbilityDetails(url) {
  try {
    const response = await dataFetcher(url, false);
    const data = response.pokemons

    // Buscamos la descripción en inglés
    const englishEntry = data.effect_entries.find(entry => entry.language.name === 'en');
    return englishEntry ? englishEntry.short_effect : 'No description available';
  } catch (error) {
    return 'Description not available';
  }
}

// Helper para datos de la busqueda
export async function searchDataFetcher(dataToFetch = []) {
  try {
    const allSearchedData = await allDataFetcher(dataToFetch);
    return {pokemons: allSearchedData, nextPage: null};
  } catch (error) {
    console.log(error);
  }
}