<template>
<div>
<TheHeader />
<div>


     <div class="card mt-5 signupCard">

      <h2>Sign-up</h2>
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
        <label for="usernameSignup">Your username</label>
        <input
          type="text"
          placeholder="Username"
          v-model="username"
          name="usernameSignup"
          id="usernameSignup"
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
        <label for="confirmePassword">Confirm password</label>
        <input
          type="password"
          placeholder="Confirm password"
          v-model="confirmedPassword"
          name="confirmePassword"
          id="confirmePassword"
        />
        <button class="btn btn-success mt-3">Sign-up</button>
      </form>
      <p class="errorMessage">{{ errorMessage }}</p>
      <router-link to="/" class="link"
        >Already an account? Click here to login
      </router-link>
    </div>
    
</div>
</div>

</template>

<script>
import TheHeader from "../components/TheHeader.vue"

export default {
    name: 'SignIn',
    components: {
        TheHeader
    }
}
</script>

<style lang="scss" scoped>

.signupCard{
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 2rem;


    form{
        display: flex;
        flex-direction: column;
        
    }

}

</style>


