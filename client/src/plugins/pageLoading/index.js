import pageLoadingTemplate from './main.vue'
let $vm
export default {
  install (Vue) {
    if (!$vm) {
      let PageLoadingTemplate = Vue.extend(pageLoadingTemplate)

      let $vm = new PageLoadingTemplate({
        el: document.createElement('div')
      })

      document.body.appendChild($vm.$el)

      let pageLoading = function () {}

      pageLoading.show = () => { $vm.show = true }
      pageLoading.hide = () => { $vm.show = false }

      Vue.prototype.$pageLoading = pageLoading
    }
  }
}
