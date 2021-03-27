import {
  RECEIVE_TITLE,
  RECEIVE_SORT,
  RECEIVE_PAGE,
  RECEIVE_LIST,
  RECEIVE_FOOD,
  RECEIVE_USERS,
  SET_TOKEN,
  REMOVE_TOKEN,
  RECEIVE_COMMODITIES,
  RECEIVE_COMMENTS,
  RECEIVE_STOREINFO,
} from './mutation-types'

import { getMultiData, getData } from '@/api/home.js'
import { getCommodities, getComments, getStoreInfo } from '@/api/mockReq.js'

export default {
  // 异步获取数据
  getAll(context) {
    getData('sell', 1).then(res => {
      if (res.returnCode === '1001') {
        console.log('获取成功！');
        context.commit(RECEIVE_TITLE, res.data)
        context.commit(RECEIVE_SORT, res.data)
        context.commit(RECEIVE_PAGE, res.data)
        context.commit(RECEIVE_LIST, res.data)
        context.commit(RECEIVE_FOOD, {food: [
          {name: '板栗', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81_%E6%9D%BF%E6%A0%97.png'},
          {name: '橙子', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81_%E6%A9%99%E5%AD%90.png'},
          {name: '汉堡', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81_%E6%B1%89%E5%A0%A1.png'},
          {name: '鸡蛋', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81_%E9%B8%A1%E8%9B%8B.png'},
          {name: '披萨', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81_%E6%8A%AB%E8%90%A8.png'},
          {name: '薯条', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81_%E8%96%AF%E6%9D%A1.png'},
          {name: '香肠', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81_%E9%A6%99%E8%82%A0.png'},
          {name: '小鱼', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81_%E5%B0%8F%E9%B1%BC.png'},
          {name: '蚕豆', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81-%E8%9A%95%E8%B1%86.png'},
          {name: '干粮', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81%E5%B9%B2%E7%B2%AE.png'},
          {name: '红枣', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81-%E7%BA%A2%E6%9E%A3.png'},
          {name: '花生', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81-%E8%8A%B1%E7%94%9F.png'},
          {name: '芒果', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81-%E8%8A%92%E6%9E%9C.png'},
          {name: '面包', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81-%E9%9D%A2%E5%8C%85.png'},
          {name: '肉铺', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81-%E8%82%89%E9%93%BA.png'},
          {name: '山楂', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81-%E5%B1%B1%E6%A5%82.png'},
          {name: '松子', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81-%E6%9D%BE%E5%AD%90.png'},
          {name: '甜品', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81-%E7%94%9C%E5%93%81.png'},
          {name: '腰果', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81-%E8%85%B0%E6%9E%9C.png'},
          {name: '饮料', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E9%A3%9F%E5%93%81%E9%A5%AE%E6%96%99.png'},
          {name: '西餐', pic: 'https://gitee.com/gainmore/imglib/raw/master/img/%E8%A7%86%E9%A2%91_%E8%A5%BF%E9%A4%90.png'},
        ]})
      }
    })
  },
  getUsers(context, payload) {
    context.commit(RECEIVE_USERS, payload)
  },
  setToken(context, payload) {
    context.commit(SET_TOKEN, payload)
  },
  removeToken(context, payload) {
    context.commit(REMOVE_TOKEN, payload)
  },
  getCommodities(context, payload) {
    getCommodities().then(res => {
      res = res.data
      if (res.code === 0) {
        context.commit(RECEIVE_COMMODITIES, res.data)
      }
    })
  },
  getComments(context) {
    getComments().then(res => {
      res = res.data
      if (res.code === 0) {
        context.commit(RECEIVE_COMMENTS, res.data)
      }
    })
  },
  getStoreInfo(context) {
    getStoreInfo().then(res => {
      res = res.data
      if (res.code === 0) {
        context.commit(RECEIVE_STOREINFO, res.data)
      }
    })
  },
}
