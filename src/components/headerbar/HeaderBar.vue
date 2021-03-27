<template>
  <div class="header">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
}
</script>

<style scoped>
  .header {
    background-color: greenyellow;
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 100%;
    color: #fff;
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
  }
  .left {
    width: 60px;
  }
  .right {
    width: 60px;
  }
  .title {
    flex: 1;
  }
</style>
