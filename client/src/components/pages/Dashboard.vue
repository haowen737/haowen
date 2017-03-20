<template lang="html">
  <div class="page">
    <dashboard-topbar></dashboard-topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import DashboardTopbar from './DashboardTopbar'
export default {
  components: {
    DashboardTopbar
  }
}
</script>

<style lang="css">
</style>
