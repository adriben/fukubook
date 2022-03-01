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
      <i class="fas fa-book-reader bookIcon"></i>

      <ul v-if="books" class="mt-5">
        <li v-for="book in this.books.slice().reverse()" :key="book.title">
          <div>
            <div class="card mt-3 container mb-3">
              <img
                src="../assets/noImage.png"
                alt="book image"
                class="bookImage"
              />
              <img :src="book.img" alt="book image" />

              <div class="card-body mt-0">
                <div class="card-title">
                  <h3>{{ book.title }}</h3>
                  <h4>( {{ book.author }})</h4>
                </div>
                <p class="card-text mt-5">
                  {{ book.description }}
                </p>
                <div class="align">
                  <div>
                    <i
                      class="fa-solid fa-gift fas gift"
                      v-if="book.option == 'Give'"
                    ></i>
                    <i
                      class="fa-solid fa-comment-dollar fas dollar"
                      v-if="book.option == 'Sell'"
                    ></i>
                    <i
                      class="fas fa-hands-helping hands"
                      v-if="book.option == 'Exchange'"
                    ></i>
                    {{ book.option }}
                  </div>
                  <div>
                    <flag iso="fr" v-if="book.lang == 'French'" class="flag" />
                    <flag iso="us" v-if="book.lang == 'English'" class="flag" />
                    <flag
                      iso="jp"
                      v-if="book.lang == 'Japanese'"
                      class="flag"
                    />
                    <flag iso="es" v-if="book.lang == 'Spanish'" class="flag" />
                    {{ book.lang }}
                  </div>
                </div>
              </div>
              <div>
                <router-link
                  :to="{ name: 'Modification', params: { bookId: book._id } }"
                >
                  <button
                    class="btn btn-primary modify"
                    v-if="this.$store.state.user.userId === book.userId"
                  >
                    Update
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <h3 v-else class="mt-5 mb-5">There is no book in the database</h3>
    </section>
    <div class="pageButton container text-center">
      <button class="btn btn-success">Next></button>
    </div>
  </div>
</template>

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
      currentPage: 1,
      bookPerPage: 2,
    };
  },
  mounted: async function () {
    this.getBooks();
  },
  computed: {
    // paginatedBook() {
    //   let page = 1;
    //   return [].concat.apply([], this.books.map)
    // }
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
.bookIcon {
  font-size: 2rem;
}
.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid grey;

  transition: 600ms;
  &:hover {
    transform: scale(1.03);
    box-shadow: 1px -1px 9px -3px #000000;
    cursor: pointer;
  }
  .gift {
    color: rgb(250, 83, 208);
  }
  .dollar {
    color: green;
  }
  .align {
    display: flex;
    flex-direction: row;
    padding: 0 5rem;
  }
}

.bookImage {
  height: 300px;
}

.modify {
  margin-bottom: -15rem;
}
.flag {
  border-radius: 15px;
  font-size: 1.3rem;
  padding: 0px 10px;
}

.hands {
  color: rgba(255, 166, 0, 0.883);
}
</style>
