<template>
  <div id="app">
    <div class="top-scrollbar" :style="topScrollbarWidth"></div>
    <loading :show="showLoading" top="50%" bg-color="#000"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import Loading from 'packages/loading'

export default {
  data () {
    return {
      showLoading: false,
      offsetHeight: 0,
      innerHeight: 0,
      scrollY: 0,
      user: {},
      topScrollbarWidth: {
        'width': '0%'
      }
    }
  },
  beforeMount () {
    this.getUser()
  },
  mounted () {
    this.tryStore()
  },
  methods: {
    tryStore () {
      console.log(this.$store)
    },
    getUser () {
      let user = JSON.parse(window.localStorage.getItem('withyoufriendsuseraccount'))
      if (user) {
        this.user = Object.assign({}, user)
      }
    },
    activeScrollWatcher () {
      this.$nextTick(() => {
        window.onscroll = () => {
          this.offsetHeight = document.getElementById('container').offsetHeight
          this.innerHeight = window.innerHeight
          this.scrollY = window.scrollY
          this.topScrollbarWidth.width = (this.scrollY / (this.offsetHeight - this.innerHeight)) * 100 + '%'
          // console.log(this.offsetHeight, this.innerHeight, this.scrollY)
        }
      })
    },
    removeScrollWatcher () {
      window.onscroll = () => {
        return
      }
    }
  },
  components: {
    Loading
  }
}
</script>

<style>
</style>
