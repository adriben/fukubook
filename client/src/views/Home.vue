<template>
  <div class="home">
    <TheHeader></TheHeader>
    <section class="banniere col-12 hero">
      <div class="hero-text">
      
    

        <h1 class="pt-4 text-center">
         Exchange, sell or give your foreign books in Fukuoka
         
        </h1>
        
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.hero {
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/books.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
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
.banner {
  height: 700px;
}
</style>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'Home',
  components: {
    TheHeader
  }
}
</script>


