<template>
  <header class="bg-light">
    <div class="">
      <div>
        <nav class="navbar navbar-expand-lg navbar-">
          
          <p class="navbar-brand">
            
            <i class="fas fa-book"></i>

Books of Fukuoka
          </p>
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
              <li><button class="btn btn-success">Sign-in</button> </li>
              <li><button class="btn btn-primary">Join the community</button> </li>
             
            
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
  position: fixed;
  z-index: 4;
  width: 100%;

  a {
    color: #ffff;
    padding-left: 1rem;
    transition: 400ms;
    &:hover {
      transform: scale(1.15);
      transition: 400ms;
    }
  }
  ul {
    margin-right: 0;
  }
  li {
    padding-left: .7rem;
  }
  .navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
  }
}
</style>