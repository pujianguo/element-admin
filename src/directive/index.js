export default {
  install (Vue) {
    const directives = require.context('.', false, /\.directive\.js$/)
    directives.keys().forEach(filename => {
      const directiveName = filename.replace(/^\.\//, '').replace(/\.directive\.js$/, '')
      Vue.directive(directiveName, directives(filename).default)
    })
  }
}
