<template lang="html">
  <transition name="fade-contact">
    <div>
      <div class="hero">
        <div class="hero-container">
          <div class="hero-name">
            <h1 class="Animated_slidedown" :style="{transform: 'translate3d(' + tx + 'px,' + 0 + 'px,' + tz + 'px)'}">Haowen<br>Zheng</h1>
            <h2 class="Animated_slideleft" :style="{transform: 'translate3d(' + tx / 2 + 'px,' + 0 + 'px,' + tz + 'px)'}">郑皓文</h2>
            <h2 class="Animated_slideleft" :style="{transform: 'translate3d(' + tx / 3 + 'px,' + 0 + 'px,' + tz + 'px)'}">中国 💝 杭州</h2>
          </div>
          <div class="hero-avatar Animated_slideright">
            <div class="hero-avatar-img"></div>
            <div class="hero-flower" :style="{transform: 'translate3d('+ -tx / 2 + 'px,' + ty + 'px,' + tz + 'px)'}"></div>
            <div class="hero-tree" :style="{transform: 'translate3d(' + tx + 'px,' + ty + 'px,' + tz + 'px)'}"></div>
          </div>
        </div>
      </div>
      <div class="content">
        <h2>很高兴认识你</h2>
        <p>我叫郑皓文, 我是一名前端开发工程师, 我蛮喜欢新的技术, 设计并且搭建酷炫的项目。</p>
        <p>做出一个改变世界的产品是我的人生理想。</p>
      </div>
      <!-- <div class="content" v-html="content" id="mdContainer"></div> -->
      <!-- <div class="progressBar-container">
        <progress-bar :progressClass="progressClass" :progressList="progressList"></progress-bar>
      </div> -->
    </div>
  </transition>
</template>

<script>
// import particles from 'particles.js'
// import particlesConfig from './../lib/particlesConfig.js'
import Markdown from 'markdown/lib/markdown.js'
import progressBar from 'packages/progressBar'
export default {
  data () {
    return {
      tx: 0,
      ty: 0,
      tz: 0,
      progressClass: ProgressClass,
      progressList: ProgressList,
      show: -1
    }
  },
  computed: {},
  mounted () {
    this.query()
    this.watchScroll()
  },
  methods: {
    query () {
      this.$http.get('/static/md/me.md')
          .then((res) => {
            this.praseMd(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
    },
    praseMd (data) {
      this.content = Markdown.toHTML(data)
    },
    watchScroll () {
      window.addEventListener('scroll', this.setAnimation)
    },
    setAnimation () {
      this.tx = -window.scrollY / 4
      this.ty = -window.scrollY / 4
      this.tz = -window.scrollY / 4
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.setAnimation)
  },
  components: {
    progressBar,
    Markdown
  }
}
const ProgressClass = {
  container: {
    width: '500px'
  }
}
const ProgressList = [{
  label: 'HTML',
  value: '80'
}, {
  label: 'CSS',
  value: '70'
}, {
  label: 'Javascript',
  value: '60'
}]
</script>

<style lang="css" scoped>
@import url("./../assets/styles/animation.css");
.content p {
  margin: 20px 0;
}
.content {
  max-width: 50rem;
  margin: 5rem auto;
  text-align: center;
}
.hero-tree {
  position: absolute;
  top: -50px;
  left: -50px;
  width: 80px;
  height: 80px;
  border: 30px solid #ddf6ff;
  z-index: -1;
}
.hero-flower {
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  border: 30px solid #d3e0f3;
}
.hero {
  margin-top: 70px;
  padding: 130px 0;
  background-color: #f9f9f9;
}
.hero-container {
  position: relative;
  max-width: 50rem;
  margin: 0 auto;
  text-align: right;
  line-height: 0;
}
.hero-name h1 {
  font-size: 5rem;
  color: #b4e3f4;
  line-height: .9;
  font-weight: 400;
  text-transform: uppercase;
}
.hero-name h2 {
  font-size: 1.2rem;
  font-weight: 200;
  color: #222;
  line-height: 1.3;
}
.hero-name {
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: left;
  display: inline-block;
  line-height: 1.2;
}
.progressBar-container {
  margin: 50px auto;
}
.contact-layout {
  position: absolute;
  width: 100%;
  margin: 0 auto;
}
.hero-avatar {
  position: relative;
  display: inline-block;
  z-index: 2;
}
.hero-avatar-img {
  width: 300px;
  height: 300px;
  background-color: #f3f3f3;
  background-image: url('./../assets/images/me-1.jpg');
  background-size: cover;
  background-position: center;
  line-height: 0;
  box-shadow: 0 0 6rem rgba(0,0,0,.3);
}
.contact-item-text {
  font-size: 15px;
  color: #000;
  font-weight: 400;
}
/*動畫*/
.fade-item-enter-active, .fade-item-leave-active {
  transition: all .5s ease-out;
  opacity: 1;
}
.fade-item-enter, .fade-item-leave-active {
  opacity: 0;
}
#particlesJs {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  /*background-image: url('');*/
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
}
</style>
