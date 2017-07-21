import MessangerConstrusctor from './src/main.vue'

let $vm

export default {
  install (Vue) {
    const Messanger = Vue.extend(MessangerConstrusctor)
    $vm = new Messanger({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)

    function messenger (options) {
      let { content, placeholder, title, input, confirmText, type, cancelText, onConfirm, onCancel } = options
      $vm.content = content
      $vm.placeholder = placeholder
      $vm.title = title
      $vm.input = input
      $vm.confirmText = confirmText || '确认'
      $vm.cancelText = cancelText || '取消'
      $vm.type = type
      $vm.show = true
      $vm.onConfirm = () => {
        $vm.show = false
        onConfirm && onConfirm()
      }
      $vm.onCancel = () => {
        $vm.show = false
        onCancel && onCancel()
      }
    }
    Vue.prototype.$Messenger = messenger
  }
}
