<template>
  <div class="nav">
    <div class="nav-box">
      <router-link to="/">Movies</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="nav-box">
      <input @input="search" placeholder="search" />
    </div>
    <div class="nav-box"></div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';
export default {
  name: 'nav-bar',
  methods: {
    search(evt) {
      this.setSearchTerm(evt.target.value);
      this.getMovies();
    },
    ...mapActions('movies', ['getMovies']),
    ...mapMutations('movies', ['setSearchTerm']),
  },
};
</script>
<style scoped>
.nav {
  display: flex;
  padding: 30px;
}

.nav-box {
  flex: 1;
}
.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
.button {
  cursor: pointer;
}
</style>
