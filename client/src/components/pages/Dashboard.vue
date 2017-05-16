<template lang="html">
  <div class="page">
    <dashboard-topbar></dashboard-topbar>
    <div class="content">
      <side-nav></side-nav>
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
  margin: 0 auto;
}
.main {}
</style>
