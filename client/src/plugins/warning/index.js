import WarningConstrusctor from './src/main.vue'

let $vm

export default {
  install (Vue) {
    if (!$vm) {
      const Warning = Vue.extend(WarningConstrusctor)
      $vm = new Warning({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    function warning (options) {
      $vm.showWarning = true
      $vm.warningText = options.text
    }

    Vue.prototype.$Warning = warning
  }
}
