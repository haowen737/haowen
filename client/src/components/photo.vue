<template lang="html">
  <div class="photo-layout">
    <div class="img-box">
      <!-- <img src="./../assets/images/photo/16-09-17-0.jpg" alt="" /> -->
    </div>
    <modal :show.sync="showModal" :body="helloText" @on-confirm="setCookie"></modal>
  </div>
</template>

<script>
import Modal from './../directive/modal'
export default {
  data: function () {
    return {
      showSidebar: 0,
      showModal: false,
      helloText: '初次见面，你好啊'
    }
  },
  computed: {},
  ready: function () {
    this.getCookie()
  },
  attached: function () {},
  methods: {
    // cookie有效期未1天，失效后進入photo頁面會有提示彈出
    setCookie () {
      let exdate = new Date()
      let expireDays = 1
      exdate.setTime(exdate.getTime() + expireDays * 24 * 3600 * 1000)
      document.cookie = 'newUser=0;expire=' + exdate.toGMTString()
      // this.getCookie()
    },
    getCookie () {
      // if (document.cookie.length > 0) {
      let user = document.cookie.indexOf('newUser=')
      if (user === 0) {
        this.showModal = false
        this.setCookie()
      } else {
        this.showModal = true
      }
      // }
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="css" scoped>
.sidebar-header {
  position: relative;
  top: -20px;
  left: -30px;
  font-size: 100px;
  text-shadow: 5px 3px 3px rgba(0,0,0, .3);
}
.sidebar-watcher {
  position: absolute;
  z-index: 1;
  width: 350px;
  height: 100%;
  left: 0;
  /*background-color: grey;*/
}
.sidebar {
  position: absolute;
  z-index: 1;
  width: 350px;
  height: 100%;
  box-shadow: 1px 0 2px rgba(0,0,0,0.2)
}
.sidebar-transition {
  transition: all .5s ease;
  left: 0;
  background-color: #f3f3f3;
  /*opacity: 1;*/
}
.sidebar-enter, .sidebar-leave {
  left: -1000px;
  background-color: #f3f3f3;
  /*opacity: 0;*/
}
.img-box img {
  width: 100%;
}
.fade {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, .5);
}
</style>
