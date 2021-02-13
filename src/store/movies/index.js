import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

const store = {
  namespaced: true,
  state: {
    movies: [],
    searchTerm: '',
  },
  actions,
  mutations,
  getters,
};

export default store;
