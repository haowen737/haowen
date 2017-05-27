import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vue from 'vue'

import Warning from './plugins/warning'
import Box from 'packages/Box'
import routers from './routers'
import Utils from './utils'
import store from './store'
import App from './App'

import 'assets/styles/base.css'
import 'assets/styles/theme.css'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Warning)
Vue.use(Utils)
Vue.component('box', Box)

const router = new VueRouter({
  routes: routers
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
