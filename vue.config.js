const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    compress: false, // 压缩
    overlay: { // 错误、警告在页面弹出
      warnings: true,
      errors: true
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
      .set('components', resolve('src/components'))

    if (isProduction) {
      config.plugins.delete('preload')
      config.optimization.minimize(true)
      config.optimization.splitChunks({
        chunks: 'all'
      })
    }
  },
  css: {
    // requireModuleExtension: false, // 关闭之后element-ui无法使用
    extract: true,
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: `@import '~styles/mixins.scss';`
      }
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            },
            sourceMap: false,
            parallel: true
          }
        })
      )
    }
  },
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1
}
