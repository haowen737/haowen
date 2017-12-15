import neoLoadingTemplate from './main.vue'
let $vm
export default {
  install (Vue, options = {}) {
    if (!$vm) {
      let NeoLoadingTemplate = Vue.extend(neoLoadingTemplate)

      let $vm = new NeoLoadingTemplate({
        el: document.createElement('div')
      })

      let { backgroundColor, color, backgroundOpacity } = options
      $vm.backgroundColor = backgroundColor || '#FFFFFF'
      $vm.backgroundOpacity = backgroundOpacity || '0.5'
      $vm.color = color || '#000'

      document.body.appendChild($vm.$el)

      let neoLoading = function () {}

      neoLoading.show = () => { $vm.show = true }
      neoLoading.hide = () => { $vm.show = false }

      Vue.prototype.$neoLoading = neoLoading
    }
  }
}
