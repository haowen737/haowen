import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './components/dashboard'
import Photo from './components/photo'
import './assets/styles/base.css'

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
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
  }
})

router.start(app, 'html')
