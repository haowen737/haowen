<template lang="html">
  <transition name="fade">
    <div class="moodsLogin-layout">
      <div class="container">
        <header class="header" :class="headerClass">
          With You
        </header>
        <div class="login-form">
          <div class="form-group">
            <transition name="moodsLogin">
              <input
              autocomplete="off"
              type="text"
              name="name"
              v-model="where.user_name"
              @blur="blurInput"
              @focus="focusInput"
              @keypress="submitInput"
              v-show="showForm"
              placeholder="你的名字">
              <!-- <div class="input-bottom">
                <div class="input-label" :class="labelClass">Your name?</div>
                <transition name="moods-fade">
                  <div class="submitBtn" href="Javascript:;" :class="labelClass" @click.prevent="submit">Next</div>
                </transition>
              </div> -->
            </transition>
          </div>
          <transition name="moods-fade">
            <div class="input-mask" v-show="showMask" @click="blurInput"></div>
          </transition>
          <transition name="password">
            <div class="password-container" v-show="showDeny">
              <p v-show="!showCreateAccount">
                输入&nbsp;{{where.user_name}}&nbsp;的密码
              </p>
              <p v-show="showCreateAccount">用户&nbsp;{{where.user_name}}&nbsp;不存在<br>输入一个密码以创建一个新用户</p>
              <p>
                <input
                type="text"
                v-model="where.user_password"
                @keypress="createAccount"
                placeholder="输入密码">
              </p>
              <a href="javascript:;" @click="tryAgain">返回</a>
            </div>
          </transition>
          <transition name="loading">
            <loading v-show="showLoading" top="60px"></loading>
          </transition>
        </div>
        <bottom-text></bottom-text>
      </div>
    </div>
  </transition>
</template>

<script>
import bottomText from 'packages/bottomText'
import loading from 'packages/loading'
export default {
  data () {
    return {
      showMask: false,
      showDeny: false,
      showForm: true,
      showLoading: false,
      showAgree: false,
      showCreateAccount: false,
      where: {
        user_name: '',
        user_password: ''
      },
      labelClass: 'label-dark',
      headerClass: 'header-upper',
      bottomText: ''
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
    blurInput () {
      this.showMask = false
      this.labelClass = 'label-dark'
    },
    focusInput () {
      this.showMask = true
      this.labelClass = 'label-light'
    },
    submitInput (el) {
      if (el.keyCode === 13) {
        // this.submit()
        this.beforePost()
      }
    },
    beforePost () {
      if (!this.where.user_name) {
        window.alert('请输入名字')
        return
      }
      this.showForm = false
      this.showLoading = true
      this.headerClass = 'header-lower'
      this.login()
    },
    createAccount (el) {
      if (el.keyCode === 13 && this.showCreateAccount) {
        this.register()
        return
      }
      if (el.keyCode === 13 && !this.showCreateAccount) {
        this.login()
        return
      }
    },
    register () {
      let param = this.where
      this.$http.post('/api/users/registerUser', param)
      .then((res) => {
        if (res.code === 10002) {
          window.alert('创建成功，登陆一下吧')
          this.tryAgain()
        }
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    login () {
      let param = this.where
      this.$http.post('/api/users/login', param)
      .then((res) => {
        res = res.data
        this.showLoading = false
        this.showDeny = true
        if (res.code === 40001) {
          this.showCreateAccount = true
          return
        }
        if (res.code === 40002) {
          window.alert('密码错误')
          this.tryAgain()
        }
        if (res.code === 10001) {
          this.showCreateAccount = false
          return
        }
        if (res.code === 10000) {
          window.alert('登录成功')
          this.tryAgain()
          let account = JSON.stringify(res.account)
          window.localStorage.setItem('withyoufriendsuseraccount', account)
          this.$root.user.user_name = this.where.user_name
          this.reDirect()
          return
        }
      })
      .catch((err) => {
        console.log(err)
      })
    },
    tryAgain () {
      this.showDeny = false
      this.showDeny = false
      this.showForm = true
      this.where.user_password = ''
      this.headerClass = 'header-upper'
    },
    reDirect () {
      let query = this.$route.query
      console.log(query)
      if (query.redirect) {
        this.$router.replace({path: query.redirect})
      }
    }
  },
  watch: {
    'showForm': function (val) {
      this.showMask = val
    }
  },
  components: {
    loading, bottomText
  }
}
</script>

<style lang="css" scoped>
.header {
  transition: all 1s;
  position: relative;
  top: 0;
}
.header-upper {
  font-size: 80px;
  text-align: center;
  padding-top: 50px;
  color: #f3f3f3;
  cursor: default;
  filter: blur(3px);
}
.header-lower {
  font-size: 80px;
  text-align: center;
  padding-top: 50px;
  color: #f3f3f3;
  cursor: default;
  filter: blur(1px);
  top: 50px;
}
.login-form {
  width: 400px;
  margin: 40px auto;
  height: 300px;
  text-align: center;
  position: relative;
  /*box-shadow: 1px 1px 3px rgba(0,0,0,.2);*/
}
.form-group {
  position: absolute;
  width: 100%;
  padding-top: 20px;
  font-size: 30px;
}
.form-group input {
  width: 100%;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 0;
  padding: 15px;
  border-radius: 30px;
  font-size: 30px;
  font-weight: 100;
  outline: none;
  color: #444;
  z-index: 10;
  position: relative;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  box-sizing: border-box;
}
.form-group input::-webkit-input-placeholder{
  font-size: 30px;
  font-weight: 100;
}
/*.form-group:hover::after {
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #000;
  position: absolute;
}*/
.moodsLogin-layout {
  background-color: #e6e6e6;
  height: 100%;
}
.input-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
.input-bottom {
  font-size: 20px;
  text-align: left;
  position: relative;
  z-index: 10;
}
.input-label {
  position: relative;
  font-size: 20px;
  display: inline-block;
  left: 30px;
}
.submitBtn {
  position: absolute;
  /*right: 30px;*/
  font-size: 15px;
  display: inline-block;
  right: 30px;
  cursor: pointer;
}
.container {
  padding: 50px;
}
.label-dark {
  color: #555;
}
.label-light {
  color: #fff;
}
.password-container input {
  width: 100%;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 0;
  padding: 15px;
  border-radius: 30px;
  font-size: 30px;
  font-weight: 100;
  outline: none;
  color: #444;
  z-index: 10;
  position: relative;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  box-sizing: border-box;
}
.password-container {
  position: absolute;
  width: 400px;
  font-size: 20px;
  top: 0;
  left: 50%;
  color: #888888;
  transform: translateX(-50%);
  /*top: 0;*/
}
.password-container a {
  font-size: 15px;
}
/*动画*/
.moodsLogin-enter-active, .moodsLogin-leave-active {
  transition: all .3s;
  position: absolute;
  transform: translateY(0);
  opacity: 1;
}
.moodsLogin-enter, .moodsLogin-leave-active {
  transform: translateY(-40px);
  opacity: 0;
}
.moods-fade-enter-active, .moods-fade-leave-active {
  transition: all .3s;
  opacity: 1;
}
.moods-fade-enter, .moods-fade-leave-active {
  opacity: 0;
}
.loading-enter-active, .loading-leave-active {
  transition: all .5s;
  opacity: 1;
}
.loading-enter, .loading-leave-active {
  opacity: 0;
}
.password-enter-active, .password-leave-active {
  transition: all .5s;
  position: absolute;
  top: 0;
  opacity: 1;
}
.password-enter, .password-leave-active {
  top: 45%;
  opacity: 0;
}
</style>
