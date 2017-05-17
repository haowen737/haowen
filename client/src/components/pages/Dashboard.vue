<template lang="html">
  <div class="page">
    <dashboard-topbar></dashboard-topbar>
    <div class="content">
      <side-nav v-if="loadSideNav"></side-nav>
      <router-view class="main"></router-view>
    </div>
    <bottom-fire :show="!showLoading"></bottom-fire>
  </div>
</template>

<script>
import SideNav from './SideNav'
import BottomFire from './BottomFire'
import DashboardTopbar from './DashboardTopbar'
export default {
  data () {
    return {
      loadSideNav: false
    }
  },
  created () {
    this.loadSideNav = window.innerWidth > 500 || false
  },
  components: {
    DashboardTopbar,
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
