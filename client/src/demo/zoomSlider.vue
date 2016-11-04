<template lang="html">
  <div class="zoom-slider-layout">
    <header>
      <h1>Zoom Slider</h1>
      <!-- <span>design by</span> -->
    </header>
    <section class="slider">
      <div class="slide-item" v-show="current===1" transition="slide-item">
        <div class="inner-container">
          <div class="test-img-box" v-show="current===1" transition="slide-img">1</div>
          <div class="inner-text">
            test1
          </div>
        </div>
      </div>
      <div class="slide-item" v-show="current===2" transition="slide-item">
        <div class="inner-container">
          <div class="test-img-box" v-show="current===2" transition="slide-img">1</div>
          <div class="inner-text">
            test2
          </div>
        </div>
      </div>
      <div class="slide-item" v-show="current===3" transition="slide-item">
        <div class="inner-container">
          <div class="test-img-box" v-show="current===3" transition="slide-img">1</div>
          <div class="inner-text">
            test3
          </div>
        </div>
      </div>
      <div class="slide-item" v-show="current===4" transition="slide-item">
        <div class="inner-container">
          <div class="test-img-box" v-show="current===4" transition="slide-img">1</div>
          <div class="inner-text">
            test4
          </div>
        </div>
      </div>
      <div class="slide-item" v-show="current===5" transition="slide-item">
        <div class="inner-container">
          <div class="test-img-box" v-show="current===5" transition="slide-img">1</div>
          <div class="inner-text">
            test5
          </div>
        </div>
      </div>
      <nav class="slider-nav">
        <a @click="toPrev"><img src="./../assets/images/i-back.png" alt="" /></a>
        <a @click="zoom"><img src="./../assets/images/i-search.png" alt="" /></a>
        <a @click="toNext"><img src="./../assets/images/i-more.png" alt="" /></a>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      current: 1,
      isEnter: 1
    }
  },
  ready: function () {},
  methods: {
    toPrev () {
      let c = this.current
      if (c <= 1) {
        this.current = 5
      } else {
        this.current -= 1
      }
      // this.isEnter = this.current
      this.isLeave = this.current
    },
    toNext () {
      let c = this.current
      if (c >= 5) {
        this.current = 1
      } else {
        this.current += 1
      }
      // this.isEnter = this.current
      this.isLeave = this.current
      // this.current += 1
    }
  },
  watch: {
    'current': function (val) {
      console.log(val)
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
.slider-nav a {
  margin: 0 20px;
  cursor: pointer;
}
.slider-nav img {
  width: 20px;
}
/*进入与离开*/
.slide-img-transition {
  transition: all .7s;
  transform: rotate(0) translateX(-50%);
  left: 50%;
  opacity: 1;
}
.slide-img-enter {
  opacity: 0;
  left:30%;
  transform: rotate(-15deg) translateX(-50%);
}
.slide-img-leave {
  left: 55%;
  opacity: 0;
  left: 80%;
  transform: rotate(25deg) translateX(-50%);
}
.slide-item-transition {
  transition: all .7s;
  opacity: 1;
}
.slide-item-enter, .slide-item-leave  {
  opacity: 0;
}
/*.inner-img-enter {
  animation: img-enter 1s infinite;
}
@keyframes img-enter {
  0% {
    left:30%;
    opacity: 0;
    transform: rotate(-15deg) translateX(-50%);
  }
  100% {
    left: 50%;
    opacity: 1;
    transform: rotate(0) translateX(-50%);
  }
}
.inner-img-leave {
  animation: img-leave 1.5s infinite;
}
@keyframes img-leave {
  0% {
    left: 50%;
    opacity: 1;
    transform: rotate(0) translateX(-50%);
  }
  100% {
    left: 55%;
    opacity: 0;
    transform: rotate(10deg) translateX(-50%);
  }
}*/
.inner-text {
  position: absolute;
  margin: 0px auto;
  bottom: 150px;
  width: 100%;
  text-align: center;
  color: #fff;
}
.test-img-box {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid #666;
  top: 50px;
}
.inner-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.slider-nav {
  position: absolute;
  width: 100%;
  bottom: 50px;
  text-align: center;
}
.slider-nav button {
  display: inline-block;
  text-align: center;
  margin: 0 20px;
}
.slide-item {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.slider, .slide-item {
  width: 100%;
}
.slider {
  position: relative;
  height: calc(100% - 120px);
}
.zoom-slider-layout {
  width: 100%;
  height: 100%;
  background: #222125;
}
.zoom-slider-layout header>h1 {
  line-height: 100px;
}
.zoom-slider-layout header>span {
  position: relative;
  top: -18px;
  font-size: 18px;
  line-height: 1;
}
.zoom-slider-layout header {
  text-align: center;
  color: #CECECE;
  height: 120px;
}
</style>
