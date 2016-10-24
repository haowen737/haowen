<template lang="html">
  <div class="moodsLogin-layout">
    <div class="container">
      <header>
        情绪
      </header>
      <div class="login-form">
        <!-- <div class="">
          嘿嘿嘿
        </div> -->
        <div class="form-group" transition="moodsLogin" v-show="showForm">
          <input type="text" name="name" v-model="password" @focus="focusInput">
          <label for="" :class="labelClass">Your name?</label>
          <a class="submitBtn" href="Javascript:;" :class="labelClass" @click="submit" transition="fade">Next→</a>
          <div class="input-mask" v-show="showMask" @click="focusInput" transition="fade"></div>
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
      showForm: true,
      password: '',
      labelClass: 'label-dark'
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
      // if (this.password === 'haowen') {
      //   this.$router.go('/moods')
      // } else {
      //
      // }
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
header {
  font-size: 80px;
  text-align: center;
  padding-top: 50px;
  color: #f3f3f3;
  cursor: default;
  filter: blur(2px);
}
.login-form {
  width: 400px;
  margin: 40px auto;
  height: 300px;
  text-align: center;
  padding: 20px;
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
.moodsLogin-transition {
  transition: all .5s;
  top: 0;
  opacity: 1;
}
.moodsLogin-enter, .moodsLogin-leave {
  top: -40px;
  opacity: 0;
}
</style>
