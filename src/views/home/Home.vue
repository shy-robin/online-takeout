<template>
  <div>
    <header-bar>
      <template v-slot:left>
        <i class="iconfont iconsearch" style="font-size: 25px"></i>
      </template>
      <template v-slot:title>
        <span>{{title}}</span>
      </template>
      <template v-slot:right>
        <i class="iconfont iconProfile" v-if="users.id" style="font-size:22px"></i>
        <span v-else @click="$router.push('/login')">登录</span>
      </template>
    </header-bar>
    <carousel class="swiper">
      <ul class="swiper-slide" v-for="(arr, index) in foodArr" :key="index">
        <li v-for="(item, index) in arr" :key="index">
          <img v-lazy="item.pic" alt="">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </carousel>
    <shop-list class="shoplist"></shop-list>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerbar/HeaderBar.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import ShopList from '@/components/shoplist/ShopList.vue'
import {mapActions, mapState} from 'vuex'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default { 
  name: 'Home',
  components: {
    HeaderBar,
    Carousel,
    ShopList,
  },
  methods: {
    ...mapActions(['getAll'])
  },
  mounted() {
    this.getAll()
  },
  watch: {
    foodArr(newVal, oldVal) {
      this.$nextTick(() => {
        new Swiper ('.swiper-container', {
          direction: 'horizontal', 
          loop: true, 
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          observer: true,
          observeParents: true,
        })
      })
    }
  },
  computed: {
    ...mapState(['title', 'food', 'users']),
    foodArr() { // 将一维数组转换为二维数组
      let arr = []
      let item = []
      for (let i of this.food) {
        item.push(i)
        if (item.length === 8) {
          arr.push(item)
          item = []
        }
      }
      if (item) {
        arr.push(item)
      }
      return arr
    }
  }
}
</script>

<style scoped>
  img {
    width: 100%;
  }
  .swiper {
    margin-top: 50px;
  }
  .shoplist {
    padding-bottom: 65px;
  }
  .swiper-slide {
    display: flex;
    flex-wrap: wrap;
  }
  .swiper-slide > li {
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: green;
    font-size: 15px;
  }
  .swiper-slide img {
    width: 60%;
    margin: 3px auto;
  }
</style>
