<template lang="html">
  <transition name="slideup"
    <div class="clock-wrap">
      <div class="clock-surface">
        <div class="clock-center">
          <div class="hand-hour" :style="{transform: 'rotate(' + hourRotate + 'deg)'}"></div>
          <div class="hand-min" :style="{transform: 'rotate(' + minRotate + 'deg)'}"></div>
          <div class="hand-sec" :style="{transform: 'rotate(' + secRotate + 'deg)'}"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      hourRotate: '',
      minRotate: '',
      secRotate: ''
    }
  },
  mounted () {
    this.initClock()
  },
  methods: {
    initClock () {
      this.hourRotate = 180
      this.minRotate = 180
      this.secRotate = 180
      this.getTime()
      this.interval()
    },
    getTime () {
      let cur = new Date()
      let hour = cur.getHours()
      let min = cur.getMinutes()
      let sec = cur.getSeconds()
      this.formatClock(hour, min, sec)
    },
    formatClock (h, m, s) {
      h > 12 ? h = h - 12 : ''
      this.hourRotate = (30 * h) + 180
      this.minRotate = (m * 6) + 180
      this.secRotate = (s * 6) + 180
    },
    interval () {
      window.setInterval(() => {
        this.getTime()
      }, 1000)
    }
  }
}
</script>

<style lang="css" scoped>
.clock-center:after {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: #ffed6c;
  transform: translate(-50%,-50%);
}
.clock-center {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 0;
  width: 1px;
  height: 1px;
  border-radius: 10px;
  background-color: #ffed6c;
}
.hand-hour, .hand-min, .hand-sec {
  transform-origin: top center;
  box-shadow: -1px 1px 1px rgba(0,0,0,0.2);

}
.hand-hour {
  width: 6px;
  left: -3px;
  border-radius: 20px;
  height: 60px;
  position: absolute;
  background-color: #525252;
}
.hand-min {
  width: 4px;
  left: -2px;
  border-radius: 20px;
  height: 80px;
  position: absolute;
  background-color: #525252;
}
.hand-sec {
  width: 2px;
  left: -1px;
  border-radius: 20px;
  height: 120px;
  position: absolute;
  background-color: #525252;
}
.clock-surface {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 300px;
  height: 300px;
  border-radius: 300px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
}
.clock-wrap {
  width: 100%;
  height: 100%;
  background-color: #ffd6d6;
}
</style>
