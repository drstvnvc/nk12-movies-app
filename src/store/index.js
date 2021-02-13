import Vue from 'vue';
import Vuex from 'vuex';
import movies from './movies';
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movies,
    auth,
  },
});
