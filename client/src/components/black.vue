<template lang="html">
  <div class="black-layout">
    <video class="vid-container"
    src="/static/vid/black_bg.mp4"
    preload="auto"
    loop="loop"
    id="video">
		</video>
    <div class="text-container" v-show="!showLoading" transition="black-text">
      <p class="title">BLACK</p>
      <p class=""></p>
    </div>
    <div class="loading-bg" v-show="showLoading">
      <loading top="50%"></loading>
    </div>
  </div>
</template>

<script>
import loading from './../directive/loading'
export default {
  data () {
    return {
      showLoading: false,
      vidSrc: '',
      video: {}
    }
  },
  computed: {},
  ready () {
    this.initPage()
  },
  attached () {},
  methods: {
    initPage () {
      this.video = document.getElementById('video')
      setTimeout(() => {
        this.video.play()
      }, 2000)
    }
  },
  components: {
    loading
  }
}
</script>

<style lang="css" scoped>
.vid-container {
  width: 100%;
  height: 100%;
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
.black-text-transition {
  transition: all 2s ease-out;
  opacity: 1;
}
.black-text-enter, .black-text-leave {
  opacity: 0;
}
.black-layout {
  width: 100%;
  height: 100%;
  background-color: #000;
}
@keyframes blackText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
