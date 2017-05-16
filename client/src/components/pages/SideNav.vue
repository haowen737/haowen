<template lang="html">
  <nav class="side-nav-container" :style="{transform: 'translateY(' + navTop + 'px)'}">
    <router-link :to="{path:'/'}">文章</router-link>
    <router-link :to="{path:'/black'}">剪藏</router-link>
    <router-link :to="{path:'/demo-house'}">唱片</router-link>
    <router-link :to="{path:'/tags'}">标签</router-link>
    <router-link :to="{path:'/comment'}">留言</router-link>
    <router-link :to="{path:'/me'}" target="_blank">关于我</router-link>
  </nav>
</template>

<script>
export default {
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
      window.onscroll = () => {
        this.navTop = 170 - parseInt(window.scrollY / 5)
      }
    }
  },
  watch: {
    '$route.name' (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="css" scoped>
.side-nav-container {
  will-change: transform;
  transition: all .7s;
  top: 0;
  position: absolute;
  margin-left: 20px;
  animation: nav .7s ease;
}
@keyframes nav {
  0% {
    margin-left: -20px;
    opacity: 0;
  }
  100% {
    margin-left: 20px;
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
