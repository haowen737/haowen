<template lang="html">
  <transition name="fade">
    <div class="loading-layout" :style="{top: top}" v-show="show">
      <div class="ball ball-1" :style="{backgroundColor: bgColor}"></div>
      <div class="ball ball-2" :style="{backgroundColor: bgColor}"></div>
      <div class="ball ball-3" :style="{backgroundColor: bgColor}"></div>
      <div class="ball ball-4" :style="{backgroundColor: bgColor}"></div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '50%'
    },
    bgColor: {
      type: String,
      default: '#000'
    }
  },
  computed: {},
  mounted () { },
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
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
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
    left: 0px;
  }
  50% {
    left: 100px;
  }
  100% {
    left: 0px;
  }
}

@-webkit-keyframes ball-2 {
  0% {
    left: 100px;
  }
  50% {
    left: 0px;
  }
  100% {
    left: 100px;
  }
}

@-webkit-keyframes ball-3 {
  0% {
    left: 0px;
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

@-webkit-keyframes ball-4 {
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

@keyframes ball-1 {
  0% {
    left: 0px;
  }
  50% {
    left: 100px;
  }
  100% {
    left: 0px;
  }
}

@keyframes ball-2 {
  0% {
    left: 100px;
  }
  50% {
    left: 0px;
  }
  100% {
    left: 100px;
  }
}

@keyframes ball-3 {
  0% {
    left: 0px;
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
