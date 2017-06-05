<template lang="html">
  <div class="page">
    <dashboard-topbar></dashboard-topbar>
    <div class="content">
      <router-view class="main"></router-view>
    </div>
    <bottom-fire :show="!showLoading"></bottom-fire>
  </div>
</template>

<script>
import BottomFire from './BottomFire'
import DashboardTopbar from './DashboardTopbar'
export default {
  data () {
    return {
    }
  },
  created () {
  },
  components: {
    DashboardTopbar,
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
