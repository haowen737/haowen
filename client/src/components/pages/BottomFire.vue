<template lang="html">
  <div class="bottom-fire" v-show="show">
    <!-- <span>浙ICP备15044314号-1</span> -->
    <span>withyoufriends 由 </span>
    <a href="https://vuejs.org/" target="_Blank">Vue</a>
    <span>｜ </span>
    <a href="http://koajs.com/" target="_Blank">Koa</a>
    <span> 强力驱动</span>
  </div>
</template>

<script>
export default {
  name: 'BottomFire',
  props: {
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    }
  }
}
</script>

<style lang="css" scoped>
.bottom-fire a {
  color: #fff;
  font-weight: 400;
}
.bottom-fire {
  margin-top: 100px;
  height: 100px;
  background-color: #2b2b2b;
  width: 100%;
  z-index: 999;
  text-align: center;
  font-size: 15px;
  font-weight: 100;
  line-height: 100px;
  color: #bbb;
}
</style>
