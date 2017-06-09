import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import topbar from './modules/topbar'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    topbar,
    app
  }
})
