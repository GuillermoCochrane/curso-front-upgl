import { hiddenToggle } from '../utilities/dom.js';
export  function infiniteScrollHandler(loadMorePokemons) {
  let isLoading = false;

  window.addEventListener('scroll', async () => {
    if (isLoading) return;
    
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    if (scrollTop + clientHeight >= scrollHeight - 800) {
      isLoading = true;
      hiddenToggle("spinner");
      try {
        await loadMorePokemons()
      } catch(error){
        console.error('❌ Error al cargar más Pokemon:', error);
      } finally{
          hiddenToggle("spinner")
          isLoading = false;
        };
    }
  });
}