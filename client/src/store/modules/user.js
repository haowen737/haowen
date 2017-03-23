const state = {
  user_name: '',
  user_password: '',
  user_email: '',
  user_phone: ''
}

const mutations = {
  getUser () {
    return state.user
  }
}

export default {
  state,
  mutations
}
