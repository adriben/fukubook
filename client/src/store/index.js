import { createStore } from "vuex";
import router from "../router/index";

const axios = require("axios");
const instance = axios.create({
  baseUrl: "http://localhost:5000/api",
});

let user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  //if there is nothing in local storage then the default userID is -1
  user = {
    userId: -1,
    token: "",
  };
} else {
  try {
    // instance.defaults.headers.common["Authorization"] = user.token;
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
      userId: user.userId ? user.userId : -1,
      username: user.username ? user.username : "",
      token: user.token ? user.token : "",
    },
  },
  mutations: {
    logUser: async function (state, user) {
      // instance.defaults.headers.common["Authorization"] = user.token;
      localStorage.setItem("user", JSON.stringify(user));

      state.user.userId = user.userId;
      state.user.username = user.username;
      state.user.token = user.token;
    },
    logout: async function (state) {
      state.user.userId = -1;
      state.user.username = "";
      state.user.token = "";
    },
  },
  actions: {
    createAccount: async ({ commit }, userInfos) => {
      commit;
      instance
        .post("http://localhost:5000/api/auth/signup", userInfos)
        .then((response) => {
          console.log(response);
        });
    },
    logIn: async ({ commit }, userInfos) => {
      commit;
      instance
        .post("http://localhost:5000/api/auth/login", userInfos)
        .then((response) => {
          console.log(response.data);
          commit("logUser", response.data);
        })
        .then(() => {
          router.push("/");
          // user = JSON.parse(localStorage.getItem('user'))
        });
    },
    createBook: async ({ commit }, bookInfos) => {
      commit;
      instance.post("http://localhost:5000/api/books", bookInfos).then(() => {
        router.push("/");
      });
    },
    logout: async ({ commit }) => {
      commit("logout");
      localStorage.clear();
      router.push("/");
    },
  },

  modules: {},
});
