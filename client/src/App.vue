<template>
  <!-- <div v-if="isLoading" class="loader">
  <Circle8 class="spin"></Circle8>
    </div> -->

  <router-view />
</template>

<script>
// import {Circle8} from 'vue-loading-spinner';

export default {
  name: "app",
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    //  "Circle8": Circle8
  },
  mounted() {
    window.addEventListener("load", async () => {
      this.isLoading = false;
    });
  },
};
</script>

<style lang="scss">
* {
  margin: auto;
  max-width: 1900px;
}

.btn {
  border-radius: 20px;
}

li{
  list-style: none;
}


</style>