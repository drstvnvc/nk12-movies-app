import moviesService from '../../services/MoviesService';
export const actions = {
  async getAll(store) {
    const movies = await moviesService.getMovies();
    store.commit('setMovies', movies);
  },
  async deleteMovie(store, movie) {
    await moviesService.deleteMovie(movie.id);
    store.commit('deleteMovie', movie);
  }
};
