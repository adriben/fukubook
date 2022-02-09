import { createStore } from "vuex";
// import router from '../router/index';

const axios = require("axios");
const instance = axios.create({
  baseUrl: "http://localhost:5000/api",
});

let user = -1;
if (!user) {
  //if there is nothing in local storage then the default userID is -1
  user = {
    userId: -1,
    token: "",
  };
} else {
  try {
    instance.defaults.headers.common["Authorization"] = user.accessToken;
  } catch (ex) {
    user = {
      userId: -1,
      token: "",
    };
  }
}

export default createStore({
  state: {
    status: "",
    user: {
      userId: user.id,
      username: user.username,
      token: user.accessToken,
    },
  },
  mutations: {
    logUser: async function (state, user) {
      state.user = {};
      state.user.userId = user.id;
      state.user.username = user.username;
    },
  },
  actions: {
    createAccount: async ({ commit }, userInfos) => {
      commit;
      instance.post("http://localhost:5000/api/auth/signup", userInfos).then((response) => {
        console.log(response);
      });
    },
  },
  modules: {},
});
