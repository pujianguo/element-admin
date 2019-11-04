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
