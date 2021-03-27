<template>
  <div class="container">
    <div class="title">
      <i class="iconfont iconcaidan"></i>
      <span>附近商家</span>
    </div>
    <ul>
      <li v-for="(item, index) in 55" :key="index">
        <shop-list-item></shop-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ShopListItem from './ShopListItem.vue'

export default {
  name: 'ShopList',
  components: {
    ShopListItem
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
  }
  .title {
    color: #666;
    padding: 10px 0;
  }
  .title i {
    padding: 0 10px;
  }
</style>
