<template>
  <div>
    <TheHeader />
    <div>
      <h1 class="text-center p-5">Modify your article</h1>
      <form action="" class="form">
        <label for="title">Book's title</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          id="title"
          :value="book.title"
          required
        />
        <label for="author">Book's author</label>
        <input
          type="text"
          placeholder="author"
          :value="book.author"
          name="author"
          id="author"
          required
        />
        <label for="author">Book's description</label>
        <textarea
          rows="7"
          cols="45"
          placeholder="description"
          :value="book.description"
          name="description"
          id="description"
          required
        />
        <div class="container text-center radio">
          <p>Please select your option</p>
          <input
            type="radio"
            id="give"
            name="option"
            value="Give"
            v-model="option"
          />
          <label for="give" class="pr-2">Give</label>
          <input
            type="radio"
            id="exchange"
            name="option"
            value="Exchange"
            v-model="option"
          />
          <label for="Exchange" class="pr-2">Exchange</label>
          <input
            type="radio"
            id="sell"
            name="option"
            value="Sell"
            v-model="option"
          />
          <label for="sell" class="pr-2">Sell</label>
        </div>
        <label for="pet-select">Choose a language:</label>

        <select name="lang" id="lang-select" v-model="lang">
          <option value="">--Please choose a language--</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Japanese">Japanese</option>
          <option value="Spanish">Spanish</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Other">Other</option>
        </select>

        <button class="btn btn-success mt-2">Add this book</button>
        <br />
        <button class="btn btn-danger mt-2">Delete</button>
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
  data() {
    return {
      post: {},
    };
  },
  mounted: async function () {
    this.getBookInfo();
  },
  methods: {
    getBookInfo: async function () {
      return fetch(
        `http://localhost:5000/api/books/${this.$route.params.bookId}`
      )
        .then((responsehttp) => {
          return responsehttp.json();
        })
        .then((data) => {
          this.book = data;
          console.log(this.book.title);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
