<template lang="html">
  <div class="">
    <div :style="progressClass.container" class="progress-container" v-for="item in progressList">
      <div class="progress-label">
        {{item.label}}
      </div>
      <div :style="[progressClass.inner, {width: item.value + '%'}]" class="progress-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'progress-bar',

  props: {
    progressClass: Object,
    progressList: Array
  }
}
</script>

<style lang="css" scoped>
.progress-label {
  position: absolute;
  left: -10px;
  top: 1px;
  transform: translate(-100%, -50%);
  line-height: 0;
  margin-right: 10px;
}
.progress-container {
  margin: 20px auto;
  position: relative;
  height: 3px;
  background-color: #d4d4d4;
}
.progress-inner {
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: #000;
  animation: progress 1s;
}
@keyframes progress {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 1;
    opacity: 1;
  }
}
</style>
