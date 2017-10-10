<template>
  <div class="page">
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
  mounted () {
    this.$router.beforeEach((to, from, next) => {
      this.$pageLoading.show()
      console.log('cool')
      next()
    })
  },
  components: {
    Loading,
    Box
  }
}
</script>

<style>
</style>
