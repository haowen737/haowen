import Vue from 'vue'
import Utils from './utils'
import Ocean from './ocean'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routers from './routers'

import './assets/styles/base.css'
import 'github-markdown-css/github-markdown.css'

// import Confirm from './packages/confirm'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Ocean)
Vue.use(Utils)

// Vue.use(Confirm)

const router = new VueRouter({
  routes: routers
})

new Vue({
  data  () {
    return {
      offsetHeight: 0,
      innerHeight: 0,
      scrollY: 0,
      userName: '',
      topScrollbarWidth: {
        'width': '0%'
      }
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    getUser () {
      let user = window.localStorage.getItem('withyoufriendsuseraccount')
      if (user) {
        user = JSON.parse(user)
        this.userName = user.user_name
      }
      console.log('用户＝', user)
    },
    scrollWatcher () {
      // console.log(window.onscrol)
      this.$nextTick(() => {
        window.onscroll = () => {
          this.offsetHeight = document.getElementById('container').offsetHeight
          this.innerHeight = window.innerHeight
          this.scrollY = window.scrollY
          // 160为cards的margin-bottom
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
  router: router,
  render: h => h('router-view')
}).$mount('#app')
