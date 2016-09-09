<template lang="html">
  <div class="container" transition="fade">
    <div class="header">
      <div class="header-inner">
        <div class="logo cur-default">Haowen</div>
        <div class="site-subtitle cur-default">Live a life you will remember!</div>
        <nav class="site-nav">
          <ul>
            <li>Home</li>
            <li>Archives</li>
            <li>Tags</li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="cards">
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
.container {
}
.header {
  text-align: center;
}
.header-inner {
  position: relative;
  margin: 0 auto;
  padding: 100px 0 70px;
}
.logo {
  display: inline-block;
  padding: 0 40px;
  font-size: 20px;
  line-height: 36px;
  font-weight: lighter;
  font-family: cursive;
  color: #fff;
  background-color: #000;
}
.site-subtitle {
  margin-top: 10px;
  font-size: 13px;
  color: #999;
}
.site-nav {
  margin-top: 20px;
}
.site-nav li {
  display: inline-block;
}
</style>
