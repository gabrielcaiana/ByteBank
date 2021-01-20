import Vue from "vue";
import Vuex from "vuex";
import http from "@/http";

Vue.use(Vuex);

const state = {
  token: null,
  usuario: {},
};

const mutations = {
  DEFINE_USER_LOGIN(state, { token, usuario }) {
    state.token = token;
    state.usuario = usuario;
  },
  LOGOUT_USER(state) {
    state.token = null;
    state.usuario = {};
  },
};

const actions = {
  efetuarLogin({ commit }, usuario) {
    return new Promise((resolve, reject) => {
      http
        .post("auth/login", usuario)
        .then((response) => {
          commit("DEFINE_USER_LOGIN", {
            token: response.data.access_token,
            usuario: response.data.user,
          });
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
});
