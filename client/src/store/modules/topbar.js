const state = {
  mode: '',
  articleTitle: '',
  onlyfortest: ''
}

const mutations = {
  setMode (state, setting) {
    state = Object.assign(state, setting)
  }
}

export default {
  state,
  mutations
}
