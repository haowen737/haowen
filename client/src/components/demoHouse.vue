<template lang="html">
  <div class="demoHouse-layout" id="container">
    <header>
      <canvas id="canvas"
      ref="canvas"
      width="500"
      height="300"></canvas>
    </header>
    <transition name="content-latout">
      <div class="content-latout" v-show="showContent">
        <div class="content">
          <div class="inner-box">
            <router-link :to="{path:'/demo/zoom-slider'}">1. 一个轮播</router-link>
            <router-link :to="{path:'/demo/clock'}">2. 一只时钟</router-link>
          </div>
        </div>
      </div>
    </transition>
    <spinning-spread @on-spread="spreadContent"></spinning-spread>
    <transition name="fade">
      <div class="loading-bg" v-show="showLoading">
        <loading top="50%"></loading>
      </div>
    </transition>
  </div>
</template>

<script>
import loading from './../packages/loading'
import spinningSpread from './../demo/spinningSpread'
export default {
  data  () {
    return {
      showLoading: false,
      showContent: false
    }
  },
  computed: {},
  mounted  () {
    this.initPage()
    // this.queryDemos()
  },
  methods: {
    queryDemos () {
      this.showLoading = true
      window.setTimeout(() => {
        this.showLoading = false
      }, 2000)
    },
    initPage () {
      this.getPen()
    },
    getPen () {
      if (this.$refs.canvas.getContext) {
        this.ctx = this.$refs.canvas.getContext('2d')
        this.getImg()
      } else {
        return
      }
    },
    getImg () {
      let image = new window.Image()
      image.src = require('./../assets/images/demo-house.png')
      image.onload = () => {
        console.log(image.width)
        let w = image.width
        let h = image.height
        this.ctx.drawImage(image, (500 - w) / 2, (300 - h) / 2)
      }
    },
    spreadContent () {
      this.showContent ? this.showContent = false : this.showContent = true
    }
  },
  watch: {},
  components: {
    loading, spinningSpread
  }
}
</script>

<style lang="css" scoped>
.inner-box a {
  color: #fff;
  font-size: 20px;
  display: block;
}
.content {
  padding: 80px;
}
.content-latout {
  background-color: #000;
  width: 100%;
  height: 100%;
  color: #fff;
  line-height: 2.5;
  font-weight: lighter;
  position: absolute;
  top: 0;
  z-index: 1;
}
.demoHouse-layout header>img {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.demoHouse-layout header {
  width: 100%;
  height: 100%;
  text-align: center;
}
.demoHouse-layout {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.loading-bg {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
}
/*过渡*/
.content-latout-enter-active, .content-latout-leave-active {
  transition: all .7s ease;
  /*height: calc(100%);*/
  position: absolute;
  top: 0;
  opacity: 1;
  /*opacity: 1;*/
}
.content-latout-enter, .content-latout-leave-active {
  background-color: rgba(0,0,0,0);
  /*height: calc(-10%);*/
  position: absolute;
  top: 60px;
  opacity: 0;
  /*opacity: 0;*/
}
</style>
