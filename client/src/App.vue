<template>
  <div id="app">
    <div class="top-scrollbar" :style="topScrollbarWidth"></div>
    <loading :show="showLoading" top="50%" bg-color="#000"></loading>
    <router-view></router-view>
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
