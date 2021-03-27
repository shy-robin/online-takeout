<template>
  <div class="container">
    <div class="title">
      <span class="brand">品牌</span>
      <span class="name">{{storeInfo.name}}</span>
    </div>
    <div class="info">
      <span>{{storeInfo.score}}</span>
      <span>月售{{storeInfo.sellCount}}单</span>
      <span>{{storeInfo.description}}</span>
      <span>约{{storeInfo.deliveryTime}}分钟</span>
      <span>距离{{storeInfo.distance}}m</span>
    </div>
    <div class="description">
      <p>{{storeInfo.bulletin}}</p>
    </div>
    <div class="close" @click="isShowDetail=false">
      <i class="iconfont iconbaseline-close-px"></i>
    </div>
    <v-button></v-button>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    storeInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .container {
    background-color: #ddd;
    border-radius: 5px;
    width: 95%;
    height: 500px;
    margin: 0 auto;
    position: fixed;
    z-index: 999;
  }
</style>
