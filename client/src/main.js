import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Dashboard from './components/dashboard'
import Article from './components/article'
import Photo from './components/photo'
import Code from './components/code'
import Contact from './components/contact'
import Archives from './components/archives'
import Moods from './components/moods'
import MoodsLogin from './components/moodsLogin'
import Tags from './components/tags'
import Sidebar from './directive/sidebar'
import BottomFire from './directive/bottomFire'
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
      scrollTop: 0,
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
          let offsetHeight = document.getElementById('container').offsetHeight
          let innerHeight = window.innerHeight
          let scrollY = window.scrollY
          // 160为cards的margin-bottom
          console.log(123)
          this.topScrollbarWidth.width = (scrollY / (offsetHeight - innerHeight)) * 100 + '%'
          // console.log(offsetHeight, innerHeight, scrollY)
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
  '/archives': {
    component: Archives
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
  }
})

router.start(app, 'html')
