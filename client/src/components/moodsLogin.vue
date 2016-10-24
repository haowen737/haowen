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
          <input autocomplete="off" type="text" name="name" v-model="password" @focus="focusInput">
          <label for="" :class="labelClass">Your name?</label>
          <a class="submitBtn" href="Javascript:;" :class="labelClass" @click.prevent="submit" transition="fade">Next→</a>
          <div class="input-mask" v-show="showMask" @click="focusInput" transition="fade"></div>
        </div>
        <div class="deny-card" v-show="showDeny" transition="deny">
          <p>
            啊呃，进不去(⊙﹏⊙)
          </p>
          <a href="javascript:;" @click="tryAgain">不相信</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMask: false,
      showDeny: false,
      showForm: true,
      password: '',
      labelClass: 'label-dark',
      headerClass: 'header-upper'
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    focusInput () {
      this.showMask === true ? this.showMask = false : this.showMask = true
      this.labelClass === 'label-dark' ? this.labelClass = 'label-light' : this.labelClass = 'label-dark'
    },
    submit () {
      this.showForm = false
      console.log(this.password)
      this.headerClass = 'header-lower'
      window.setTimeout(() => {
        if (this.password === 'haowen') {
          this.$router.go('/moods')
        } else {
          this.showDeny = true
        }
      }, 1500)
    },
    tryAgain () {
      this.showDeny = false
      this.showForm = true
      this.headerClass = 'header-upper'
    }
  },
  watch: {
    'password': function (val) {
      console.log(val)
    }
  },
  components: {}
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
  top: 100px;
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
label {
  position: absolute;
  left: 30px;
  font-size: 20px;
  z-index: 10;
  text-align: left;
}
.container {
  padding: 50px;
}
.submitBtn {
  position: absolute;
  right: 30px;
  font-size: 20px;
  z-index: 10;
  text-align: left;
}
.label-dark {
  color: #555;
}
.label-light {
  color: #fff;
}
.deny-card {
  position: absolute;
  width: 400px;
  font-size: 20px;
  left: 50%;
  color: #888888;
  transform: translateX(-50%);
  /*top: 0;*/
}
.deny-card a {
  font-size: 15px;
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
