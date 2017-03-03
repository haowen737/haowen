import Vue from 'vue'
import Utils from './utils'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routers from './routers'

import './assets/styles/base.css'
import 'github-markdown-css/github-markdown.css'

import Warning from './packages/warning'
import App from './App'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Warning)
Vue.use(Utils)

const router = new VueRouter({
  routes: routers
})

new Vue({
  data  () {
    return {
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
  methods: {
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
  router: router,
  render: h => h(App)
}).$mount('#app')
