<template>
  <div v-show='isShow' class="toast">
    <div class="content">
      <i class="iconfont iconwarning" style="font-size:40px;color:red">&nbsp;</i>
      <span>{{message}}</span>
    </div>
    <button @click.prevent="confirm" class="confirm">确定</button>
  </div>
</template>

<script>

export default {
  name: 'Toast',
  data() {
    return {
      isShow: true,
    }
  },
  props: {
    message: {
      type: String,
      default: '',
    }
  },
  methods: {
    confirm() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  .confirm {
    width: 100%;
    height: 50px;
    background-color: green;
    color: #fff;
    border: 0;
    border-radius: 5px;
    font-size: 18px;
  }
  .content {
    white-space: nowrap;
    padding: 20px 60px;
  }
  .iconfont {
    display: block;
    text-align: center;
    margin: 10px 0;
  }
</style>
