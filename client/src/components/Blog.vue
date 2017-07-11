<template lang="html">
  <div class="page">
    <blog-topbar></blog-topbar>
    <div class="content">
      <side-nav v-if="loadSideNav" position="left"></side-nav>
      <router-view class="main"></router-view>
    </div>
    <bottom-fire :show="!showLoading"></bottom-fire>
  </div>
</template>

<script>
import SideNav from './SideNav'
import BottomFire from './BottomFire'
import BlogTopbar from './BlogTopbar'
export default {
  data () {
    return {
      loadSideNav: window.innerWidth > 1200 || false
    }
  },
  created () {
  },
  components: {
    BlogTopbar,
    BottomFire,
    SideNav
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
