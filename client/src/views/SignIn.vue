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
        <button class="btn btn-success mt-3" @click="signIn">Sign-up</button>
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
    },
    data() {
        return{
            email: '',
            username: '',
            password: '',
            confirmedPassword: '',
            errorMessage: '',
        }
    },
    methods: {
        signIn: async function(event){
            event.preventDefault();
            let validEmail = new RegExp(
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if(!validEmail.test(this.email)){
          this.errorMessage = "Please input a valid email address"
      }else if(this.password.length < 5) {
          this.errorMessage = 'The password must contain at least 5 characters'

      } else if (this.username.length < 2) {
        this.errorMessage = "The username must contain at leat 2 characters";
      }else if (
        this.username != "" &&
        this.email != "" &&
        this.password != "" &&
        this.confirmedPassword === this.password
      ){
          console.log(this.username);
      }
        }
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


