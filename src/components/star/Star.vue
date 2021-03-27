<template>
  <div class="container">
    <i v-for="(item, index) in starArr" :key="index" :class="item"></i>
  </div>
</template>

<script>
const START_ON = 'iconfont iconstar-on'
const START_HALF = 'iconfont iconstar-half'
const START_OFF = 'iconfont iconstar-off'

export default {
  name: 'Star',
  props: {
    score: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    starArr() {
      const arr = []
      const {score} = this
      const onNum = Math.floor(score)
      const halfNum = (score - onNum) * 10 < 5 ? 0 : 1
      const offNum = 5 - onNum - halfNum
      for (let i = 0; i < onNum; i++) {
        arr.push(START_ON)
      }
      for (let i = 0; i < halfNum; i++) {
        arr.push(START_HALF)
      }
      for (let i = 0; i < offNum; i++) {
        arr.push(START_OFF)
      }
      return arr
    }
  }
}
</script>

<style scoped>
  .container {
    color: gold;
  }
</style>
