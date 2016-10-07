<template lang="html">
  <div class="bottom-fire" v-show="show" transition="bottomFire">
    来和郑皓文一起玩耍吧！
  </div>
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
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
.bottom-fire {
  position: fixed;
  bottom: 0;
  background-color: #000;
  width: 100%;
  z-index: 999;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
  color: #fff;
}
.bottomFire-transition {
  transition: all .3s ease;
  height: 100px;
  /*opacity: 1;*/
}
.bottomFire-enter, .bottomFire-leave {
  /*opacity: 0;*/
  height: 0;
}
</style>
