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

import NeoLoading from 'neo-loading'

import 'assets/styles/base.css'
import 'assets/styles/theme.css'
import 'assets/styles/1px.css'

console.log(NeoLoading)
console.log(PageLoading)
Vue.use(NeoLoading)

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Warning)
Vue.use(Messenger)
// Vue.use(PageLoading, {
//   backgroundColor: '#fff',
//   backgroundOpacity: '0.7',
//   color: '#666'
// })
Vue.use(Utils)
Vue.component('box', Box)
// Vue.mixin({
//   mounted () {
//     this.$neoLoading.hide()
//   }
// })

const router = new VueRouter({ routes })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
