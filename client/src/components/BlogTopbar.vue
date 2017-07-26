<template lang="html">
  <div class="topbar">
    <div class="topbar-header-container">
      <transition name="topbar-img">
        <router-link
        class="topbar-header-name"
        v-show="mode === 'default' && show === 'logo'"
        :to="{path:'/'}"
        key="img">
          <img :src="require('assets/images/haowen.png')" alt="haowen">
        </router-link>
      </transition>
      <transition name="article-title">
        <div class="article-title" v-show="mode === 'article'">{{articleTitle}}</div>
      </transition>
      <transition name="article-title">
        <nav 
        class="nav-container" 
        :style="{transform: 'translateY(' + navTop + 'px)'}"
        :class="[position === 'left' ? 'navLeft' : 'navRight']"
        v-show="mode === 'default' && show === 'nav'">
          <span v-for="n in nav">
            <router-link :to="{path: n.route}" :target="n.target" v-if="n.route">{{n.title}}</router-link>
            <a :href="n.href" :target="n.target" v-if="n.href">{{n.title}}</a>
          </span>
        </nav>
      </transition>
    </div>
  </div>
</template>

<script>
import Nav from 'assets/scripts/blogNav'
export default {
  data () {
    return {
      mode: 'default',
      show: 'logo',
      articleTitle: '',
      user: {},
      nav: Nav
    }
  },
  mounted () {
    this.checkLogin()
    this.calWidth()
  },
  methods: {
    calWidth () {
      window.innerWidth > 1200 ? this.watchScroll() : (this.show = 'nav')
    },
    checkLogin () {
      let user = window.localStorage.getItem('withyoufriendsuseraccount')
      if (user) {
        this.user = JSON.parse(user)
      }
    },
    setMode (mode) {
      this.mode = mode
      this.articleTitle = this.$store.state.topbar.articleTitle || ''
    },
    watchScroll () {
      window.addEventListener('scroll', this.handleScroll)
    },
    handleScroll () {
      // topbar对自身的控制不通过vuex
      // 其他组件tabbar的控制通过vuex
      if (this.mode === 'article') {
        return
      } else {
        if (window.scrollY > 330) {
          this.show = 'nav'
        } else {
          this.show = 'logo'
        }
      }
    }
  },
  watch: {
    '$store.state.topbar.mode' (val) {
      this.setMode(val)
    }
  }
}
</script>

<style lang="css" scoped>
.nav-container {
  float: left;
}
.nav-container a {
  line-height: 52px;
  padding: 0 10px;
}
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
  margin-top: 10px;
}
.topbar-header-name {
  position: absolute;
  left: 10%;
  width: 150px;
  height: 100%;
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
  z-index: 1000;
  height: 52px;
  overflow: hidden;
}
@media (max-width: 1000px) {
  .topbar-header-container {
    padding: 0;
  }
}
</style>
