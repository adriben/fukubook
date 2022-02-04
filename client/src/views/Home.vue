<template>
  <div class="home">
    <TheHeader></TheHeader>
  </div>
</template>

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
