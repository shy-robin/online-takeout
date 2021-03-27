<template>
  <div class="container">
    <i class="iconfont iconpreviewleft back" @click="$router.back()"></i>
    <div class="header">
      <h1>幸福外卖</h1>
    </div>
    <div class="tab">
      <span class="smsLogin" @click="curTab=0" :class="{isActive:curTab===0}">短信登录</span>
      <span class="pwdLogin" @click="curTab=1" :class="{isActive:curTab===1}">密码登录</span>
    </div>
    <form action="" class="smsForm" v-if="!curTab">
      <div class="phone-container">
        <input type="number" placeholder="手机号码" maxlength="11" v-model="phoneNumber"
          :class="{isRightPhone:rightPhone,isWrongPhone:!rightPhone}">
        <button class="getVerifi" @click.prevent="sendVerifi" v-if="!isSend"
          :disabled="!rightPhone">获取验证码</button>
        <button class="getVerifi" disabled="disabled" v-else>已发送({{time}})s</button>
      </div>
      <div class="verifi">
        <input type="text" placeholder="验证码" maxlength="8" v-model="verifiCode">
      </div>
      <p class="tip">
        温馨提示：未注册“幸福外卖”账号的手机号，登录后将自动注册，且默认代表已同意
        <span style="color: green">《用户服务协议》</span>
      </p>
      <button @click.prevent="smsLogin" class="login">登录</button>
      <a href="#" class="about">关于我们</a>
    </form>
    <form action="" class="pwdForm" v-else>
      <div class="phone-container">
        <input type="text" placeholder="手机/邮箱/用户名" maxlength="11" v-model="username">
      </div>
      <div class="password">
        <input :type="showPwd?'text':'password'" placeholder="密码" maxlength="8" v-model="password">
        <van-switch class="switch" v-model='showPwd' size='18px' active-color='green' />
      </div>
      <div class="verifi">
        <input type="text" placeholder="验证码" maxlength="8" v-model="captcha">
        <div class="vericode" @click="getVericode">
          <span>{{vericode}}</span>
        </div>
      </div>
      <button class="login" @click.prevent="pwdLogin">登录</button>
      <a href="#" class="about">关于我们</a>
    </form>
  </div>
</template>

<script>
import { sendCode } from '@/api/home.js'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      curTab: 0,
      showPwd: false,
      time: 30,
      isSend: false,
      phoneNumber: '',
      verifiCode: '',
      username: '',
      password: '',
      captcha: '',
      vericode: '',
      smsCode: '',
    }
  },
  methods: {
    sendVerifi() {
      let res = sendCode(this.phoneNumber).then(response => {
        this.smsCode = response.data // 保存验证码
      })
      this.isSend = !this.isSend
      const timer = setInterval(() => {
        this.time--
        if (!this.time) {
          this.time = 30
          this.isSend = !this.isSend
          clearInterval(timer)
        }
      }, 1000);
    },
    smsLogin() {
      if (!this.phoneNumber) {
        this.$toast.fail('请填写手机号码！')
      } else if (!this.verifiCode) {
        this.$toast.fail('请填写验证码！')
      } else if (this.smsCode === this.verifiCode) {
        this.users.id = 1
        this.users.phone = this.phoneNumber
        this.$toast.success('登录成功！')
        this.$router.replace('/profile') // 不希望历史记录回退
      } else {
        this.$toast.fail('手机号码或验证码错误！')
      }
    },
    pwdLogin() {
      if (!this.username) {
        this.$toast.fail('请填写手机/邮箱/用户名！')
      } else if (!this.password) {
        this.$toast.fail('请填写密码！')
      } else if (!this.captcha) {
        this.$toast.fail('请填写验证码！')
      } else if (this.captcha.toLowerCase() !== this.vericode.toLowerCase()) {
        this.$toast.fail('验证码错误！')
        this.getVericode() // 重新获取验证码
      } else if (this.username === 'zhangsan' && this.password === 'uuuuuu') {
        this.$toast.success('登录成功！')
        this.getUsers({id: 1, name: 'zhangsan', password: '123456', phone:''})
        this.setToken(JSON.stringify({id: 1, name: 'zhangsan', password: '123456', phone:''}))
        this.$router.replace('/profile') // 不希望历史记录回退
      } else {
        this.$toast.fail('用户名或密码错误！')
      }
    },
    getVericode() { // 随机获取验证码
      let result = [];
	    let n = 4; 
	    for(let i=0;i<n;i++){
   		  let ranNum = Math.ceil(Math.random() * 25) //生成一个0到25的数字
    	  result.push(String.fromCharCode(65+ranNum)) // A~Z的ASCII码就是65 + 0~25
      }
      this.vericode = result.join('')
    },
    ...mapActions(['getUsers', 'setToken']),
  },
  computed: {
    rightPhone() {
      return /^1\d{10}$/.test(this.phoneNumber)
    },
    ...mapState(['users']),
  },
  mounted() {
    this.getVericode()
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
  }
  .back {
    display: inline-block;
    padding: 3px;
    font-size: 30px;
    color: green;
    padding: 10px;
  }
  .header {
    color: green;
    text-align: center;
    font-size: 40px;
    margin: 40px 0;
  }
  .tab {
    margin: 0 auto; /* 给未知宽度的块元素设置水平居中 */
    display: table;
    padding-bottom: 5px;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
  }
  .smsLogin, .pwdLogin {
    padding: 10px 2px;
    display: inline-block;
  }
  .smsLogin {
    margin-right: 20px;
  }
  .smsForm, .pwdForm {
    width: 70%;
    margin: 0 auto;
  }
  .phone-container, .password {
    position: relative;
  }
  .phone-container input, .verifi input, .password input {
    width: 100%;
    height: 40px;
    border: rgba(102, 102, 102, 0.3) 1px solid;
    border-radius: 5px;
  }
  .phone-container button {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    line-height: 100%;
    padding: 0;
    border: 0;
    color: none;
    background-color: rgba(255, 255, 255, 0);
  }
  .verifi, .password {
    margin-top: 15px;
  }
  .tip {
    width: 100%;
    color: rgb(138, 136, 136);
    font-size: 15px;
    padding: 20px 0;
    line-height: 20px;
  }
  .login {
    width: 100%;
    height: 40px;
    color: #fff;
    background-color: green;
    border-radius: 5px;
    outline: none;
    border: 1px solid transparent;
    font-size: 16px;
  }
  .about {
    margin: 20px auto;
    display: table;
    text-decoration: none;
    color: rgb(138, 136, 136);
    font-size: 12px;
  }
  .isActive {
    color: green;
    border-bottom: 2px solid green;
  }
  .pwdForm .login {
    margin-top: 30px;
  }
  .isRightPhone {
    color: #000;
  }
  .isWrongPhone {
    color:#d1d1d1
  }
  input:focus {
    border: 1px solid green;
    outline: none;
  }
  .verifi {
    position: relative;
  }
  .vericode {
    position: absolute;
    right: 0;
    top: 0;
    background-color: greenyellow;
    height: 100%;
  }
  .vericode span {
    font-size: 22px;
    display: inline-block;
    margin-top: 13px;
  }
  .password {
    position: relative;
  }
  .switch {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 0;
  }
</style>
