import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Dashboard from './components/dashboard'
import Article from './components/article'
import Photo from './components/photo'
import Code from './components/code'
import Archives from './components/archives'
import Tags from './components/tags'
import './assets/styles/base.css'
// new Vue({
//   el: 'body',
//   components: { App }
// })
Vue.use(VueResource)
Vue.use(VueRouter)

let app = Vue.extend({})

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
  '/article/:id': {
    component: Article
  }
})

router.start(app, 'html')
