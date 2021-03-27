<template>
  <div>
    <header-bar>
      <template v-slot:title>
        <span>订单</span>
      </template>
    </header-bar>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerbar/HeaderBar.vue'

export default {
  name: 'Order',
  components: {
    HeaderBar
  },
}
</script>

<style scoped>

</style>
