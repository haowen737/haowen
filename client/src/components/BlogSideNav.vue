<template lang="html">
  <nav 
  class="side-nav-container" 
  :style="{transform: 'translateY(' + navTop + 'px)'}"
  :class="[position === 'left' ? 'navLeft' : 'navRight']">
    <router-link :to="{path: n.route}" v-for="n in nav" :target="n.target">{{n.title}}</router-link>
  </nav>
</template>

<script>
import Nav from 'assets/scripts/blogNav'
export default {
  props: {
    position: String
  },
  data () {
    return {
      navTop: 170,
      nav: Nav
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
  z-index: 100;
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
