// sessionStorage
const TOKEN = 'token'
const INFO = 'info'
const PAGE = 'page'

// localStorage
const MENUCOLLAPSE = 'menuCollapse'

export default {
  // token
  setToken: (token) => {
    window.sessionStorage.setItem(TOKEN, token)
  },
  getToken: () => {
    return window.sessionStorage.getItem(TOKEN)
  },
  rmToken: () => {
    window.sessionStorage.removeItem(TOKEN)
  },

  // info
  setInfo: (info) => {
    window.sessionStorage.setItem(INFO, info)
  },
  getInfo: () => {
    return window.sessionStorage.getItem(INFO)
  },
  rmInfo: () => {
    window.sessionStorage.removeItem(INFO)
  },

  // page
  setPage: (page) => {
    window.sessionStorage.setItem(PAGE, page)
  },
  getPage: () => {
    return window.sessionStorage.getItem(PAGE)
  },
  rmPage: () => {
    window.sessionStorage.removeItem(PAGE)
  },

  clear: () => {
    window.sessionStorage.clear()
  },

  // 下面是一些用户自定义行为，存到localStorage即可
  // menuCollapse
  setMenuCollapse: (payload) => {
    window.localStorage.setItem(MENUCOLLAPSE, payload)
  },
  getMenuCollapse: () => {
    return window.localStorage.getItem(MENUCOLLAPSE)
  },
  rmMenuCollapse: () => {
    window.localStorage.removeItem(MENUCOLLAPSE)
  }
}
