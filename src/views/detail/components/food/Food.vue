<template>
  <div>
    <van-tabs v-model="isActive" scrollspy sticky background='#f3f5f9' color='green' title-active-color='green'>
      <van-tab v-for="(item,cindex) in commodities" :title="item.name" :key="cindex">
        <div class="title">
          <span>{{item.name}}</span>
        </div>
        <van-card
          :price=i.price
          :thumb=i.icon
          v-for="(i, index) in item.foods" :key="index"
          @click-thumb="clickImg(cindex, index)"
        >
          <template #num>
            <span v-if="foodList[cindex][index].count">x{{foodList[cindex][index].count}}</span>
          </template>
          <template #title>
            <span style="font-size:18px;font-weight:bold;">{{i.name}}</span>
          </template>
          <template #desc>
            <div><span>{{i.description}}</span></div>
            <div><span>月售{{i.sellCount}}份，好评率{{i.rating}}%</span></div>
          </template>
          <template #footer>
            <div class="footer-container">
              <van-button icon="minus" type="primary" size='mini' round @click="removeFood(cindex,index)"
                v-if="foodList[cindex][index].count" 
              />
              <van-button icon="plus" type="primary" size='mini' round @click="addFood(cindex,index)" />
            </div>
          </template>
        </van-card>
      </van-tab>
    </van-tabs>
    <van-popup v-model="isShowFood" class="food-detail">
      <div class="image" style="position:relative;">
        <img v-lazy="foodDetail.image" alt="">
        <div class="info" style="position:absolute;bottom:0;color:#fff;">
          <p>{{foodDetail.info}}</p>
        </div>
      </div>
      <div style="text-align:center;">
        <span style="font-size:20px;font-weight:bold;">{{foodDetail.name}}</span>
        <br>
        <span>月售{{foodDetail.sellCount}}份，好评率{{foodDetail.rating}}%</span>
      </div>
    </van-popup>
    <div class="blank"></div>
    <div class="footer-cart">
      <van-badge :content='cartList.length' class="icon-wrapper">
        <div class="icon" @click="isShowCart=!isShowCart">
          <i class="iconfont icongouwuchecar"></i>
        </div>
      </van-badge>
      <div class="left">
        总价：￥{{this.totalPrice}}
      </div>
      <div class="right" v-if="totalPrice<20">
        <span>￥20元起送</span>
      </div>
      <div class="right goPay" v-else @click="$router.push('/home')">
        <span>去结算</span>
      </div>
    </div>
    <van-popup
      v-model="isShowCart" position="bottom" 
      :style="{ height: '46%' }"
    >
      <div class="cart-header">
        <span class="cart-title">购物车</span>
        <van-button type='danger' @click="clearAll">清空</van-button>
      </div>
      <div class="cart-list">
        <div class="cart-item" v-for="(item, index) in cartList" :key="index">
          <div class="cart-item-title">
            <span>{{item.title}} </span>
            <span>￥{{item.price}}</span>
          </div>
          <div class="cart-item-right">
            <van-button icon="minus" type="primary" size='mini' round @click="removeFood(item.cindex,item.index)"/>
            <span>{{item.count}}</span>
            <van-button icon="plus" type="primary" size='mini' round @click="addFood(item.cindex,item.index)" />        
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Food',
  computed: {
    ...mapState(['commodities']),

  },
  data() {
    return {
      isActive: 0,
      totalPrice: 0,
      isShowFood: false,
      foodDetail: {},
      cartList: [],
      isShowCart: false,
      foodList: [],
    }
  },
  methods: {
    onClick(index) {
      console.log(index);
    },
    addFood(cindex, index) {
      this.foodList[cindex][index].count++
      this.totalPrice += this.commodities[cindex].foods[index].price
      this.updateCartList()
      this.$forceUpdate()
    },
    removeFood(cindex, index) {
      if (this.foodList[cindex][index].count) {
        this.foodList[cindex][index].count--
        this.totalPrice -= this.commodities[cindex].foods[index].price
        this.updateCartList()
        this.$forceUpdate()
      }
    },
    clickImg(cindex, index) {
      this.isShowFood = true
      this.foodDetail = this.commodities[cindex].foods[index]
    },
    updateCartList() {
      let res = []
      let cateLen = this.foodList.length
      for (let i = 0; i < cateLen; i++) {
        let foodLen = this.commodities[i].foods
        for (let j = 0; j < foodLen; j++) {
          if (this.foodList[i][j].count) {
            res.push(this.foodList[i][j])
          }
        }
      }
      this.cartList = res
    },
    initFoodList() {
      let res = []
      let cateLen = this.commodities.length
      for (let i = 0; i < cateLen; i++) {
        let foodLen = this.commodities[i].foods.length
        let cateArr = []
        for (let j = 0; j < foodLen; j++) {
          let item = this.commodities[i].foods[j]
          cateArr.push({count: 0, title: item.name, price: item.price, cindex: i, index: j})
        }
        res.push(cateArr)
      }
      this.foodList = res
    },
    clearAll() {
      this.$dialog.confirm({
        message: '确定清空所有购物车吗？',
      })
      .then(() => {
        this.initFoodList()
        this.updateCartList()
        this.totalPrice = 0
      })
    }
  },
  created() {
    this.initFoodList()
  }
}
</script>

<style scoped>
  .title {
    background-color: #e3e4e6;
    color: #b5b7bb;
    text-align: center;
    font-size: 12px;
  }
  .footer-cart {
    background-color: #000;
    position: fixed;
    bottom: 0;
    height: 60px;
    width: 100%;
    z-index: 9999;
    color: #fff;

  }
  .icon {
    display: inline-block;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    border: 1px solid #fff;
    color: #fff;
    margin-left: 10px;
    text-align: center;
  }
  .icon i {
    font-size: 40px;
  }
  .left {
    display: inline-block;
    margin-left: 30px;
    margin-top: 20px;
  }
  .right {
    display: inline-block;
    position: absolute;
    right: 0;
    padding: 20px;
    background-color: gray;
  }
  .goPay {
    background-color: green;
  }
  .blank {
    height: 60px;
  }
  .food-detail {
    width: 80%;
    border-radius: 10px;
  }
  .food-detail .image img {
    width: 100%;
  }
  .cart-header {
    display: flex;
    justify-content: space-between;
    background-color: #ddd;
  }
  .cart-header span {
    padding: 10px;
  }
  .cart-item {
    display: flex;
    justify-content: space-between;
  }
  .cart-item-title {
    margin-left: 20px;
    margin-top: 20px;
  }
  .cart-item-right {
    display: flex;
    margin-top: 20px;
    width: 20%;
    justify-content: space-evenly;
  }
  .cart-item-right span {
    margin-top: 3px;
  }
  .cart-list {
    height: 250px;
    overflow: scroll;
  }
</style>
