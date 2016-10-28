<template lang="html">
  <div class="demoHouse-layout" id="container">
    <header>
      <img style="display:none" ondragstart="return false" src="./../assets/images/demo-house.png" alt="" />
    </header>
    <div class="content" v-show="showContent" transition="content">
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
    this.queryDemos()
  },
  attached: function () {},
  methods: {
    queryDemos () {
      // this.showLoading = true
      window.setTimeout(() => {
        this.showLoading = false
      }, 2000)
    },
    initPage () {
      this.headerLg = 'header-lg'
    },
    spreadContent () {
      console.log(123)
      this.showContent ? this.showContent = false : this.showContent = true
      console.log(this.showContent)
    }
  },
  watch: {},
  components: {
    loading, spinningSpread
  }
}
</script>

<style lang="css" scoped>
.content {
  background-color: #3e3e3e;
  width: 100%;
  height: 100%;
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
.content-transition {
  transition: all .5s;
  /*height: calc(100%);*/
  position: absolute;
  top: 0;
  opacity: 1;
  /*opacity: 1;*/
}
.content-enter, .content-leave {
  background-color: rgba(0,0,0,0);
  /*height: calc(-10%);*/
  position: absolute;
  top: 100px;
  opacity: 0;
  /*opacity: 0;*/
}
</style>
