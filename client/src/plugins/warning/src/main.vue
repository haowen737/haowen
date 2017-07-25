<template>
	<transition name="warning">
		<div class='warning-container' v-show="show">
      <p>{{content || '看起来服务器抛出了一个未知错误'}}</p>
    </div>
	</transition>
</template>

<script>
export default {

  name: 'main',

  data () {
    return {
      show: false,
      content: ''
    }
  },
  watch: {
    'show' (val) {
      console.log(val)
      if (val) {
        setTimeout(() => {
          this.show = false
        }, 2000)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.warning-container {
	position: fixed;
	top: 0;
  left: 0;
	width: 100%;
	background-color: #ffc3d2;
	z-index: 200;
  text-align: center;
  transform-origin: left;
  z-index: 3000;
}
.warning-container p {
  font-size: 1rem;
  color: #333;
  line-height: 44px;
}
.warning-enter-active, .warning-leave-active {
  transition: all  .7s ease;
}
.warning-enter, .warning-leave-active {
  transform: translateY(-100%);
  background-color: #ff5f87;
  /*opacity: 0;*/
}
/*.warning-leave-active {
  transform: translateY(100%) scaleX(0);
  opacity: 0;
}*/
</style>