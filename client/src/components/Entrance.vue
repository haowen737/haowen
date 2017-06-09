<template>
  <div id="page">
    <div class="top-bar">
      <router-link class="router-about" :to="{path: '/'}">About</router-link>
      <router-link class="router-contact" :to="{path: '/contact'}">Contact</router-link>
      <router-link class="router-blog" :to="{path: '/blog'}" target="_blank">Blog</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

  name: 'Entrance',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 0 1px rgba(0,0,0,.1);
  text-align: center;
  z-index: 100;
  background-color: #fff;
}
.top-bar a {
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0 1rem;
  line-height: 70px;
}
.router-about {
  color: #ffa4e0;
}
.router-contact {
  color: #29c4ff;
}
.router-blog {
  color: #b385ff;
}
</style>