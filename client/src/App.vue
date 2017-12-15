<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Box from 'packages/Box'

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$router.beforeEach((to, from, next) => {
      this.$neoLoading.show()
      next()
    })
  },
  components: {
    Box
  }
}
</script>

<style>
</style>
