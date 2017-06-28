<template lang="html">
  <nav 
  id="nav" 
  class="side-nav-container" 
  :style="{transform: 'translateY(' + navTop + 'px)'}"
  :class="[position === 'left' ? 'navLeft' : 'navRight']">
    <router-link :to="{path:'/blog'}">文章</router-link>
    <router-link :to="{path:'/blog/black'}">剪藏</router-link>
    <router-link :to="{path:'/blog/demo-house'}">唱片</router-link>
    <router-link :to="{path:'/blog/tags'}">标签</router-link>
    <router-link :to="{path:'/blog/comment'}">留言</router-link>
    <router-link :to="{path:'/'}" target="_blank">关于我</router-link>
  </nav>
</template>

<script>
export default {
  props: {
    position: String
  },
  data () {
    return {
      navTop: 170
    }
  },
  mounted () {
    this.watchScroll()
  },
  methods: {
    watchScroll () {
      window.addEventListener('scroll', this.handleScroll)
    },
    handleScroll () {
      this.navTop = 170 - parseInt(window.scrollY / 6)
    }
  },
  beforeDestory () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    '$route.name' (val) {
      console.log(val)
    },
    'position' (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="css" scoped>
.navRight {
  right: 3%;
  animation: navright .7s ease;
}
.navLeft {
  left: 17%;
  animation: navleft .7s ease;
}
.side-nav-container {
  will-change: transform;
  transition: all .7s;
  top: 0px;
  position: absolute;
}
@keyframes navright {
  0% {
    right: 10%;
    opacity: 0;
  }
  100% {
    right: 3%;
    opacity: 1;
  }
}
@keyframes navleft {
  0% {
    left: 13%;
    opacity: 0;
  }
  100% {
    left: 17%;
    opacity: 1;
  }
}
.side-nav-container a:hover {
  transform: translateX(-15px) scale(1.1);
}
.side-nav-container a {
  transition: all .4s;
  will-change: transform;
  text-align: right;
  padding: 10px 30px;
  display: block;
  color: #000;
}
</style>
