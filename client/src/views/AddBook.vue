<template>
  <div>
    <TheHeader />
    <div>
      <h1 class="text-center p-5">Edit your article</h1>
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
        <label for="author">Book's description</label>
        <textarea
          rows="7"
          cols="45"
          placeholder="description"
          v-model="description"
          name="description"
          id="description"
          required
        />
        <div class="photo mt-2">
          <p>Add your photo</p>
          <input type="file" id="file-upload" @change="onFileChange" />
          <label
            accept="image/*"
            for="file-upload"
            class="custom-file-upload btn btn-primary"
            ><i class="fas fa-file-image"></i> Upload here</label
          >
          <div v-if="this.url">
            <img :src="url" alt="uploaded image" id="imageUploaded" />
          </div>
        </div>
        <div class="container text-center radio mt-4">
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

        <button class="btn btn-success mt-2" @click="addBook">
          Add this book
        </button>
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
      title: "",
      author: "",
      description: "",
      option: "",
      userId: this.$store.state.user.userId,
      lang: "",
      url: null,
    };
  },

  methods: {
    addBook: async function (event) {
      event.preventDefault();
      const imageFile = document.querySelector("input[type=file]").files[0];

      this.$store.dispatch("createBook", {
        title: this.title,
        author: this.author,
        description: this.description,
        option: this.option,
        userId: this.userId,
        lang: this.lang,
        img: imageFile ? imageFile : null,
      });
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
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

input[type="text"] {
  width: 22rem;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}

#imageUploaded {
  max-width: 300px;
  max-height: 300px;
}
</style>
