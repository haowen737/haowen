<template lang="html">
  <div class="">
    <div class="topbar">
      <div class="topbar-header-container">
        <div class="topbar-header">
          <router-link :to="{path:'/'}" class="topbar-header-name"><img :src="require('assets/images/haowen.png')" alt=""></router-link>
          <div class="topbar-header-login">
            <span v-show="!user.user_name" @click="showLoginForm=true">登入</span>
            <span v-show="user.user_name">{{user.user_name}}</span>
          </div>
        </div>
      </div>
    </div>
    <user-log-in :show="showLoginForm" @clickMask="showLoginForm=false"></user-log-in>
  </div>
</template>

<script>
import UserLogIn from './UserLogIn'
export default {
  data () {
    return {
      showLoginForm: false,
      cur_tab: '',
      user: {}
    }
  },
  mounted () {
    this.checkLogin()
    this.watchScroll()
  },
  methods: {
    checkLogin () {
      let user = window.localStorage.getItem('withyoufriendsuseraccount')
      if (user) {
        this.user = JSON.parse(user)
      }
    },
    watchScroll () {
      window.onscroll = () => {
        let scrollY = window.scrollY
        scrollY > 0 && this.fitNav()
      }
    },
    fitNav () {

    }
  },
  components: {
    UserLogIn
  }
}
</script>

<style lang="css" scoped>
.topbar-header {
  max-width: 1235px;
  margin: auto;
  padding: 0 40px;
}
.topbar-header-login {
  display: inline-block;
  float: right;
  line-height: 52px;
}
.topbar-header-name img {
  width: 100%;
  padding: 10px 10rem;
}
.topbar-header-name {
  width: 150px;
  display: inline-block;
}
.topbar-header-container {
  text-align: left;
  background-color: rgba(255, 255, 255, .9);
  box-shadow: 0 2px 2px rgba(0,0,0,.2);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
.topbar {
  margin-bottom: 80px;
}
</style>
