<template lang="html">
  <div class="demoHouse-layout" id="container">
    <header>
      <canvas id="canvas"
      v-el:canvas
      width="500"
      height="300"></canvas>
    </header>
    <div class="content-latout" v-show="showContent" transition="content-latout">
      <div class="content">
        <div class="inner-box">
          <a v-link="{path:'/demo/zoom-slider'}">1. Zoom Slider</a>
        </div>
      </div>
    </div>
    <spinning-spread @on-spread="spreadContent"></spinning-spread>
  </div>
  <div class="loading-bg" v-show="showLoading" transition="fade">
    <loading top="50%"></loading>
  </div>
</template>

<script>
import loading from './../directive/loading'
import spinningSpread from './../demo/spinningSpread'
export default {
  data: function () {
    return {
      showLoading: false,
      showContent: false
    }
  },
  computed: {},
  ready: function () {
    this.initPage()
    // this.queryDemos()
  },
  attached: function () {},
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
      if (this.$els.canvas.getContext) {
        this.ctx = this.$els.canvas.getContext('2d')
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
.content-latout-transition {
  transition: all .7s ease;
  /*height: calc(100%);*/
  position: absolute;
  top: 0;
  opacity: 1;
  /*opacity: 1;*/
}
.content-latout-enter, .content-latout-leave {
  background-color: rgba(0,0,0,0);
  /*height: calc(-10%);*/
  position: absolute;
  top: 60px;
  opacity: 0;
  /*opacity: 0;*/
}
</style>
