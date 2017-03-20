import warningVue from './main.vue'
import Vue from 'vue'

let instance

const WarningConstructor = Vue.extend(warningVue)

const initInstance = () => {
  instance = new WarningConstructor({
    el: document.createElement('div')
  })
  // instance.callback = defaultCallback
  console.log(instance)
}
function warning () {
  initInstance()
}

export default {
  install (vue) {
    vue.prototype.$warning = warning
  }
}
