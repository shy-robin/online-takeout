<template>
  <van-tabbar v-model="active" active-color="red" inactive-color="green" route>
    <van-tabbar-item icon=' iconwaimai' icon-prefix='iconfont' to='/home'>外卖</van-tabbar-item>
    <van-tabbar-item icon=' iconsearch' icon-prefix='iconfont' to='/search'>搜索</van-tabbar-item>
    <van-tabbar-item icon=' iconziyuan' icon-prefix='iconfont' to='/order'>订单</van-tabbar-item>
    <van-tabbar-item icon=' iconbiaoqianA01_wode-70' icon-prefix='iconfont' to='/profile'>我的</van-tabbar-item>
  </van-tabbar>
  <!-- <van-tabbar v-model="active" active-color="red" inactive-color="green" route>
    <van-tabbar-item icon='iconfont iconwaimai' icon-prefix='iconfont' to='/home'>外卖</van-tabbar-item>
    <van-tabbar-item icon='iconfont iconsearch' icon-prefix='iconfont' to='/search'>搜索</van-tabbar-item>
    <van-tabbar-item icon='iconfont iconziyuan' icon-prefix='iconfont' to='/order'>订单</van-tabbar-item>
    <van-tabbar-item icon='iconfont iconbiaoqianA01_wode-70' icon-prefix='iconfont' to='/profile'>我的</van-tabbar-item>
  </van-tabbar> -->
</template>

<script>
export default {
  name: 'FooterBar',
  data() {
    return {
      active: 0,
    }
  },
}
</script>

<style scoped>

</style>
