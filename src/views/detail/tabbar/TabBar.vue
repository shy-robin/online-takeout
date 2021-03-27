<template>
  <div>
    <van-tabs v-model="active" @click="onClick">
      <van-tab title="点餐"></van-tab>
      <van-tab title="评价"></van-tab>
      <van-tab title="商家"></van-tab>
    </van-tabs>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  methods: {
    onClick(name, title) {
      let path
      if (name === 0) {
        path = 'Food'
      } else if (name === 1) {
        path = 'Comments'
      } else {
        path = 'Store'
      }
      this.$router.push({name: path})
    }
  },
  data() {
    return {
      active: 0,
    }
  }
}
</script>

<style scoped>
</style>
