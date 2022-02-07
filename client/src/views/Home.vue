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
    <section class="container text-center mt-5" >
      <h2>Latest arrival</h2>

      <ul>
        <li v-for="book in this.books" :key="book.title"> 

        <div class="card">
  <div class="card-header">
  From {{ book.userName}}
  </div>
  <div class="card-img">
    <img src="" alt="">
  </div>
  <div class="card-body">
    <h5 class="card-title">{{ book.title}} ({{book.author}})</h5>
    <p class="card-text">{{ book.description}}</p>
    <a href="#" class="btn btn-danger">Contact seller</a>
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

</style>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'Home',
  components: {
    TheHeader
  },
  data() {
    return {
      books: [],
    }
  },
   mounted: async function () {
    this.getBooks();
    
  },
  methods: {
    getBooks: async function () {
      await fetch('http://localhost:5000/api/books')
      .then((responsehttp) => {
        return responsehttp.json();
      })
      .then((data) => {
        this.books = data
        
      })
    }
  }

}
</script>


