<template lang="html">
  <div class="topbar">
    <div class="topbar-logo">
      <router-link :to="{path:'/'}" class="topbar-logo-name"><img src="./../assets/images/haowen.png" alt=""></router-link>
      <div class="topbar-logo-login">登入</div>
    </div>
    <div class="topbar-nav">
      <nav>
        <router-link :to="{path:'/code/article'}">首页</router-link>
        <router-link :to="{path:'/tags'}">标签</router-link>
        <router-link :to="{path:'/comment'}">专题</router-link>
        <router-link :to="{path:'/comment'}">视频</router-link>
        <router-link :to="{path:'/comment'}">留言</router-link>
        <router-link :to="{path:'/contact'}">关于我</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.topbar-nav nav {
  width: 830px;
  margin: auto;
  text-align: left;
  line-height: 70px;
}
.topbar-nav a:hover {
  color: #fff;
  font-weight: 400;
}
.topbar-nav a {
  position: relative;
  color: #ababad;
  padding: 10px 20px;
  font-weight: lighter;
  transition: all .5s;
  margin: -3px;
}
.topbar-logo-login {
  display: inline-block;
  float: right;
  line-height: 52px;
}
.topbar-logo-name img {
  width: 100%;
  padding: 10px 20px;
}
.topbar-logo-name {
  width: 150px;
  display: inline-block;
}
.topbar-logo {
  text-align: left;
  background-color: #fff;
  width: 830px;
  margin: auto;
}
.topbar-nav:after {
  content: '';
  position: absolute;
  border-top: 1px solid #414347;
  top: 70px;
  left: 0;
  background-color: #2b2d32;
  width: 100%;
  height: 30px;
}
.topbar-nav {
  position: relative;
  background-color: #2b2d32;
}
.topbar {
  margin-bottom: 80px;
}
</style>
