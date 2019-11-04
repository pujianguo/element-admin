import Vue from 'vue'
import Vuex from 'vuex'

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
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ...modules
  }
})
