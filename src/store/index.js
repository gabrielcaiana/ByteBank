import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  token: null,
  usuario: {},
};

const mutations = {
  defineUserLogin(state, { token, usuario }) {
    state.token = token;
    state.usuario = usuario;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  modules: {},
});
