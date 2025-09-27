export function infiniteScrollHandler(loadMorePokemons) {
  let isLoading = false;

  window.addEventListener('scroll', () => {
    if (isLoading) return;
    
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    if (scrollTop + clientHeight >= scrollHeight - 800) {
      isLoading = true;
      loadMorePokemons().finally(() => isLoading = false);
    }
  });
}