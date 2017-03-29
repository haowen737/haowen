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
      <div class="topbar-nav">
        <nav>
          <router-link :to="{path:'/'}">文章</router-link>
          <router-link :to="{path:'/black'}">剪藏</router-link>
          <router-link :to="{path:'/demo-house'}">唱片</router-link>
          <router-link :to="{path:'/tags'}">标签</router-link>
          <router-link :to="{path:'/comment'}">留言</router-link>
          <router-link :to="{path:'/me'}" target="_blank">关于我</router-link>
        </nav>
      </div>
      <div class="nav-statement">
        <span>{{cur_tab}}</span>
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
.nav-statement {
  content: '';
  border-top: 1px solid #414347;
  left: 0;
  background-color: #2b2d32;
  min-height: 10px;
  color: #ababad;
  font-weight: lighter;
  padding: 10px 4rem;
}
.topbar-header {
  max-width: 1235px;
  margin: auto;
  padding: 0 40px;
}
.topbar-nav nav {
  padding: 0 40px;
  max-width: 1235px;
  margin: auto;
  text-align: left;
  line-height: 70px;
}
.topbar-nav a:hover {
  color: #fff;
  font-weight: 400;
}
.topbar-nav a {
  font-size: 1.2rem;
  position: relative;
  color: #ababad;
  padding: 0 1rem;
  font-weight: lighter;
  transition: all .5s;
}
.topbar-header-login {
  display: inline-block;
  float: right;
  line-height: 52px;
}
.topbar-header-name img {
  width: 100%;
  padding: 10px 20px;
}
.topbar-header-name {
  width: 150px;
  display: inline-block;
}
.topbar-header-container {
  text-align: left;
  background-color: #fff;
}
/*.topbar-nav:after {
  content: '';
  position: absolute;
  border-top: 1px solid #414347;
  left: 0;
  background-color: #2b2d32;
  width: 100%;
  height: 30px;
}*/
.topbar-nav {
  position: relative;
  background-color: #2b2d32;
  /*background-color: #fff;*/
}
.topbar {
  margin-bottom: 80px;
}
@media screen and (max-width: 375px ) {
  .topbar-nav nav {
    padding: 0;
    line-height: 40px;
    text-align: center;
  }
  .topbar-nav a {
    font-size: 1.2rem;
    font-weight: normal;
    padding: 0 .4rem;
  }
}
</style>
