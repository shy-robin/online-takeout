<template>
  <div>
    <Header/>
    <tab-bar/>
  </div>
</template>

<script>
import Header from './header/Header.vue'
import TabBar from './tabbar/TabBar.vue'

export default {
  name: 'Detail',
  components: {
    Header,
    TabBar,
  }
}
</script>

<style scoped>

</style>
