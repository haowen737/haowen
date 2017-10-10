import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vue from 'vue'

import PageLoading from './plugins/pageLoading'
import Messenger from './plugins/messenger'
import Warning from './plugins/warning'
import Box from './packages/Box'

import routes from './routers'
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
Vue.use(PageLoading)
Vue.use(Utils)
Vue.component('box', Box)
Vue.mixin({
  mounted () {
    console.log('hihi')
    this.$pageLoading.hide()
  }
})

const router = new VueRouter({ routes })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
