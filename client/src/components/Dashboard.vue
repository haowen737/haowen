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
        title: '博客',
        url: '/blog',
        target: ''
      }, {
        title: '关于我',
        url: '/me',
        target: ''
      }, {
        title: 'Github',
        url: 'https://github.com/haowen737',
        target: '_blank'
      }, {
        title: '微博',
        url: 'http://weibo.com/311170900/',
        target: '_blank'
      }, {
        title: '知乎',
        url: 'https://zhuanlan.zhihu.com/fe-sketch',
        target: '_blank'
      }, {
        title: '聊天室',
        url: 'https://discord.gg/HcvpmuK',
        target: '_blank'
      }]
    }
  },
  mounted () {
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
  font-size: 4rem;
  margin: 2rem;
  animation: slide-down .7s ease;
  font-family:'HelveticaNeueda58208fb1a95c';
}
summary {
  animation: slide-down .7s ease;
  font-family:'HelveticaNeueda58208fb1a95c';
  word-spacing: 5px;
  font-size: 1.7rem;
}
nav {
  margin: 2rem 0;
  animation: slide-down .7s ease;
}
nav>span {
  padding: 0 10px;
}

a {
  color: #3b3b3b;
  font-size: 1.7rem;
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@keyframes slide-down {
  0% {
    display: none;
    opacity: 0;
    transform: translateY(-30%);
  }
  100% {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
