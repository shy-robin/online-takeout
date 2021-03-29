<template>
  <div>
    <div class="container">
      <i class="iconfont iconpreviewleft back" @click="$router.push('/home')"></i>
      <div :style="{backgroundImage:`url(${storeInfo.bgImg})`}" class="background"></div>
      <div class="avatar">
        <img :src="storeInfo.avatar" alt="">
      </div>
    </div>
    <div class="detail">
      <div class="title" @click="isShowDetail=true">
        <span class="brand">品牌</span>
        <span class="name">{{storeInfo.name}}</span>
        <i class="iconfont iconarrow-right1" style="font-size: 22px"></i>
      </div>
      <div class="info">
        <span>{{storeInfo.score}}</span>
        <span>月售{{storeInfo.sellCount}}单</span>
        <span>{{storeInfo.description}}</span>
        <span>约{{storeInfo.deliveryTime}}分钟</span>
        <span>距离{{storeInfo.distance}}m</span>
      </div>
    </div>
    <van-overlay :show='isShowDetail' z-index=999>
      <div class="detail-wrapper" >
        <div class="detail-block">
          <div class="detail-title">
            <span class="detail-brand">品牌</span>
            <span class="detail-name">{{storeInfo.name}}</span>
          </div>
          <div class="detail-info">
            <ul>
              <li>
                <span class="detail-subtitle">评分</span>
                <span class="detail-subdesc">{{storeInfo.score}}</span>
              </li>
              <li>
                <span class="detail-subtitle">月售</span>
                <span class="detail-subdesc">{{storeInfo.sellCount}}单</span>
              </li>
              <li>
                <span class="detail-subtitle">送达</span>
                <span class="detail-subdesc">约{{storeInfo.deliveryTime}}分钟</span>
              </li>
              <li>
                <span class="detail-subtitle">配送费用</span>
                <span class="detail-subdesc">{{storeInfo.deliveryPrice}}</span>
              </li>
              <li>
                <span class="detail-subtitle">距离</span>
                <span class="detail-subdesc">{{storeInfo.distance}}m</span>
              </li>
            </ul>
          </div>
          <div class="detail-desc">
            <span>--简介--</span>
            <p>{{storeInfo.bulletin}}</p>
          </div>
        </div>
        <div class="close" @click="isShowDetail=false">
          <i class="iconfont iconbaseline-close-px"></i>
        </div>
      </div>
    </van-overlay>
    <div class="discount" @click="isShowDiscount=true" v-if="storeInfo.supports">
      <span class="firstOrder">{{storeInfo.supports[0].name}}</span>
      <span>{{storeInfo.supports[0].content}}</span>
      <div class="right">
        <span>{{storeInfo.supports.length}}个优惠</span>
        <i class="iconfont iconarrowdown" style="font-size:10px"></i>
      </div>
    </div>
    <van-popup
      v-model="isShowDiscount"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '30%' }"
      class="detail-discount"
    >
      <div class="detail-discount-title">
        <h2>优惠活动</h2>
      </div>
      <div class="list-wrapper">
        <ul>
          <li v-for="(item, index) in storeInfo.supports" :key="index">
            <span class="type" :style="{backgroundColor:bgColor[item.type]}">{{item.name}}</span>
            <span>{{item.content}}</span>
          </li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DetailToast from './toast/Detail.vue'

export default {
  name: 'Header',
  components: {
    DetailToast,
  },
  computed: {
    ...mapState(['storeInfo'])
  },
  data() {
    return {
      isShowDetail: false,
      isShowDiscount: false,
      bgColor: ['green', 'red', 'orange'],
    }
  },
}
</script>

<style scoped>
  .container {
    padding-top: 5px;
    position: relative;
    height: 100px;
  }
  .background {
    height: 50px;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .back {
    font-size: 30px;
    color: #fff;
    position: absolute;
    top: 15px;
  }
  .avatar {
    width: 20%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 20px;
  }
  .avatar img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  }
  .name {
    font-size: 22px;
    font-weight: bold;
  }
  .title {
    margin: 0 auto;
  }
  .brand {
    display: inline-block;
    background-color: gold;
    padding: 4px 5px;
    border-radius: 5px;
    color: #fff;
    margin-right: 10px;
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .info {
    font-size: 12px;
    color: gray;
    display: flex;
    justify-content: space-between;
    width: 80%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .firstOrder {
    background-color: green;
    display: inline-block;
    padding: 4px 5px;
    border-radius: 5px;
    color: #fff;
    margin-right: 5px;
  }
  .discount {
    display: table;
    margin: 0 auto;
    font-size: 12px;
    border: 1px solid #ddd;
    padding: 3px;
    border-radius: 5px;
  }
  .discount .right {
    display: inline-block;
    margin-left: 40px;
  }
  .detail-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .detail-block {
    width: 80%;
    background-color: #fff;
    border-radius: 5px;
  }
  .detail-title {
    margin: 0 auto;
  }

  .detail-info ul {
    display: flex;
  }
  .detail-info li {
    display: flex;
    flex-direction: column;
  }
  .detail-title {
    display: table;
    padding: 15px 0;
  }
  .detail-brand {
    background: gold;
    display: inline-block;
    padding: 3px 5px;
    border-radius: 4px;
    color: #fff;
  }
  .detail-name {
    display: inline-block;
    font-size: 22px;
    font-weight: bold;
  }
  .detail-info ul {
    display: flex;
    justify-content: space-around;
  }
  .detail-info li {
    text-align: center;
    background-color: gold;
    border-radius: 4px;
    padding: 4px;
  }
  .detail-subtitle {
    font-size: 15px;
    font-weight: bold;
  }
  .detail-subdesc {
    font-size: 12px;
    color: #fff;
  }
  .detail-desc {
    padding-top: 10px;
  }
  .detail-desc span {
    display: table;
    margin: 0 auto;
    font-size: 12px;
    color: gray;
  }
  .detail-desc p {
    font-size: 14px;
    padding: 0 12px;
  }
  .close {
    margin-top: 20px;
    width: 40px;
    height: 40px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 20px;
    text-align: center;
  }
  .close i {
    font-size: 40px;
  }
  .detail-discount-title {
    text-align: center;
  }
  .list-wrapper {
    height: 150px;
    overflow: auto;
    
  }
  .list-wrapper .type {
    color: #fff;
    padding: 3px 5px;
    border-radius: 5px;
    margin-right: 10px;
  }
  .list-wrapper li {
    margin: 15px;
  }
</style>
