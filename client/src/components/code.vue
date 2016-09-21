<template lang="html">
  <div class="container">
    <div class="header">
      <div class="header-inner">
        <div class="logo cur-default">Haowen</div>
        <div class="site-subtitle cur-default">Live a life you will remember!</div>
        <nav class="site-nav">
          <ul>
            <li><a v-link="{path:'/'}">Home</a></li>
            <li><a v-link="{path:'/archives'}">Archives</a></li>
            <li><a v-link="{path:'/tags'}">Tags</a></li>
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
  text-align: center;
}
/*.header-inner {
  text-align: center;
}*/
.header-inner {
  position: relative;
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
.site-nav li{
  margin-top: 20px;
  padding: 5px;
}
.site-nav li {
  display: inline-block;
}
.cards {
  width: 500px;
  height: 300px;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  border-radius: 5px;
  margin: 10px auto;
}
</style>
