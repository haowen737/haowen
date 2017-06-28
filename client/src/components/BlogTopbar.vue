<template lang="html">
  <div class="topbar">
    <div class="topbar-header-container">
      <transition name="topbar-img">
        <router-link
        class="topbar-header-name"
        v-show="showTopbarImg"
        :to="{path:'/'}"
        key="img">
          <img :src="require('assets/images/haowen.png')" alt="haowen">
        </router-link>
      </transition>
      <transition name="article-title">
        <div class="article-title" v-show="!showTopbarImg">{{articleTitle}}</div>
      </transition>
      <div></div>
    </div>
  </div>
    <!-- <user-log-in :show="showLoginForm" @clickMask="showLoginForm=false"></user-log-in> -->
</template>

<script>
import UserLogIn from './UserLogIn'
export default {
  data () {
    return {
      showLoginForm: false,
      showTopbarImg: true,
      mode: '',
      articleTitle: '',
      user: {}
    }
  },
  mounted () {
    console.log()
    this.checkLogin()
    // this.watchScroll()
  },
  methods: {
    checkLogin () {
      let user = window.localStorage.getItem('withyoufriendsuseraccount')
      if (user) {
        this.user = JSON.parse(user)
      }
    },
    setMode (mode) {
      switch (mode) {
        case 'article':
          this.showTopbarImg = false
          this.articleTitle = this.$store.state.topbar.articleTitle
          break
        case 'default':
          this.showTopbarImg = true
          break
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
  watch: {
    '$store.state.topbar.mode' (val) {
      this.setMode(val)
    }
  },
  components: {
    UserLogIn
  }
}
</script>

<style lang="css" scoped>
.article-title {
  font-size: 2rem;
  width: 100%;
  text-align: center;
  line-height: 52px;
}
.article-title-enter-active, .article-title-leave-active {
  transform: translateY(0);
  opacity: 1;
  transition: all .7s cubic-bezier(0.76, 0.28, 0, 0.74);
}
.article-title-enter, .article-title-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
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
  padding: 10px 0;
}
.topbar-header-name {
  position: absolute;
  left: 10%;
  width: 150px;
  display: block;
  will-change: transform;
  transition: all .7s cubic-bezier(0.76, 0.28, 0, 0.74);
}
.topbar-img-enter-active, .topbar-img-leave-active {
  transform: translateY(0);
  left: 10%;
  opacity: 1;
  transition: all .7s cubic-bezier(0.76, 0.28, 0, 0.74);
}
.topbar-img-enter, .topbar-img-leave-to {
  transform: translateY(-100%);
  left: 10%;
  opacity: 0;
}
.topbar-header-container {
  padding: 0 10rem;
  height: 52px;
  position: relative;
}
.topbar {
  background-color: rgba(255, 255, 255, .9);
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 52px;
  overflow: hidden;
}
@media (max-width: 1000px) {
  .topbar-header-container {
    padding: 0;
  }
}
</style>
