const state = {
  userInfo: {
    avatar: '/static/images/other/userImg.png',
    name: ''
  }
}

const getters = {
}

const actions = {
}

const mutations = {
  setUserInfo (state, data) {
    state.userInfo = {
      avatar: data.avatar,
      name: data.name
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
