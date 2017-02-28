<template lang="html">
  <div class="login-entrance-container">
    <router-link class="login" v-show="!show.main" :to="{path: '/moods/login', query: {redirect: '/'}}">Login</router-link>
    <div class="friends" v-show="show.main" @mouseleave="collapseList">
      <span>Friend</span>
      <a class="friends-username" href="javascript:;" @mouseenter="expandList">{{where.userName}}</a>
      <transition name="expandList">
        <div class="expand-menu" v-show="show.list">
          <router-link to="/setting/profile">我的主页</router-link>
          <router-link to="/mailbox">私信</router-link>
          <a href="JavaScript:;" @click="logOut">登出</a>
        </div>
      </transition>
    </div>
    <courier
    v-show="show.courier"
    header="登出确认"
    body="登出后需要重新登录才能进行评论等动作，确认登出？"
    confirmBtnText="登出"
    @on-confirm="courierConfirm"
    @on-cancel="courierCancel"></courier>
  </div>
</template>

<script>
import Courier from './../packages/courier'
export default {
  data () {
    return {
      show: {
        main: false,
        list: false,
        courier: false
      },
      where: {
        userName: ''
      }
    }
  },
  beforeMount () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      let userName = this.$root.user.user_name
      userName ? (
        this.show.main = true,
        this.where.userName = userName
      ) : ''
    },
    logOut () {
      this.show.courier = true
      let promise = new Promise((resolve, reject) => {
        resolve(this.show.courier)
      })
      promise.then((val) => {
        console.log('then', val)
      })
    },
    collapseList () {
      this.show.list = false
    },
    expandList () {
      this.show.list = true
    },
    courierConfirm () {
      this.show.courier = false
      window.localStorage.setItem('withyoufriendsuseraccount', null)
      this.show.main = false
    },
    courierCancel () {
      this.show.courier = false
    }
  },
  components: {
    Courier
  }
}
</script>

<style lang="css" scoped>
.friends-username {
  width: 30px;
  padding: 0 10px;
}
.expand-menu a {
  display: inline;
  width: 50px;
}
.expand-menu {
  width: 150px;
  white-space: nowrap;
  float: right;
}
.friends {
  padding: 10px;
}
.login-entrance-container {
  position: absolute;
  right: 0;
  top: 0;
}
.login {
  padding: 10px;
}
.expandList-enter-active, .expandList-leave-active {
  transition: all .7s ease;
  width: 150px;
  opacity: 1;
}
.expandList-enter, .expandList-leave-active {
  width: 0px;
  opacity: 0;
}
.bg-black {
  background-color: #000;
  color: #fff;
}
.bg-white {
  background-color: #fff;
  color: #000;
}
</style>
