import moviesService from '../../services/MoviesService';
export const actions = {
  async getMovies(store) {
    const movies = await moviesService.getMovies(store.state.searchTerm);
    store.commit('setMovies', movies);
  },
  async deleteMovie(store, movie) {
    await moviesService.deleteMovie(movie.id);
    store.commit('deleteMovie', movie);
  },
};
