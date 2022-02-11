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
            <ul class="navbar-nav">
              <router-link to="/signIn">
                <li><button class="btn btn-success">Sign-in</button></li>
              </router-link>
              <li>
                <router-link to="/login">
                <button class="btn btn-primary">Join the community</button>
                </router-link>
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
    changeLang(e) {
      this.eng = !this.eng;
      e.preventDefault();
      this.$parent.changeLang();
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
}
</style>
