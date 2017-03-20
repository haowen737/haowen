<template lang="html">
  <div class="page">
    <burger></burger>
  </div>
</template>

<script>
import Burger from 'packages/widgets/burger'
export default {
  components: {
    Burger
  }
}
</script>

<style lang="css" scoped>
.page {
  height: 100%;
  background-color: #1b1a25;
}
</style>
