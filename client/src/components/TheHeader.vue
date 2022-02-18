<template>
  <header class="bg-light">
    <div class="">
      <div>
        <nav class="navbar navbar-expand-lg navbar-">
          <router-link to="/">
            <p class="navbar-brand">
              <i class="fas fa-book"></i>

              Books of Fukuoka
            </p>
          </router-link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarContent" class="collapse navbar-collapse">
            <ul class="navbar-nav" v-if="this.$store.state.user.userId == -1">
              <router-link to="/login">
                <li><button class="btn btn-success">Login</button></li>
              </router-link>
              <li>
                <router-link to="/signIn">
                  <button class="btn btn-primary">Join the community</button>
                </router-link>
              </li>
            </ul>
            <ul v-else class="loggedIn">
              <li class="pr-3">
                Welcome {{ this.$store.state.user.username }}
              </li>
              <li>
                <router-link to="/addBook">
                  <button class="btn btn-danger">+ Add your book</button>
                </router-link>
              </li>
              <li class="text-center">
                <i class="fas fa-power-off mt-2 ml-3" @click="logout"></i>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      eng: true,
    };
  },
  methods: {
    logout(e) {
      e.preventDefault();
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss">
header {
  font-size: 130%;
  z-index: 4;
  width: 100%;

  a {
    color: black;
    padding-left: 1rem;
    transition: 400ms;
    &:hover {
      color: black;
      transform: scale(1.15);
      transition: 400ms;
    }
  }
  ul {
    margin-right: 0;
  }
  li {
    padding-left: 0.7rem;
  }
  .navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
  }
  .loggedIn {
    display: flex;
  }
}
.fa-power-off {
  font-size: 1.8rem;
  &:hover {
    cursor: pointer;
    color: red;
  }
}
</style>
