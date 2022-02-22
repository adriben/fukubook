<template>
  <div>
    <TheHeader />
    <div>
      <h1 class="text-center p-5">Modify your article</h1>
      <form action="" class="form">
        <label for="title">Book's title</label>
        <input
          type="text"
          name="title"
          id="title"
          class="title"
          v-model="this.title"
          required
        />
        <label for="author">Book's author</label>
        <input
          type="text"
          v-model="this.author"
          name="author"
          class="author"
          id="author"
          required
        />
        <label for="author">Book's description</label>
        <textarea
          rows="7"
          cols="45"
          v-model="this.description"
          name="description"
          class="description"
          id="description"
          required
        />

        <div class="container text-center radio">
          <p>Please select your option</p>
          <input
            type="radio"
            id="give"
            name="option"
            v-model="option"
            value="Give"
          />
          <label for="give" class="pr-2">Give</label>
          <input
            type="radio"
            id="exchange"
            name="option"
            v-model="option"
            value="Exchange"
          />
          <label for="exchange" class="pr-2">Exchange</label>
          <input
            type="radio"
            id="sell"
            name="option"
            v-model="option"
            value="Sell"
          />
          <label for="sell" class="pr-2">Sell</label>
        </div>
        <label for="lang-select">Choose a language:</label>

        <select name="lang" id="lang-select" v-model="lang">
          <option value="">--Please choose a language--</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Japanese">Japanese</option>
          <option value="Spanish">Spanish</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Other">Other</option>
        </select>

        <button class="btn btn-success mt-2" @click="updateBook">
          Update this book
        </button>
        <br />
        <button class="btn btn-danger mt-2" @click="deleteBook">Delete</button>
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
      book: {},
      title: "",
      author: "",
      description: "",
      option: "",
      userId: "",
      lang: "",
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
          console.log(data);
          this.book = data;
          this.title = this.book.title;
          this.author = this.book.author;
          this.description = this.book.description;
          this.lang = this.book.lang;
          this.option = this.book.option;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteBook: async function (e) {
      e.preventDefault();
      return fetch(
        `http://localhost:5000/api/books/${this.$route.params.bookId}`,
        {
          method: "DELETE",
        }
      ).then(this.$router.push("/"));
    },
    updateBook: async function (e) {
      e.preventDefault();

      let data = {
        title: this.title,
        author: this.author,
        description: this.description,
        option: this.option,
        userId: this.userId,
        lang: this.lang,
      };
      console.log(data);
      return fetch(
        `http://localhost:5000/api/books/${this.$route.params.bookId}`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(this.$router.push("/"));
    },
  },
  // whatch: {
  //   contact: {
  //     immediate: true,
  //     handler(val) {
  //       this.title = val.title;
  //       this.author = val.author;
  //       this.description = val.description;
  //     },
  //   },
  // },
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
