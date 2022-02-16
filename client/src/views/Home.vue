<template>
  <div class="home">
    <TheHeader></TheHeader>
    <section class="banniere col-12 hero">
      <div class="hero-text">
        <h1 class="pt-4 text-center">
          Exchange, sell or give your books in Fukuoka
        </h1>
      </div>
    </section>
    <section class="container text-center mt-5">
      <h2>Latest arrival</h2>

      <ul>
        <li v-for="book in this.books.slice().reverse()" :key="book.title">
          <div>
            <div class="card mt-3 container mb-3">
              <img
                src="../assets/noImage.png"
                alt="book image"
                class="bookImage"
              />

              <div class="card-body mt-0">
                <div class="card-title">
                  <h3>{{ book.title }}</h3>
                  <h4>( {{ book.author }})</h4>
                </div>
                <p class="card-text mt-5">
                  {{ book.description }}
                </p>
                <div>
                  {{ book.option }}
                </div>
                <div>
                  {{ book.lang }}
                </div>
                <div>
                  <router-link
                    :to="{ name: 'Modification', params: { bookId: book._id } }"
                  >
                    <button
                      class="btn btn-primary"
                      v-if="this.$store.state.user.userId === book.userId"
                    >
                      Modify
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss">
.hero {
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url("../assets/books.jpg");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 100%;
  position: relative;

  .hero-text {
    position: absolute;
    align-items: center;
    top: 15%;
    left: 30%;
    @media screen and (max-width: 900px) {
      left: 200px;
    }
    @media screen and (max-width: 560px) {
      left: 1px;
    }
  }
}

.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid grey;
}

.bookImage {
  height: 300px;
}
</style>

<script>
// @ is an alias to /src
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "Home",
  components: {
    TheHeader,
  },
  data() {
    return {
      books: [],
    };
  },
  mounted: async function () {
    this.getBooks();
  },
  methods: {
    getBooks: async function () {
      await fetch("http://localhost:5000/api/books")
        .then((responsehttp) => {
          return responsehttp.json();
        })
        .then((data) => {
          this.books = data;
        });
    },
  },
};
</script>
