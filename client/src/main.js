import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vue from 'vue'

import Warning from './plugins/warning'
import Messenger from './plugins/messenger'
import Box from './packages/Box'
import routers from './routers'
import Utils from './utils'
import store from './store'
import App from './App'

import 'assets/styles/base.css'
import 'assets/styles/theme.css'
import 'assets/styles/1px.css'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Warning)
Vue.use(Messenger)
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
