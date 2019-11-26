import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import filter from './filter'
import directive from './directive'
import globalComponent from './components/common/global'
import config from './api/config'
import func from './utils/func'
import './permission'
import './plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'
import 'styles/index.scss'

import Mock from './mock'
Mock.bootstrap()

Vue.config.productionTip = false

Vue.prototype.config = config
Vue.use(globalComponent)
Vue.use(filter)
Vue.use(directive)
Vue.use(func)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
