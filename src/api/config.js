const ENV = process.env.VUE_APP_TITLE === 'pre' ? 'pre'
  : process.env.NODE_ENV === 'production' ? 'production' : 'development'

const dev = {
  env: 'dev',
  baseUrl: 'http://dev.xxx.com',
  debug: true
}

const pre = {
  env: 'pre',
  baseUrl: 'http://pre.xxx.com',
  debug: true
}

const prod = {
  env: 'prod',
  baseUrl: 'http://prod.xxx.com',
  debug: false
}

const common = {
  defaultAvatar: '/images/avatar.jpeg',
  footerText: '粤ICP备16020717号-2 Power by FunXdata',
  wx_appid: '',
  wx_login_redirect_uri: ''
}

let config = {}
if (ENV === 'production') {
  config = Object.assign({}, common, prod)
} else if (ENV === 'pre') {
  config = Object.assign({}, common, pre)
} else {
  config = Object.assign({}, common, dev)
}

export default config
