<template lang="html">
  <div>
    <transition-group name="loading-fade">
      <div class="neo-loading-bg" :style="{backgroundColor: backgroundColor}" key="bg" v-show="show"></div>
      <div class="neo-loading-layout" :style="{top: top}" v-show="show" key="layout">
        <div class="ball ball-1" :style="{backgroundColor: color}"></div>
        <div class="ball ball-2" :style="{backgroundColor: color}"></div>
        <div class="ball ball-3" :style="{backgroundColor: color}"></div>
        <div class="ball ball-4" :style="{backgroundColor: color}"></div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backgroundColor: null,
      color: null,
      show: false
    }
  },
  props: {
    top: {
      type: String,
      default: '50%'
    }
  }
}
</script>

<style lang="css" scoped>
.neo-loading-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: .7;
  transition: all .7s;
  animation: bg .7s ease;
  z-index: 1000;
}
@keyframes bg {
  from {
    opacity: 0;
  }
  to {
    opacity: .7;
  }
}
.neo-loading-layout {
  position: absolute;
  height: 10px;
  width: 100px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 1001;
}

.ball {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  position: absolute;
}

.ball-1 {
  -webkit-animation: ball-1 3s infinite;
  animation: ball-1 3s infinite;
}

.ball-2 {
  -webkit-animation: ball-2 3s infinite;
  animation: ball-2 3s infinite;
}

.ball-3 {
  -webkit-animation: ball-3 3s infinite;
  animation: ball-3 3s infinite;
}

.ball-4 {
  -webkit-animation: ball-4 3s infinite;
  animation: ball-4 3s infinite;
}

@-webkit-keyframes ball-1 {
  0% {
    transform: translate3d(0px, 0, 0);
  }
  50% {
    transform: translate3d(100px, 0, 0);
  }
  100% {
    transform: translate3d(0px, 0, 0);
  }
}

@-webkit-keyframes ball-2 {
  0% {
    transform: translate3d(100px, 0, 0);
  }
  50% {
    transform: translate3d(0px, 0, 0);
  }
  100% {
    transform: translate3d(100px, 0, 0);
  }
}

@-webkit-keyframes ball-3 {
  0% {
    transform: translate3d(0px, 0, 0);
  }
  25% {
    transform: translate3d(100px, 0, 0);
  }
  50% {
    transform: translate3d(0px, 0, 0);
  }
  75% {
    transform: translate3d(100px, 0, 0);
  }
  100% {
    transform: translate3d(0px, 0, 0);
  }
}

@-webkit-keyframes ball-4 {
  0% {
    transform: translate3d(100px, 0, 0);
  }
  25% {
    transform: translate3d(0px, 0, 0);
  }
  50% {
    transform: translate3d(100px, 0, 0);
  }
  75% {
    transform: translate3d(0px, 0, 0);
  }
  100% {
    transform: translate3d(100px, 0, 0);
  }
}

@keyframes ball-1 {
  0% {
    transform: translate3d(0px, 0, 0);
  }
  50% {
    transform: translate3d(100px, 0, 0);
  }
  100% {
    transform: translate3d(0px, 0, 0);
  }
}

@keyframes ball-2 {
  0% {
    transform: translate3d(100px, 0, 0);
  }
  50% {
    transform: translate3d(0px, 0, 0);
  }
  100% {
    transform: translate3d(100px, 0, 0);
  }
}

@keyframes ball-3 {
  0% {
    transform: translate3d(0px, 0, 0);
  }
  25% {
    transform: translate3d(100px, 0, 0);
  }
  50% {
    transform: translate3d(0px, 0, 0);
  }
  75% {
    transform: translate3d(100px, 0, 0);
  }
  100% {
    transform: translate3d(0px, 0, 0);
  }
}

@keyframes ball-4 {
  0% {
    transform: translate3d(100px, 0, 0);
  }
  25% {
    transform: translate3d(0px, 0, 0);
  }
  50% {
    transform: translate3d(100px, 0, 0);
  }
  75% {
    transform: translate3d(0px, 0, 0);
  }
  100% {
    transform: translate3d(100px, 0, 0);
  }
}

.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: all .6s ease-out;
  opacity: 1;
}

.loading-fade-enter,
.loading-fade-leave-active {
  opacity: 0;
}

</style>
