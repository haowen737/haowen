import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vue from 'vue'

import Warning from 'packages/warning'
import routers from './routers'
import Utils from './utils'
import Store from './store'
import App from './App'

import 'assets/styles/base.css'
import 'github-markdown-css/github-markdown.css'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Warning)
Vue.use(Utils)

const router = new VueRouter({
  routes: routers
})

new Vue({
  router: router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
