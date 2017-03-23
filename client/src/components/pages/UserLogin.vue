<template lang="html">
  <div class="user-login-form" v-show="show">
    <div class="user-login-form_mask" @click="clickMask">

    </div>
    <div class="form-container">
      <log-in-form v-show="!showSignInForm" @toSignIn="toSignIn" @logedIn="logedIn"></log-in-form>
    </div>
    <div class="form-container">
      <sign-in-form v-show="showSignInForm" @toLogin="toLogin"></sign-in-form>
    </div>
  </div>
</template>

<script>
import LogInForm from 'widgets/LogInForm'
import SignInForm from 'widgets/SignInForm'
export default {
  data () {
    return {
      showSignInForm: false
    }
  },
  props: {
    show: Boolean
  },
  methods: {
    toSignIn () {
      this.showSignInForm = true
    },
    toLogin () {
      this.showSignInForm = false
    },
    clickMask () {
      this.$emit('clickMask')
    },
    logedIn () {
      this.clickMask()
    }
  },
  components: {
    SignInForm,
    LogInForm
  }
}
</script>

<style lang="css" scoped>
.user-login-form {
}
.user-login-form_mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(243,244,255,.4);
}
</style>
