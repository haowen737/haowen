import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import axios from 'axios'
import Vue from 'vue'

// import Warning from 'packages/warning'
import Box from 'packages/Box'
import routers from './routers'
import Utils from './utils'
import Plugins from './plugins'
import Store from './store'
import App from './App'

import 'assets/styles/base.css'
import 'assets/styles/theme.css'
// import 'highlight.js/styles/github.css'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Utils)
Vue.use(Plugins, axios)
Vue.component('box', Box)
// Vue.use(Warning)

const router = new VueRouter({
  routes: routers
})

new Vue({
  router: router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
