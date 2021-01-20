import Vue from "vue";
import Vuex from "vuex";
import http from "@/http";

Vue.use(Vuex);

const state = {
  token: localStorage.getItem("token") || "",
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
    localStorage.removeItem('token')
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
          localStorage.setItem('token', response.data.access_token)
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  },
};

const getters = {
  userLogin: state => Boolean(state.token)
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
