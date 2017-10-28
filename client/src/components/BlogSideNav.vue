<template lang="html">
  <nav 
  class="side-nav-container" 
  :class="[position === 'left' ? 'navLeft' : 'navRight']">
    <div v-for="n in nav" :key="n">
      <router-link :to="{path: n.route}" :target="n.target" v-if="n.route">{{n.title}}</router-link>
      <a :href="n.href" :target="n.target" v-if="n.href">{{n.title}}</a>
    </div>
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
    // this.watchScroll()
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
  transform: translate3d(0, 0, 0);
  animation: navleft .7s ease;
}
.side-nav-container {
  will-change: transform;
  transition: all .7s;
  /* top: 0px; */
  position: absolute;
  z-index: 100;
}
@keyframes navright {
  0% {
    /* right: 10%; */
    transform: translate3d(30%, 0, 0);
    opacity: 0;
  }
  100% {
    /* right: 3%; */
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes navleft {
  0% {
    transform: translate3d(-30%, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
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
  font-size: 1em;
}
</style>
