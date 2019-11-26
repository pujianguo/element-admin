import dateFormat from 'dateformat'

/** *************** 时间相关 *************** **/
export const formatMonth = t => {
  return t ? dateFormat(t, 'yyyy-mm') : ''
}
export const formatDate = t => {
  return t ? dateFormat(t, 'yyyy-mm-dd') : ''
}
export const formatMinute = t => {
  return t ? dateFormat(t, 'yyyy-mm-dd HH:MM') : ''
}
export const formatSecond = t => {
  return t ? dateFormat(t, 'yyyy-mm-dd HH:MM:ss') : ''
}
// 获取最近n天时间, 负数是后几天，正数是前几天
export const getRecentDate = (n, t) => {
  let now = t ? (new Date(t)) : new Date()
  now.setDate(now.getDate() + n)
  return dateFormat(now, 'yyyy-mm-dd') // TODO: 这个格式是element组件需要的格式
}
// 提交时，转换后端时间
export const getSubmitTime = time => {
  time = time || new Date()
  return dateFormat(time, 'isoDateTime').replace('+0800', '+08:00')
}

export const copy = data => {
  return JSON.parse(JSON.stringify(data))
}

/* 将const中的数据转化为picker选择时可用的数组
  * isNumber key是否是number类型
*/
export const constDataToArray = (obj, isNumber = false) => {
  let arr = []
  if (isNumber) {
    Object.getOwnPropertyNames(obj).forEach(k => {
      if (k !== 'default') {
        arr.push({ value: Number(k), label: obj[k] })
      }
    })
  } else {
    Object.getOwnPropertyNames(obj).forEach(k => {
      if (k !== 'default') {
        arr.push({ value: k, label: obj[k] })
      }
    })
  }
  return arr
}

export const formatFloat = value => {
  value = parseFloat(value)
  if (Number.isNaN(value)) {
    value = 0
  }
  return parseFloat(value.toFixed(2))
}
export const formatInt = value => {
  value = parseInt(value)
  if (Number.isNaN(value)) {
    value = 0
  }
  return value
}
// js保留两位小数，自动补充零, 补0后转换成了字符串
export const formatMoney = value => {
  value = formatFloat(value)
  let decimals = value.toString().split('.')[1]
  if (decimals) {
    if (decimals.length === 1) {
      value = value + '0'
    }
  } else {
    value = value + '.00'
  }
  return value
}
export const sum = (arr, key) => {
  return arr.reduce((prev, cur) => {
    return parseFloat(prev + parseFloat(cur[key]))
  }, 0)
}

// 只绑定需要在vue页面用到的
export default {
  install (Vue) {
    Vue.prototype.func = {
      copy,
      constDataToArray,
      formatFloat,
      formatInt
    }
  }
}
