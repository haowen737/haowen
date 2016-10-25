<template lang="html">
  <div class="loading-layout">
    <div class="ball ball-1"></div>
    <div class="ball ball-2"></div>
    <div class="ball ball-3"></div>
    <div class="ball ball-4"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
.loading-layout {
  position: absolute;
  height: 10px;
  width: 100px;
  left: 50%;
  transform: translateX(-50%);
}
.ball {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #fff;
  position:absolute;
  filter: blur(1px);
}
.ball-1 {
  animation: ball-1 3s infinite;
}
.ball-2 {
  animation: ball-2 3s infinite;
}
.ball-3 {
  animation: ball-3 3s infinite;
}
.ball-4 {
  animation: ball-4 3s infinite;
}
@keyframes ball-1 {
  0% {
    left:0px;
  }
  50% {
    left: 100px;
  }
  100% {
    left:0px;
  }
}
@keyframes ball-2 {
  0% {
    left:100px;
  }
  50% {
    left: 0px;
  }
  100% {
    left:100px;
  }
}
@keyframes ball-3 {
  0% {
    left:0px;
  }
  25% {
    left: 100px;
  }
  50% {
    left: 0px;
  }
  75% {
    left: 100px;
  }
  100% {
    left: 0px;
  }
}
@keyframes ball-4 {
  0% {
    left: 100px;
  }
  25% {
    left: 0px;
  }
  50% {
    left: 100px;
  }
  75% {
    left: 0px;
  }
  100% {
    left: 100px;
  }
}
</style>
