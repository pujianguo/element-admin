const ENV = process.env.VUE_APP_TITLE === 'pre' ? 'pre'
  : process.env.NODE_ENV === 'production' ? 'production' : 'development'

const dev = {
  baseUrl: 'http://dev.xxx.com',
  debug: true
}

const pre = {
  baseUrl: 'http://pre.xxx.com',
  debug: true
}

const prod = {
  baseUrl: 'http://prod.xxx.com',
  debug: false
}

const common = {
  defaultAvatar: '/static/images/other/userImg.png'
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
