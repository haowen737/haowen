<template lang="html">
  <div class="black-layout">
    <video class="vid-container"
    :style="{top:videoTop + 'px'}"
    src="/static/vid/black_bg.mp4"
    preload="auto"
    loop="loop"
    id="video">
		</video>
    <transition name="black-text">
      <div class="text-container" v-show="!showLoading">
        <p class="title">BLACK</p>
        <p class="title-second">is only as beautiful... as you make it</p>
      </div>
    </transition>
    <div class="demolist-container" @mouseover="doDemolist">
      <transition name="demolist">
        <div class="demolist" v-show="showDemolist" @mouseout="reDemolist">
          <router-link class="demolist-item-container" :to="{path: demo.url}" v-for="demo in demolist">
            <div class="demolist-item-img">

            </div>
            <p class="demolist-item-title">{{demo.title}}</p>
          </router-link>
        </div>
      </transition>
    </div>
    <div class="loading-bg" v-show="showLoading">
      <loading top="50%"></loading>
    </div>
  </div>
</template>

<script>
import demolist from './../demolist.js'
import loading from './../packages/loading'
export default {
  data () {
    return {
      showDemolist: false,
      showLoading: false,
      vidSrc: '',
      videoTop: 0,
      video: {},
      demolist: []
    }
  },
  computed: {},
  mounted () {
    this.demolist = demolist
    this.initPage()
  },
  methods: {
    initPage () {
      this.video = document.getElementById('video')
      setTimeout(() => {
        this.video.play()
      }, 2000)
    },
    doDemolist () {
      this.showDemolist = true
      this.videoTop = -200
    },
    reDemolist () {
      this.showDemolist = false
      this.videoTop = 0
    }
  },
  components: {
    loading
  }
}
</script>

<style lang="css" scoped>
.demolist-item a {
  width: 100%;
  height: 100%;
  color: #fff;
}
.demolist-item-img {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: #000;
}
.demolist-item-container {
  display: inline-block;
  flex: 1 1 auto;
  text-align: center;
  margin: 20px;
}
.demolist {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  background-color: #fff;
}
.demolist-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
}
.vid-container {
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 1s;
}
.text-container {
  text-align: center;
  position: fixed;
  width: 100%;
  top: 50%;
  line-height: 1;
  transform: translateY(-40px);
  color: #fff;
  font-weight: 100;
  font-size: 40px;
  z-index: 10;
  cursor: default;
  animation: blackText 3s;
}
.text-container p {
  width: 100%;
  text-align: center;
  font-weight: lighter;
}
.loading-bg {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: -1;
}
.black-text-enter-active, .black-text-leave-active {
  transition: all 2s;
  opacity: 1;
}
.black-text-enter, .black-text-leave-active {
  opacity: 0;
}
.black-layout {
  width: 100%;
  height: 100%;
  background-color: #000;
}
.title-second {
  font-size: 12px;
}
@keyframes blackText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.demolist-enter-active, .demolist-leave-active {
  transition: all .5s ease;
  opacity: 1;
  height: 200px;
}
.demolist-enter, .demolist-leave-active {
  opacity: 0;
  height: 0px;
}
</style>
