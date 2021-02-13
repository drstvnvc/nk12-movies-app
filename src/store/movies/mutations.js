export const mutations = {
  setMovies(state, movies) {
    state.movies = movies;
  },
  deleteMovie(state, movie) {
    state.movies = state.movies.filter((m) => m.id !== movie.id);
  },
};
