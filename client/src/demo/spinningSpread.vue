<template lang="html">
  <div class="bottom-btn" @click="clickList()" :class="btnTransition">
    <div class="line" :class="line1"></div>
    <div class="line" :class="line2"></div>
    <div class="line" :class="line3"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btnTransition: '',
      line1: '',
      line2: '',
      line3: ''
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    clickList () {
      if (this.btnTransition !== 'btn-upper-arrow') {
        this.btnTransition = 'btn-upper-arrow'
        this.line1 = 'line-arrow-1'
        this.line2 = 'line-arrow-2'
        this.line3 = 'line-arrow-3'
      } else {
        this.btnTransition = 'btn-normal'
        this.line1 = 'line-normal-1'
        this.line2 = 'line-normal-2'
        this.line3 = 'line-normal-3'
      }
      this.$emit('on-spread')
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
.line {
  width: 20px;
  height: 2px;
  background-color: #000;
  margin: 5px 0;
  /*filter: blur(1px);*/
}
.bottom-btn {
  position: fixed;
  z-index: 10;
  bottom: 120px;
  left: 50%;
  cursor: pointer;
}
/*动画*/
.btn-normal {
  transition: all 1s;
  animation-name: btn-transition;
  animation: btn-normal-transition .5s;
  transform: rotate(360deg);
}
@keyframes btn-normal-transition {
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.btn-upper-arrow {
  transition: all 1s;
  animation-name: btn-transition;
  animation: btn-upper-arrow-transition .5s;
  transform: rotate(90deg);
}
@keyframes btn-upper-arrow-transition {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(90deg);
  }
}
.line-arrow-1 {
  animation: line-arrow-1 .2s linear;
  width: 15px;
  transform: rotate(-45deg) translateX(-3px);
  background-color: #fff;
}
.line-arrow-2 {
  animation: line-arrow-2 .2s linear;
  background-color: #fff;
}
.line-arrow-3 {
  animation: line-arrow-3 .2s linear;
  width: 15px;
  transform: rotate(45deg) translateX(-3px);
  background-color: #fff;
}
@keyframes line-arrow-1 {
  0% {
    transform: rotate(0deg) translateX(0px);
    background-color: #000;
    width: 20px;
  }
  100% {
    transform: rotate(-45deg) translateX(-3px);
    background-color: #fff;
    width: 15px;
  }
}
@keyframes line-arrow-2 {
  0% {
    transform: rotate(0deg);
    background-color: #000;
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
    background-color: #fff;
  }
}
@keyframes line-arrow-3 {
  0% {
    transform: rotate(0deg) translateX(0px);
    background-color: #000;
    width: 20px;
  }
  100% {
    transform: rotate(45deg) translateX(-3px);
    background-color: #fff;
    width: 15px;
  }
}
.line-normal-1 {
  animation: line-normal-1 .2s linear;
  width: 20px;
  background-color: #000;
  transform: rotate(0deg) translateX(0px);
}
.line-normal-2 {
  animation: line-normal-2 .2s linear;
  background-color: #000;
}
.line-normal-3 {
  animation: line-normal-3 .2s linear;
  width: 20px;
  background-color: #000;
  transform: rotate(180deg) translateX(0px);
}
@keyframes line-normal-1 {
  0% {
    transform: rotate(-45deg) translateX(-3px);
    width: 20px;
    background-color: #fff;
  }
  100% {
    transform: rotate(0deg) translateX(0px);
    width: 20px;
    background-color: #000;
  }
}
@keyframes line-normal-2 {
  0% {
    transform: rotate(0deg);
    background-color: #fff;
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
    background-color: #000;
  }
}
@keyframes line-normal-3 {
  0% {
    transform: rotate(45deg) translateX(-3px);
    background-color: #fff;
    width: 20px;
  }
  100% {
    transform: rotate(180deg) translateX(0px);
    background-color: #000;
    width: 20px;
  }
}
</style>
