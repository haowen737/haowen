<!-- 將“皓文”圖片重組 -->
<template lang="html">
  <div class="nav">
    <!-- <canvas id="canvas"
    ref="canvas"
    width="400"
    height="100"
    @mouseover="showMotto=true"
    @mouseout="showMotto=false"></canvas> -->
    <canvas id="canvas"
    ref="canvas"
    width="400"
    height="100"></canvas>
    <transition name="motto">
      <h1 v-show="showMotto">Live a life you will remember!</h1>
    </transition>
    <div class="logo-btns">
      <div class="logo-btn"><router-link :to="{path:'/code/article'}">Pen</router-link></div>
      <div class="logo-btn"><router-link :to="{path:'/black'}">Blvck</router-link></div>
      <div class="logo-btn"><router-link :to="{path:'/mirror'}">Mirror</router-link></div>
      <div class="logo-btn"><router-link :to="{path:'/contact'}">Me</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  data  () {
    return {
      ctx: '',
      showMotto: true,
      dotList: []
    }
  },
  computed: {},
  mounted () {
    this.getPen()
  },
  methods: {
    getPen () {
      if (this.$refs.canvas.getContext) {
        this.ctx = this.$refs.canvas.getContext('2d')
      }
      this.getImg()
    },
    getImg () {
      let image = new window.Image()
      image.onload = () => {
        this.ctx.drawImage(image, 0, 0)
        this.getImgData(image)
      }
      image.src = require('./../assets/images/logo.png')
    },
    getImgData (image) {
      this.dotList = []
      let imageData = this.ctx.getImageData(0, 0, 394, 77)
      for (var x = 0; x < imageData.width; x += 2) {
        for (var y = 0; y < imageData.height; y += 2) {
          var i = (y * imageData.width + x) * 4
          if (imageData.data[i + 3] === 255) {
            let dot = {}
            dot.x = x + (Math.random() - 0.5) * 7
            dot.y = y + (Math.random() - 0.5) * 7
            dot.r = 1
            this.dotList.push(dot)
          }
        }
      }
      this.draw(image)
    },
    draw (image) {
      this.ctx.clearRect(0, 0, 600, 400)
      for (var i = 0; i < this.dotList.length; i++) {
        this.ctx.fillRect(this.dotList[i].x, this.dotList[i].y, 1, 1)
      }
    },
    gotoCode () {
      this.showNav = false
      setTimeout(() => {
        this.$router.push({path: '/code'})
      }, 500)
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
.logo {
  text-align: center;
}
.nav h1 {
  font-size: 20px;
  color: #3d3d3d;
  font-family: cursive;
  cursor: default;
  font-weight: lighter;
  /*font-weight: bold;*/
}
.nav {
  position: absolute;;
  width: 400px;
  top: 35%;
  left: 50%;
  margin-left: -200px;
  width: 400px;
  height: 180px;
  text-align: center;
}
.logo-btns {
  display: flex;
  margin-top: 20px;
}
.logo-btn {
  text-align: center;
  width: 200px;
  margin: 0;
  line-height: 30px;
  text-align: center;
}
.logo-btn a {
  display: block;
  padding: 0;
  /*width: 100%;*/
  transition: all .2s cubic-bezier(0, -0.37, 0, 0.7);
}
.logo-btn a:hover {
  margin: 0 10px;
  background-color: #222;
  color: #fff;
}
</style>
