import Vue from 'vue'
import Utils from './utils'
import Ocean from './ocean'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routers from './routers'

import './assets/styles/base.css'
import 'github-markdown-css/github-markdown.css'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Ocean)
Vue.use(Utils)
console.log(Vue)
const router = new VueRouter({
  routes: routers
})

new Vue({
  data  () {
    return {
      offsetHeight: 0,
      innerHeight: 0,
      scrollY: 0,
      topScrollbarWidth: {
        'width': '0%'
      }
    }
  },
  mounted () {
    this.watchBottom()
  },
  methods: {
    watchBottom () {
      // console.log(window.onscrol)
      this.$nextTick(function () {
        window.onscroll = () => {
          this.offsetHeight = document.getElementById('container').offsetHeight
          this.innerHeight = window.innerHeight
          this.scrollY = window.scrollY
          // 160为cards的margin-bottom
          this.topScrollbarWidth.width = (this.scrollY / (this.offsetHeight - this.innerHeight)) * 100 + '%'
          // console.log(this.offsetHeight, this.innerHeight, this.scrollY)
        }
      })
    }
  },
  router: router,
  render: h => h('router-view')
}).$mount('#app')
