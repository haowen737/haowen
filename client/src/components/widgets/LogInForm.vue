<template lang="html">
  <div class="login-container">
    <div class="login">
      <header>LOG IN</header>
      <form class="login-form" action="index.html" method="post">
        <z-input type="text" v-model="where.user_name" placeholder="用户名"></z-input>
        <z-input type="text" v-model="where.user_password" placeholder="密码"></z-input>
        <a class="login-link" href="javascript:;" @click="toSignin">尚未注册</a>
        <box gap="20px 0 0 0 ">
          <z-button text="登陆" @click="login"><z-button>
        </box>
      </form>
    </div>
  </div>
</template>

<script>
import ZInput from 'packages/ZInput'
import ZButton from 'packages/ZButton'
export default {
  data () {
    return {
      where: {
        user_name: '',
        user_password: ''
      }
    }
  },
  methods: {
    login () {
      let param = this.where
      this.$http.post('/api/users/login', param)
      .then((res) => {
        res = res.data
        let account = JSON.stringify(res.account)
        window.localStorage.setItem('withyoufriendsuseraccount', account)
        this.$emit('logedIn')
      })
      .catch((err) => {
        console.log(err.data)
      })
    },
    toSignin () {
      this.$emit('toSignIn')
    }
  },
  watch: {
    'where.user_name' (val) {
      console.log(val)
    }
  },
  components: {
    ZButton,
    ZInput
  }
}
</script>

<style lang="css" scoped>
.login-link {
  text-align: right;
  font-weight: 200;
  display: block;
  margin: 10px .3rem;
}
.login header {
  font-size: 2.5rem;
  font-weight: lighter;
}
.login {
  position: fixed;
  padding: .7rem;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%,-50%);
  width: 80%;
  max-width: 400px;
  background-color: #fff;
  box-shadow: 0 3px 3px rgba(0,0,0,0.2);
}
.login-container {
}
</style>
