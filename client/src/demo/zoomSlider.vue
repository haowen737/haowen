<template lang="html">
  <div class="zoom-slider-layout">
    <header>
      <h1>Zoom Slider</h1>
      <span>design by</span>
    </header>
    <section class="slider">
      <div class="slide-item current">
        <div class="inner-container">

        <div class="test-box">

        </div></div>
      </div>
      <div class="slide-item">
        <div class="inner-container">
          <div class="test-box">

          </div>
        </div>
      </div>
      <div class="slide-item">
        <div class="inner-container">
          <div class="test-box">

          </div>
        </div>
      </div>
      <div class="slide-item">
        <div class="inner-container">
          <div class="test-box">

          </div>
        </div>
      </div>
      <div class="slide-item">
        <div class="inner-container">
          <div class="test-box">

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.test-box {
  width: 200px;
  height: 200px;
  border: 1px solid #666;
  margin: 0 auto;
}
.inner-container {
  width: 100%;
  height: 100%;
}
.slide-item {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.slider, .slide-item {
  width: 100%;
}
.slider {
  position: relative;
  height: calc(100% - 120px);
}
.zoom-slider-layout {
  width: 100%;
  height: 100%;
  background: #222125;
}
.zoom-slider-layout header>h1 {
  line-height: 100px;
}
.zoom-slider-layout header>span {
  position: relative;
  top: -18px;
  font-size: 18px;
  line-height: 1;
}
.zoom-slider-layout header {
  text-align: center;
  color: #CECECE;
  height: 120px;
}
</style>
