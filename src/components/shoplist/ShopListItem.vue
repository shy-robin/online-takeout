<template>
  <div class="container" @click="$router.push('/detail')">
    <img src="@/assets/img/shop.jpg" alt="">
    <div class="content">
      <div class="title">【商家】好味道</div>
      <div class="star">
        <Star :score='score'></Star>
      </div>
      <div class="price">
        <span>￥20起送/</span>
        <span>配送费约￥5</span>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '@/components/star/Star.vue'

export default {
  name: 'ShopListItem',
  components: {
    Star,
  },
  data() {
    return {
      score: 3.8
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    padding: 10px 0;
    width: 100%;
  }
  img {
    width: 25%;
    padding: 0 10px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .star {
    font-size: 14px;
    color: #666;
    display: flex;
  }
  .price {
    font-size: 12px;
  }
</style>
