<template>
  <div>
    <header-bar>
      <template v-slot:title>
        <span>我的</span>
      </template>
    </header-bar>
    <login-bar class="loginbar"></login-bar>
    <van-cell-group>
      <van-cell title="积分商城" is-link clickable></van-cell>
      <van-cell title="我的收藏" is-link></van-cell>
      <van-cell title="我的消息" is-link></van-cell>
      <van-cell title="历史记录" is-link></van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="夜间模式">
        <van-switch v-model="isDark" size="18" />
      </van-cell>
      <van-cell title="主题风格" is-link></van-cell>
      <van-cell title="清除缓存" is-link></van-cell>
      <van-cell title="设置" is-link></van-cell>
    </van-cell-group>
    <van-button type='danger' size='large' @click='logout' v-if='users.id'>退出登录</van-button>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerbar/HeaderBar.vue'
import LoginBar from '@/components/loginbar/LoginBar.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  components: {
    HeaderBar,
    LoginBar,
  },
  data() {
    return {
      isDark: false,
    }
  },
  methods: {
    logout() {
      this.$dialog.confirm({
        message: '确定退出登录吗？',
      })
      .then(() => {
        this.removeToken('users')
        this.$toast.success('退出成功！')
      })
      .catch(() => {
      });
    },
    ...mapActions(['removeToken'])
  },
  computed: {
    ...mapState(['users'])
  },
}
</script>

<style scoped>
  .loginbar {
    margin-top: 50px;
  }
  .logout {
    width: 100%;
    padding: 10px 0;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 20px;
  }
</style>
