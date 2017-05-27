<template>
	<transition name="warning">
		<div class='warning-container' v-show="showWarning" v-html="warningText"></div>
	</transition>
</template>

<script>
export default {

  name: 'main',

  data () {
    return {
      showWarning: false,
      warningText: ''
    }
  },
  watch: {
    'showWarning' (val) {
      console.log(val)
      if (val) {
        setTimeout(() => {
          this.showWarning = false
        }, 2000)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.warning-container {
	position: fixed;
	bottom: 10%;
	width: 20%;
	background-color: #222;
	z-index: 200;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
  line-height: 1.5;
  transform-origin: left;
}
.warning-enter-active, .warning-leave-active {
  transition: all  .7s ease;
}
.warning-enter {
  transform: translateX(-200%) scaleX(0);
  opacity: 0;
}
.warning-leave-active {
  transform: translateX(-200%) scaleX(0);
  opacity: 0;
}
</style>