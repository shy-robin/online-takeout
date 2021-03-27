<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>  
  </div>
</template>

<script>

export default {
  name: 'Carousel',
}
</script>

<style scoped>
  .swiper-container {
      width: 100%;
      height: 200px;
  }
</style>
