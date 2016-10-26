<template lang="html">
  <div class="demoHouse-layout" id="container">
    <header :class="headerLg">
      Demo House
    </header>
    <div class="content" v-show="showContent">
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
      showLoading: false,
      headerLg: {}
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
      console.log(this.$log())
    }
  },
  watch: {},
  components: {
    loading
  }
}
</script>

<style lang="css" scoped>
.demoHouse-layout header{
  width: 100%;
  text-align: center;
  cursor: default;
}
header {
  text-align: center;
  font-weight: 100;
  font-size: 30px;
  line-height: 100px;
  transition: all 1s cubic-bezier(0.49, 1.94, 0.84, 1.21);
}
.demoHouse-layout {
  width: 100%;
  height: 10%;
}
.loading-bg {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
}
</style>
