<template lang="html">
  <div class="burger" @click="clickBurger">
    <div class="burger-hover">

    </div>
    <div class="burger-line-wrap">
      <div class="burger-line burger-line-0"></div>
      <div class="burger-line burger-line-1"></div>
      <div class="burger-line burger-line-2"></div>
    </div>
    <div class="burger-border-wrap">
      <div class="burger-border burger-border-top"></div>
      <div class="burger-border burger-border-bottom"></div>
      <div class="burger-border burger-border-left"></div>
      <div class="burger-border burger-border-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickBurger () {
      this.AnimatedHover()
    },
    AnimatedHover () {

    }
  }
}
</script>

<style lang="css" scoped>
.burger-line-2 {
  top: 34px;
}
.burger-line-1 {
  top: 30px;
}
.burger-line-0 {
  top: 26px;
}
.burger-line-0, .burger-line-1, .burger-line-2 {
  position: absolute;
  height: 1px;
  left: 24px;
  width: 18px;
  background-color: #fff;
}
.burger-line-wrap {
  display: flex;
}
.burger-border {
  position: absolute;
}
.burger-border-wrap {
  opacity: .7;
}
.burger-border-top {
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: #ff3000;
}
.burger-border-bottom {
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: #d50082;
}
.burger-border-left {
  bottom: 0;
  top: 0;
  left: 0;
  width: 1px;
  background: linear-gradient(180deg,#ff3000,#ed0200,#ff096c,#d50082);
}
.burger-border-right {
  top: 0;
  bottom: 0;
  right: 0;
  width: 1px;
  background: linear-gradient(180deg,#ff3000,#ed0200,#ff096c,#d50082);
}
.burger-hover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.burger-hover:before {
    transform: translate3d(0,105%,0);
    opacity: 0;
}
.burger-hover:after, .burger-hover:before {
    content: "";
    background: linear-gradient(180deg,#ff3000,#ed0200,#ff096c,#d50082);
}
.burger-hover, .burger-hover:after, .burger-hover:before, .burger-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.burger-hover:after {
    transition: transform .8s cubic-bezier(.165,.84,.44,1);
    transform: translate3d(0,-105%,0);
    opacity: 1;
}
.burger-hover:after, .burger-hover:before {
    content: "";
    background: linear-gradient(180deg,#ff3000,#ed0200,#ff096c,#d50082);
}
.burger:hover {
    cursor: pointer;
}
.burger:hover .burger-hover{
  transform: translateY(0);
}
.burger {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  margin: 20px;
  width: 66px;
  height: 66px;
  z-index: 900;
  cursor: pointer;
}
@media (max-width: 1500px) and (min-width: 1201px) {
  .burger {
    top: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
  }
}
</style>
