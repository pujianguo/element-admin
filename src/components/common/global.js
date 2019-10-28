export default {
  install (Vue) {
    // 首字母大写 abc => Abc
    // function changeStr (str) {
    //   return str.charAt(0).toUpperCase() + str.split(1)
    // }

    // require.context()参数： 目录，是否进入子目录，匹配文件名
    const requireComponent = require.context('.', true, /\.vue$/)
    requireComponent.keys().forEach(fileName => {
      const config = requireComponent(fileName)
      const componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
      Vue.component(componentName, config.default || config)
    })
  }
}
