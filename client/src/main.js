import Vue from 'vue'
import Utils from './utils'
import Ocean from './ocean'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Tags from './components/tags'
import Code from './components/code'
import Photo from './components/photo'
import Black from './components/black'
import Moods from './components/moods'
import Cellular from './demo/cellular'
import Article from './components/article'
import Contact from './components/contact'
import ZoomSlider from './demo/zoomSlider'
import Flextest from './components/flextest'
import Dashboard from './components/dashboard'
import DemoHouse from './components/demoHouse'
import MoodsLogin from './components/moodsLogin'

import Sidebar from './directive/sidebar'
import Loading from './directive/loading'

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
      showBottomFire: false,
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

router.map({
  '/': {
    component: Dashboard
  },
  '/photo': {
    component: Photo
  },
  '/code': {
    component: Code
  },
  '/demo-house': {
    component: DemoHouse
  },
  '/tags': {
    component: Tags
  },
  '/code/article/:id': {
    component: Article
  },
  '/contact': {
    component: Contact
  },
  '/moods': {
    component: Moods
  },
  '/moods/login': {
    component: MoodsLogin
  },
  '/demo/loading': {
    component: Loading
  },
  '/black': {
    component: Black
  },
  '/demo/zoom-slider': {
    component: ZoomSlider
  },
  '/demo/flextest': {
    component: Flextest
  },
  'demo/cellular': {
    component: Cellular
  }
})

router.start(app, 'html')
