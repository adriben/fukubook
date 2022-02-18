import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FlagIcon from "vue-flag-icon";

createApp(App).use(store).use(FlagIcon).use(router).mount("#app");
