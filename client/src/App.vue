<template>
  <div id="app">
    <router-view></router-view>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import Loading from './packages/loading'

export default {
  data () {
    return {
      showLoading: false
    }
  },
  components: {
    Loading
  }
}
</script>

<style>
</style>
