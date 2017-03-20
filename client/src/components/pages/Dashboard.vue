<template lang="html">
  <div class="content-wrap">
    <dashboard-topbar></dashboard-topbar>
    <router-view></router-view>
    <bottom-fire :show="true"></bottom-fire>
  </div>
</template>

<script>
import BottomFire from 'packages/bottomFire'
import DashboardTopbar from './DashboardTopbar'
export default {
  components: {
    DashboardTopbar,
    BottomFire
  }
}
</script>

<style lang="css">
</style>
