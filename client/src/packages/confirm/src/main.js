const defaults = {
  title: undefined,
  message: '',
  type: '',
  showInput: false,
  showClose: false,
  inputValue: null,
  inputPlaceholder: null,
  confirmButtonText: null
}

import Vue from 'vue'
import messangerVue from './main.vue'

const MessangerConstructor = Vue.extend(messangerVue)

const initInstance = () => {
  new MessangerConstructor({
    el: document.createElement('div')
  })
}

let confirm = (message, title, options) => {
  initInstance
  console.log(message, title, options, defaults)
}

export default confirm
export { confirm }
