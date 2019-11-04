import axios from 'axios'
import { Notification } from 'element-ui'
import storage from '@/utils/storage'
import config from './config'

// 防止ie缓存
if (navigator.userAgent.indexOf('MSIE 9') > -1) {
  axios.defaults.headers.common['If-Modified-Since'] = '0'
}

axios.defaults.baseURL = config.baseUrl
axios.defaults.timeout = 10000
axios.defaults.headers = { 'Content-Type': 'application/json' }

// 创建一个实例, 方便定义多种接口的请求。注意：在使用mock插件时，并不会拦截到实例定义的接口
// let Request = axios.create({
//   baseURL: baseUrl,
//   timeout: 10000,
//   headers: { 'Content-Type': 'application/json' }
// })

// request
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  let token = storage.getToken()
  if (token) {
    config.headers['AUTHORIZATION'] = 'text-token'
  } else {
    Notification.warning({
      title: '提示信息',
      message: '登录信息已过期，请重新登录'
    })
    window.location = '/#/login'
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// response
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(res => {
  return res.data
}, error => {
  let msg = ''
  if (error.response) {
    if (error.response.status === 401) { // 未登陆
      window.location = '/login'
    }
    if (error.response.data && error.response.data.message) {
      msg = error.response.data.message
    }
  } else {
    msg = error.message
  }
  // 这里统一做错误提示，如果要单独处理，跳过这里即可
  Notification.error({
    title: '错误提示',
    message: msg
  })
  console.log('api response error: ', msg)
  return Promise.reject(msg)
})

export const joinURL = function (...urls) {
  return '/' + urls.join('/')
}

export const _get = (url, params = null) => {
  return axios.get(url, { params: params })
}

export const _post = (url, data) => {
  return axios.post(url, data)
}

export const _patch = (url, data) => {
  return axios.patch(url, data)
}

export const _put = (url, data) => {
  return axios.put(url, data)
}

export const _delete = (url) => {
  return axios.delete(url)
}
