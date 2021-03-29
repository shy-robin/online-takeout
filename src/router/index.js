import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        showFooterBar: true,
      },
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('@/views/order/Order.vue'),
      meta: {
        showFooterBar: true,
      },
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/views/search/Search.vue'),
      meta: {
        showFooterBar: true,
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/profile/Profile.vue'),
      meta: {
        showFooterBar: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/Login.vue'),
      meta: {
        showFooterBar: false,
      },
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: () => import('@/views/userinfo/UserInfo.vue'),
      meta: {
        showFooterBar: true,
      },
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('@/views/detail/Detail.vue'),
      meta: {
        showFooterBar: false,
      },
      children: [
        {
          path: 'food',
          component: () => import('@/views/detail/components/food/Food.vue'),
          name: 'Food',
        },
        {
          path: 'comments',
          component: () => import('@/views/detail/components/comments/Comments.vue'),
          name: 'Comments',
        },
        {
          path: 'store',
          component: () => import('@/views/detail/components/store/Store.vue'),
          name: 'Store',
        },
        {
          path: '',
          redirect: 'food'
        },
      ]
    },
    {
      path: '/',
      redirect: '/home',
    },
  ],
  mode: 'history'
})
