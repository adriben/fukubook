<template>
  <div>
    <TheHeader />
    <div>
      <div class="card mt-5 signupCard">
        <h2>Login</h2>
        <form class="card-body">
          <label for="email">Your email</label>
          <input
            type="email"
            placeholder="Email address"
            v-model="email"
            name="email"
            id="email"
            required
          />
          <label for="passwordSignup">Password</label>
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            name="passwordSignup"
            id="passwordSignup"
          />
          <button class="btn btn-success mt-3" @click="logIn">Login</button>
        </form>
        <p class="errorMessage">{{ errorMessage }}</p>
        <router-link to="/signIn" class="link"
          >No account yet? Click here to sign up
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";

export default {
  name: "SignIn",
  components: {
    TheHeader,
  },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    logIn: async function (event) {
      event.preventDefault();
      this.$store.dispatch("logIn", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.signupCard {
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
  }
}
</style>
