import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filter from './filter'
import directive from './directive'
import globalComponent from './components/common/global'
import config from './api/config'
import func from './utils/func'

import './plugins/element.js'

Vue.config.productionTip = false

Vue.use(globalComponent)
Vue.use(filter)
Vue.use(directive)
Vue.use(config)
Vue.use(func)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
