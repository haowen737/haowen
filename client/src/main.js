import Vue from 'vue'
import Utils from './utils'
import Ocean from './ocean'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routers from './routers'
import Sidebar from './directive/sidebar'

import './assets/styles/base.css'
import 'github-markdown-css/github-markdown.css'
// new Vue({
//   el: 'body',
//   components: { App }
// })
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Ocean)
Vue.use(Utils)

let app = Vue.extend({
  data: function () {
    return {
      offsetHeight: 0,
      innerHeight: 0,
      scrollY: 0,
      topScrollbarWidth: {
        'width': '0%'
      }
    }
  },
  ready: function () {
    this.watchBottom()
  },
  components: {
    Sidebar
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
  }
})

let router = new VueRouter({
  // history: true,
  hashbang: false
})

router.map(routers)
router.start(app, 'html')
