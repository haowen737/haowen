<template lang="html">
  <div class="ui-button-container">
    <a href="javascript:;" @click="click">{{text}}</a>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="css" scoped>
.ui-button-container {
  text-align: center;
}
.ui-button-container a {
  display: block;
  background-color: #2b2d32;
  color: #fff;
  font-weight: lighter;
  font-size: 1rem;
  line-height: 3;
  width: 100%;
}
</style>
