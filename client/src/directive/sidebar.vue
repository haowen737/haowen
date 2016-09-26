<template lang="html">
  <div class="sidebar-layout">
    <div class="sidebar-watcher" @mouseover="showSidebar=1"></div>
    <div class="sidebar" v-show="showSidebar===1" transition="sidebar">
      <div class="sidebar-header">
        目錄
      </div>
      <div class="sidebar-body">
        <ul>
          <li><a href="/">Homepage</a></li>
        </ul>
      </div>
    </div>
    <div class="fade" v-show="showSidebar===1" @mouseover="showSidebar=0" transition="fade"></div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  template: '#sidebar',
  data: function () {
    return {
      showSidebar: 0,
      showModal: false
    }
  },
  computed: {},
  ready: function () {
    this.getCookie()
  },
  attached: function () {},
  methods: {
    onConfirm () {
      this.showModal = false
      this.setCookie()
    },
    // cookie有效期未十天，失效后進入sidebar頁面會有提示彈出
    setCookie () {
      let exdate = new Date()
      let expireDays = 10
      exdate.setTime(exdate.getTime() + expireDays * 24 * 3600 * 1000)
      document.cookie = 'newUser=1;expire=' + exdate.toGMTString()
      this.getCookie()
    },
    getCookie () {
      if (document.cookie.length > 0) {
        let user = document.cookie.indexOf('newUser=')
        if (user !== -1) {
          this.showModal = false
        } else {
          this.showModal = true
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
.sidebar-body li {
  text-indent: 20px;
}
.sidebar-body {
  font-size: 20px;
  line-height: 2;
  margin-top: 20px;
}
.sidebar-header {
  position: relative;
  top: 0px;
  left: 0px;
  font-size: 100px;
  text-shadow: 5px 3px 3px rgba(0,0,0, .3);
}
.sidebar-watcher {
  position: absolute;
  z-index: 2;
  width: 150px;
  height: 70%;
  top: 15%;
  left: 0;
  /*background-color: grey;*/
}
.sidebar {
  position: absolute;
  z-index: 3;
  width: 350px;
  height: 100%;
  background-color: #fff;
  box-shadow: 1px 0 2px rgba(0,0,0,0.2)
}
.sidebar-transition {
  transition: all .5s ease;
  left: 0;
  /*opacity: 1;*/
}
.sidebar-enter, .sidebar-leave {
  left: -1000px;
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
  z-index: 1;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
