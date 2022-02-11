<template>
  <div>
    <TheHeader />
    <div>
        <form action="" class="form">
            <label for="title">Book's title</label>
          <input
            type="text"
            placeholder="Title"
            v-model="title"
            name="title"
            id="title"
            required
          />
          <label for="author">Book's author</label>
          <input
            type="text"
            placeholder="author"
            v-model="author"
            name="author"
            id="author"
            required
          />
          <label for="author">Book's author</label>
          <textarea
          rows="7"
          cols="45"
            placeholder="description"
            v-model="description"
            name="description"
            id="description"
            required
          />
          
        </form>
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
  data (){
      return {
        title: '',
        author: "",
        description: ""
      }
  }
}
</script>
<style lang="scss">
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        width: 20rem;
    }
}

</style>