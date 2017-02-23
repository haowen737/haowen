<template lang="html">
  <div class="content-wrap">
    <dashboard-topbar></dashboard-topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import DashboardTopbar from './dashboardTopbar'
export default {
  components: {
    DashboardTopbar
  }
}
</script>

<style lang="css">
</style>
