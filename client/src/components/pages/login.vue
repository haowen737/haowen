<template lang="html">
  <div class="login-container" v-show="show">

  </div>
</template>

<script>
export default {
  name: 'login',

  componentName: 'login',

  props: {
    display: Boolean
  },

  data () {
    return {
      show: true
    }
  },
  watch: {
    'display': function (val) {
      if (val) {
        this.show = true
      }
    }
  }
}
</script>

<style lang="css" scoped>
.login-container {
  position: fixed;
  background-color: #000;
  top: 0;
  left: 0;
  width: 400px;
  height: 900px;
}
</style>
