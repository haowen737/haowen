<template lang="html">
  <div class="bg-container">
    <div class="box-1"></div>
    <div class="box-2"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
.bg-container {
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
}
.box-1 {
  width: 300px;
  height: 300px;
  border: 1px solid #e2e2e2;
  /*filter: blur(1px);*/
  animation: box-1 20s infinite linear;
  position: absolute;
  will-change: transform;
}
.box-2 {
  width: 100px;
  height: 100px;
  border: 1px solid #e2e2e2;
  /*filter: blur(1px);*/
  animation: box-2 23s infinite linear;
  position: absolute;
  will-change: transform;
}
@keyframes box-1 {
  0% {
    bottom: 0;
    left: 100px;
    transform: rotate(0deg);
  }
  25% {
    bottom: 500px;
    left: 300px;
  }
  50% {
    bottom: 0;
    left: 600px;
    /*transform: rotate(260deg);*/
  }
  75% {
    bottom: 500px;
    left: 300px;
  }
  100% {
    bottom: 0;
    left: 100px;
    transform: rotate(360deg);
  }
}
@keyframes box-2 {
  0% {
    bottom: 250px;
    left: 0;
    transform: rotate(0);
  }
  25% {
    bottom: calc(100%);
    left: 400px;
  }
  50% {
    bottom: 250px;
    left: calc(100%);
    /*transform: rotate(360deg);*/
  }
  75% {
    bottom: 0;
    left: 400px;
  }
  100% {
    bottom: 250px;
    left: 0;
    transform: rotate(360deg);
  }
}
</style>
