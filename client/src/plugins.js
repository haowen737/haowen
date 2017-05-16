// function installAxios (axios) {
//   console.log(axios)
//   return axios
// }

function install (Vue, axios) {
  // Vue.prototype.$axios = installAxios(axios)
  Vue.prototype.$axios = function () {
    return 'hi'
  }
}

export default {
  install
}
