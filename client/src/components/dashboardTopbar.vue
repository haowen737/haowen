<template lang="html">
  <div class="page">
    <div class="topbar">
      <div class="topbar-header-container">
        <div class="topbar-header">
          <router-link :to="{path:'/'}" class="topbar-header-name"><img src="./../assets/images/haowen.png" alt=""></router-link>
          <div class="topbar-header-login">
            <span v-show="!user.user_name">登入</span>
            <span v-show="user.user_name">{{user.user_name}}</span>
          </div>
        </div>
      </div>
      <div class="topbar-nav">
        <nav>
          <router-link :to="{path:'/'}">文章</router-link>
          <router-link :to="{path:'/topic'}">话题</router-link>
          <router-link :to="{path:'/theatre'}">剧场</router-link>
          <router-link :to="{path:'/theatre'}">剪藏</router-link>
          <router-link :to="{path:'/tags'}">标签</router-link>
          <router-link :to="{path:'/comment'}">留言</router-link>
          <router-link :to="{path:'/contact'}" target="_blank">关于我</router-link>
        </nav>
      </div>
      <div class="page-status">
        <span>{{cur_tab}}</span>
      </div>
    </div>
    <bottom-fire :show.sync="showBottomFire"></bottom-fire>
  </div>
</template>

<script>
import BottomFire from './../packages/bottomFire'
import LoginEntrance from './loginEntrance'
export default {
  data () {
    return {
      showBottomFire: false,
      cur_tab: '',
      user: {
        user_name: ''
      }
    }
  },
  mounted () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      let userName = this.$root.user.user_name
      this.user.user_name = userName || ''
    }
  },
  watch: {
    '$root.scrollY': function (val) {
      this.showBottomFire = (this.$root.offsetHeight - this.$root.innerHeight - this.$root.scrollY < -120) || false
    },
    '$route.name': function (val) {
      console.log(val)
    }
  },
  components: {
    LoginEntrance,
    BottomFire
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
  font-size: .8rem;
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
