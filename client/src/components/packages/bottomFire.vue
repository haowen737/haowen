<template lang="html">
  <transition name="bottomFire">
    <div class="bottom-fire" v-show="show">
      withyoufriends 由 <a href="https://vuejs.org/" target="_Blank">Vue</a>｜ <a href="http://koajs.com/" target="_Blank">Koa</a> 强力驱动
    </div>
  </transition>
</template>

<script>
export default {
  name: 'bottomFire',
  props: {
    show: {
      type: Boolean,
      default: false,
      twoWay: true
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
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
.bottomFire-enter-active, .bottomFire-leave-active {
  transition: all .3s ease;
  height: 100px;
  /*opacity: 1;*/
}
.bottomFire-enter, .bottomFire-leave-active {
  /*opacity: 0;*/
  height: 0;
}
</style>
