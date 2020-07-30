import api from '../../api/imgur.js';

const state = {
  token: null
};

const getters = {
  isLoggedIn: (state) => !!state.token  // true if token is not null
};

const actions = {
  login: () => {
    api.login();
  },
  logout: ({ commit }) => {
    commit('setToken', null);  //token is null
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
