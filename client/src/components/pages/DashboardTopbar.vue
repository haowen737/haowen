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
          <router-link :to="{path:'/topic'}">话题</router-link>
          <router-link :to="{path:'/theatre'}">剪藏</router-link>
          <router-link :to="{path:'/tags'}">标签</router-link>
          <router-link :to="{path:'/comment'}">留言</router-link>
          <router-link :to="{path:'/me'}" target="_blank">关于我</router-link>
        </nav>
      </div>
      <div class="page-status">
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
      user: {
        user_name: ''
      }
    }
  },
  mounted () {
    this.checkUser()
  },
  methods: {
    checkUser () {
      this.user = this.$store.state.user
      console.log(this.user)
    }
  },
  components: {
    UserLogIn
  }
}
</script>

<style lang="css" scoped>
.page-status span {
  filter: blur(3px);
}
.page-status {
  position: absolute;
  top: 150px;
  left: 10%;
  font-size: 120px;
  font-weight: 600;
  color: rgba(180,180,180,.1);
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
.topbar-nav:after {
  content: '';
  position: absolute;
  border-top: 1px solid #414347;
  left: 0;
  background-color: #2b2d32;
  width: 100%;
  height: 30px;
}
.topbar-nav {
  position: relative;
  background-color: #2b2d32;
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
