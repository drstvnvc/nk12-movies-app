import BaseService from './BaseService';

class MoviesService extends BaseService {
  async getMovies(title) {
    const { data } = await this.http.get('/movies', { params: { title } });
    return data;
  }

  async getMovie(id) {
    const { data } = await this.http.get(`/movies/${id}`);
    return data;
  }

  async createMovie(movie) {
    const { data } = await this.http.post('movies', movie);
    return data;
  }

  async updateMovie(id, movie) {
    const { data } = await this.http.put(`/movies/${id}`, movie);
    return data;
  }

  async deleteMovie(id) {
    const { data } = await this.http.delete(`/movies/${id}`);
    return data;
  }
}

const moviesService = new MoviesService();
export default moviesService;
