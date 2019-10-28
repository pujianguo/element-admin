const config = {
  footerText: '粤ICP备16020717号-2 Power by FunXdata',
  wx_appid: '',
  wx_login_redirect_uri: ''
}
export default {
  install (Vue) {
    Vue.prototype.config = config
  }
}
