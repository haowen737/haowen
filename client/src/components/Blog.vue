<template lang="html">
  <div class="page">
    <blog-topbar></blog-topbar>
    <div class="content">
      <router-view class="main"></router-view>
    </div>
    <bottom-fire :show="!showLoading"></bottom-fire>
  </div>
</template>

<script>
import BottomFire from './BottomFire'
import BlogTopbar from './BlogTopbar'
export default {
  data () {
    return {
    }
  },
  created () {
  },
  components: {
    BlogTopbar,
    BottomFire
  }
}
</script>

<style lang="css" scoped>
.content {
  max-width: 900px;
  min-height: 100%;
  margin: 80px auto 0;
}
.main {}
</style>
