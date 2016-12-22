<template lang="html">
  <div class="moodsLogin-layout">
    <div class="container">
      <header class="header" :class="headerClass">
        情 绪
      </header>
      <div class="login-form">
        <!-- <div class="">
          嘿嘿嘿
        </div> -->
        <div class="form-group" transition="moodsLogin" v-show="showForm">
          <input
          autocomplete="off"
          type="text"
          name="name"
          v-model="password"
          @focus="focusInput"
          @keypress="submitInput">
          <div class="input-bottom">
            <div class="input-label" :class="labelClass">Your name?</div>
            <div class="submitBtn" href="Javascript:;" :class="labelClass" @click.prevent="submit" transition="fade">Next</div>
          </div>
          <div class="input-mask"
          v-show="showMask"
          @click="focusInput"
          transition="fade"></div>
        </div>
        <div class="deny-card" v-show="showDeny" transition="deny">
          <p>
            啊呃，进不去(⊙﹏⊙)
          </p>
          <a href="javascript:;" @click="tryAgain">返回</a>
        </div>
        <div class="agree-card" v-show="showAgree" transition="deny">
          <p>
            Welcome
          </p>
        </div>
        <loading v-show="showLoading" transition="deny" top="60px"></loading>
      </div>
      <div class="bottom-bar">{{bottomText}}</div>
    </div>
  </div>
</template>

<script>
import loading from './../directive/loading'
export default {
  data () {
    return {
      showMask: false,
      showDeny: false,
      showForm: true,
      showLoading: false,
      showAgree: false,
      password: '',
      labelClass: 'label-dark',
      headerClass: 'header-upper',
      bottomText: ''
    }
  },
  computed: {},
  ready () {
    this.initBottomText()
  },
  attached () {},
  methods: {
    focusInput () {
      this.showMask === true ? this.showMask = false : this.showMask = true
      this.labelClass === 'label-dark' ? this.labelClass = 'label-light' : this.labelClass = 'label-dark'
    },
    submitInput (el) {
      if (el.keyCode === 13) {
        this.submit()
      }
    },
    submit () {
      this.showForm = false
      this.showLoading = true
      this.headerClass = 'header-lower'
      window.setTimeout(() => {
        this.showLoading = false
        if (this.password === 'haowen') {
          this.showAgree = true
          window.setTimeout(() => {
            this.$router.go('/moods')
          }, 1000)
        } else {
          this.showDeny = true
        }
      }, 1500)
    },
    tryAgain () {
      this.showDeny = false
      this.showDeny = false
      this.showForm = true
      this.headerClass = 'header-upper'
    },
    initBottomText () {
      let index = (Math.random() * 10).toFixed(0)
      console.log(index)
      switch (index) {
        case '0':
          this.bottomText = '我在听,有话快说'
          break
        case '1':
          this.bottomText = '说说你的路途见闻吧'
          break
        case '2':
          this.bottomText = '你想被变成青蛙吗?'
          break
        case '3':
          this.bottomText = '天哪!你真高!'
          break
        case '4':
          this.bottomText = '祝你好运。'
          break
        case '5':
          this.bottomText = '你有什么事吗?'
          break
        case '6':
          this.bottomText = '来喝杯啤酒吗?'
          break
        case '7':
          this.bottomText = '你好，旅行者'
          break
        case '8':
          this.bottomText = '每一天，都是一个祝福'
          break
        case '9':
          this.bottomText = '哈哈哈哈...'
          break
      }
    }
  },
  watch: {
    'password': function (val) {
      console.log(val)
    }
  },
  components: {
    loading
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
  top: 90px;
}
.login-form {
  width: 400px;
  margin: 40px auto;
  height: 300px;
  text-align: center;
  padding: 20px;
  position: relative;
  /*box-shadow: 1px 1px 3px rgba(0,0,0,.2);*/
}
.form-group {
  position: relative;
  padding-top: 20px;
  font-size: 30px;
}
input {
  width: 100%;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 0;
  padding: 15px;
  border-radius: 30px;
  font-size: 30px;
  outline: none;
  z-index: 10;
  position: relative;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  box-sizing: border-box;
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
.deny-card, .agree-card {
  position: absolute;
  width: 400px;
  font-size: 20px;
  left: 50%;
  color: #888888;
  transform: translateX(-50%);
  /*top: 0;*/
}
.deny-card a, .agree-card a{
  font-size: 15px;
}
.bottom-bar {
  position: absolute;
  bottom: 5px;
  left: 50%;
  color: #999;
  font-size: 14px;
  transform: translateX(-50%);
}
/*动画*/
.moodsLogin-transition {
  transition: all .3s;
  top: 0;
  opacity: 1;
}
.moodsLogin-enter, .moodsLogin-leave {
  top: -40px;
  opacity: 0;
}
.deny-transition {
  transition: all .5s;
  top: 50px;
  opacity: 1;
}
.deny-enter, .deny-leave {
  top: 100px;
  opacity: 0;
}
</style>
