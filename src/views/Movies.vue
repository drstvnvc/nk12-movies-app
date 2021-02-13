<template>
  <div>
    <my-table :items="movies" :columns="['title', 'director', 'genre', 'release_date', 'duration']">
      <template slot-scope="slotProps">
        <movie-row :movie="slotProps.item" />
      </template>
    </my-table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import MovieRow from '../components/MovieRow.vue';
import MyTable from '../components/MyTable';
import store from '../store';
export default {
  name: 'movies',
  components: {
    MyTable,
    MovieRow,
  },
  computed: {
    ...mapGetters('movies', ['movies']),
  },
  methods: {
    handleMovieDelete(movie) {
      this.deleteMovie(movie);
    },
    ...mapActions('movies', ['deleteMovie']),
  },
  async beforeRouteEnter(to, from, next) {
    await store.dispatch('movies/getMovies');
    next();
  },
};
</script>
