<template>
  <div class="page">
    <header>Haowen</header>
    <summary>Code · Design · Create · Capture · Inspire</summary>
    <nav>
      <span v-for="n in nav">
        <router-link :to="{path: n.url}" v-if="!n.target">{{n.title}}</router-link>
        <a :href="n.url" :target="n.target" v-else>{{n.title}}</a>
      </span>
    </nav>
    <!-- <canvas id="canvas"></canvas> -->
  </div>
</template>

<script>
export default {

  name: 'Dashboard',

  data () {
    return {
      nav: [{
        title: 'Blog',
        url: '/blog',
        target: ''
      }, {
        title: 'Github',
        url: 'https://github.com/popitin',
        target: '_blank'
      }, {
        title: '微博',
        url: 'http://weibo.com/311170900/',
        target: '_blank'
      }, {
        title: '知乎',
        url: 'https://zhuanlan.zhihu.com/fe-sketch',
        target: '_blank'
      }]
    }
  },
  methods: {
    draw () {
      // let cvs = document.getElementById('#canvas')
      // let ctx = cvs.getContext('2d')
    }
  }
}
</script>

<style lang="css" scoped>
#canvas {
  position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 0;
}
header {
  font-size: 2rem;
  margin: 2rem;
}
nav {
  margin: 2rem 0;
}
nav>span {
  padding: 0 10px;
}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>