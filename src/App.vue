<template>
  <div id="app">
    <router-view/>
    <footer-bar v-if="$route.meta.showFooterBar"></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@/components/footerbar/FooterBar.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    FooterBar,
  },
  mounted() {
    this.getCommodities()
    this.getComments()
    this.getStoreInfo()
  },
  methods: {
    ...mapActions(['getCommodities', 'getComments', 'getStoreInfo'])
  },
}
</script>


<style scoped>
  .nav {
    height: 100%;
  }
</style>