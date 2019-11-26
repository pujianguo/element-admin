import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import storage from '@/utils/storage'

NProgress.configure({ showSpinner: false })// NProgress Configuration 关闭右上角加载图标

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (storage.getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      next()
      // 权限判断
      // if (hasPermission(store.store.roles, to.meta.roles)) {
      //   next()
      // } else {
      //   Message.warning('您没有权限')
      //   next({ path: '/401', replace: true, query: { noGoBack: true } })
      // }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
