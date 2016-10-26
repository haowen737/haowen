<template lang="html">
  <div class="demoHouse-layout" id="container">
    <header>
      <img ondragstart="return false" src="./../assets/images/demo-house.png" alt="" />
    </header>
    <div class="content" v-show="showContent">
    </div>
    <div class="bottom-btn" @click="clickList">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
  <div class="loading-bg" v-show="showLoading" transition="fade">
    <loading top="50%"></loading>
  </div>
</template>

<script>
import loading from './../directive/loading'
export default {
  data: function () {
    return {
      showLoading: false
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
      this.showLoading = true
      window.setTimeout(() => {
        this.showLoading = false
      }, 2000)
    },
    initPage () {
      this.headerLg = 'header-lg'
    },
    clickList () {
      console.log(123)
    }
  },
  watch: {},
  components: {
    loading
  }
}
</script>

<style lang="css" scoped>
.line {
  width: 20px;
  height: 2px;
  background-color: #000;
  margin-bottom: 5px;
}
.bottom-btn {
  position: fixed;
  z-index: 10;
  bottom: 120px;
  left: 50%;
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
</style>
