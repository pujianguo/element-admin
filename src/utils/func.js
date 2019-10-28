export const copy = data => {
  return JSON.parse(JSON.stringify(data))
}

export default {
  install (Vue) {
    Vue.prototype.func = {
      copy
    }
  }
}
