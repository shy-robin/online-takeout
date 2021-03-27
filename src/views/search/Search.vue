<template>
  <div>
    <header-bar>
      <template v-slot:title>
        <span>查询</span>
      </template>
    </header-bar>
    <div style="margin-top:222px">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsa fugit harum qui molestiae aliquam iste tempora illum aut, impedit aliquid officiis quod earum ut quas deleniti officia. In, quia!</p>
    <van-icon class="iconfont iconstar-half" tag='i'></van-icon>
    <i class="iconfont iconstar-half"></i>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerbar/HeaderBar.vue'

export default {
  name: 'Search',
  components: {
    HeaderBar,
  }
}
</script>

<style scoped>

</style>
