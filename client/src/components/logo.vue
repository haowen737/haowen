<!-- 將“皓文”圖片重組 -->
<template lang="html">
  <div class="nav">
    <canvas id="canvas" v-el:canvas width="400" height="100"></canvas>
    <h1>Live a life you will remember!</h1>
    <div class="logo-btns">
      <div class="logo-btn"><a v-link="{path:'/photo'}">PHOTO</a></div>
      <div class="logo-btn"><a v-link="{path:'/code'}">CODE</a></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      ctx: '',
      dotList: []
    }
  },
  computed: {},
  ready () {
    this.getPen()
  },
  attached () {},
  methods: {
    getPen () {
      if (this.$els.canvas.getContext) {
        this.ctx = this.$els.canvas.getContext('2d')
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
        this.$router.go({path: '/code'})
      }, 500)
    }
  },
  components: {}
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
  /*background-color: rgba(255, 255, 255, 0.8)*/
}
.logo-btns {
  display: flex;
  margin-top: 20px;
}
.logo-btn {
  width: 200px;
  line-height: 30px;
  text-align: center;
}
.logo-btn a {
  display: block;
  width: 100%;
  transition: background-color .4s cubic-bezier(0, -0.37, 0, 0.7);
}
.logo-btn a:hover {
  background-color: #000;
  color: #fff;
}
</style>
