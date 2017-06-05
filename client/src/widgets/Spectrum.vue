<template>
	<div class="spectrum-container">
		<audio id="audio" src="/static/music/Broken Back - Happiest Man on Earth.mp3" controls autoplay loop></audio>
		<canvas id="stage"></canvas>
	</div>
</template>

<script>
export default {

  name: 'Spectrum',

  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
.spectrum-container {
	position: absolute;
	bottom: 0;
	left: 0;
}
</style>