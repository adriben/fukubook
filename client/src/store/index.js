import { createStore } from 'vuex'
// import router from '../router/index';

const axios = require('axios');
const instance = axios.create({
  baseUrl: "http://localhost:5000/api"
})

// let user = "";

export default createStore({
  state: {
    // user: {
    //   userId = user.id,
    //   username = user.username
    // }
  },
  mutations: {
    logUser: async function (state, user) {
      state.user = {};
      state.user.userId = user.id;
      state.user.username = user.username;
    }

  },
  actions: {

    createAccount: async({ commit }, userInfos) => {
      commit;
      instance.post('/signup', userInfos)
      .then((response) => {
        console.log(response);
      })
    }
  },
  modules: {
  }
})
