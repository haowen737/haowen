import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Dashboard from './components/dashboard'
import Article from './components/article'
import Photo from './components/photo'
import Code from './components/code'
import Contact from './components/contact'
import DemoHouse from './components/demoHouse'
import Moods from './components/moods'
import Black from './components/black'
import MoodsLogin from './components/moodsLogin'
import Tags from './components/tags'
import Flextest from './components/flextest'

import ZoomSlider from './demo/zoomSlider'
import Cellular from './demo/cellular'

import Sidebar from './directive/sidebar'
import BottomFire from './directive/bottomFire'
import Loading from './directive/loading'

import './assets/styles/base.css'
import 'github-markdown-css/github-markdown.css'
// new Vue({
//   el: 'body',
//   components: { App }
// })
Vue.use(VueResource)
Vue.use(VueRouter)

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
    Sidebar, BottomFire
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
