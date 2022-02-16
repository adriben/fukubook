import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import Login from "../views/Login.vue";
import AddBook from "../views/AddBook.vue";
import Modification from "../views/Modification.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/addBook",
    name: "AddBook",
    component: AddBook,
  },
  {
    path: "/modif/:bookId",
    name: "Modification",
    component: Modification,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
