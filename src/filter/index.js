import dateFormat from 'dateformat'
import * as constDatas from './const'

let filters = {
  year: t => {
    return t ? dateFormat(t, 'yyyy') : ''
  },
  month: t => {
    return t ? dateFormat(t, 'yyyy-mm') : ''
  },
  date: t => {
    return t ? dateFormat(t, 'yyyy-mm-dd') : ''
  },
  minute: t => {
    return t ? dateFormat(t, 'yyyy-mm-dd HH:MM') : ''
  },
  second: t => {
    return t ? dateFormat(t, 'yyyy-mm-dd HH:MM:ss') : ''
  },

  is: val => {
    return val ? '是' : '否'
  },
  sex: val => {
    return val === 1 ? '男' : val === 0 ? '女' : '未知'
  }
}

export default {
  install (Vue) {
    Object.keys(filters).forEach(name => {
      Vue.filter(name, filters[name])
    })
    Object.keys(constDatas).forEach(name => {
      let funName = name.slice(0, -4)
      Vue.filter(funName, (key) => {
        return constDatas[name][key] || constDatas[name]['default']
      })
    })
  }
}
