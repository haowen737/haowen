<template lang="html">
  <div>
    <blog-topbar></blog-topbar>
    <div class="page">
      <div class="content">
        <blog-side-nav v-if="loadSideNav" :position="position"></blog-side-nav>
        <router-view class="main"></router-view>
      </div>
      <bottom-fire :show="!showLoading"></bottom-fire>
    </div>
  </div>
</template>

<script>
import BlogSideNav from './BlogSideNav'
import BottomFire from './BottomFire'
import BlogTopbar from './BlogTopbar'
export default {
  data () {
    return {
      loadSideNav: window.innerWidth > 1200 || false,
      position: 'left'
    }
  },
  created () {
    this.setSideNavPosition()
  },
  methods: {
    setSideNavPosition (name = this.$route.name) {
      if (name === '文章') {
        this.position = 'right'
        return
      }
      this.position = 'left'
    }
  },
  watch: {
    '$route.name' (name) {
      this.setSideNavPosition(name)
    }
  },
  components: {
    BlogTopbar,
    BottomFire,
    BlogSideNav
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
