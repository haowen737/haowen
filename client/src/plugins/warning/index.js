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

    function warning (opt) {
      $vm.show = true
      $vm.content = opt instanceof Object ? opt.text : opt
    }

    Vue.prototype.$Warning = warning
  }
}
