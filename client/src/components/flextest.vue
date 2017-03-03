<template lang="html">
  <div class="content-wrap">
    <div class="flex-test-container c1">
      <header>flex: 0 1 auto;</header>
      <div class="items i1" v-for="i in 15"></div>
    </div>
    <div class="flex-test-container c2">
      <header>flex: 0 0 auto;</header>
      <div class="items i2" v-for="i in 15"></div>
    </div>
    <div class="flex-test-container c2">
      <header>flex: 1 1 auto;</header>
      <div class="items i3" v-for="i in 15"></div>
    </div>
    <div class="flex-test-container c4">
      <header>flex-shrink: 0;</header>
      <div class="items i4" v-for="i in 15"></div>
    </div>
    <div class="flex-test-container">
      <header>flex: 1;</header>
      <div class="items i5" v-for="i in 15"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.flex-test-container header {
  position: absolute;
  background-color: #fff;
}
.flex-test-container {
  position: relative;
  width: 500px;
  height: 100px;
  border: 1px solid #ddd;
  display: flex;
  margin-bottom: 30px;
}
.items {
  margin: 10px;
  width: 30px;
  height: 20px;
  background: blue;
}
.c4 {
  flex-wrap: wrap;
}
.i1 {
  flex: 0 1 auto;
}
.i2 {
  flex: 0 0 auto;
}
.i3 {
  flex: 1 1 auto;
}
.i4 {
  flex-shrink: 0;
}
.i5 {
  flex: 1;
}
</style>
