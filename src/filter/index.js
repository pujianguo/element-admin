import { formatDecimals,
  formatMonth, formatDate, formatMinute, formatSecond
} from '@/utils/func'
import * as constDatas from './const'

let filters = {
  month: t => formatMonth(t),
  date: t => formatDate(t),
  minute: t => formatMinute(t),
  second: t => formatSecond(t),

  is: val => {
    return val ? '是' : '否'
  },
  sex: val => {
    return val === 1 ? '男' : val === 0 ? '女' : '未知'
  },

  formatMoney: val => {
    return formatDecimals(val)
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
