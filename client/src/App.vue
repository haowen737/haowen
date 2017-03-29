<template>
  <div id="app">
    <loading :show="showLoading" top="50%" bg-color="#000"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import Box from 'packages/Box'
import Loading from 'packages/loading'

export default {
  data () {
    return {
      showLoading: false
    }
  },
  components: {
    Loading,
    Box
  }
}
</script>

<style>
</style>
