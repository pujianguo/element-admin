import Vue from 'vue'
import Vuex from 'vuex'
import Storage from '@/utils/storage'

const modules = {}
const requireModules = require.context('./modules/', true, /\.js$/)
requireModules.keys().forEach(name => {
  const module = requireModules(name).default
  const moduleName = name.replace(/^\.\//, '').replace(/\.\w+$/, '')
  modules[moduleName] = module
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuCollapse: false,
    fullLoading: false
  },
  mutations: {
    setMenuCollapse (state, payload) {
      Storage.setMenuCollapse(payload)
      state.menuCollapse = payload
    },
    setFullLoading (state, payload) {
      state.fullLoading = payload
    }
  },
  actions: {
  },
  modules: {
    ...modules
  }
})
