const path = require('path')
// 需要安装 uglifyjs-webpack-plugin 插件
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
    // open: true, // 开启服务时自动打开浏览器
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.com',
    //     ws: false, // websocket
    //     changeOrigin: true, // 是否允许跨域
    //     pathRewrite: {
    //       '/api': '/'
    //     }
    //   }
    // }
  },
  // css相关配置
  css: {
    // requireModuleExtension: false, // 关闭之后element-ui无法使用
    extract: true, // 是否使用css分离插件
    sourceMap: false, // 方便开发人员的错误定位，true打包时间大大增加
    // css预处理器
    loaderOptions: {
      scss: {
        // 下面写法是sass-loader 7.0之前的写法，之后可能会变
        //     data: `
        //       @import "@/assets/common/index.scss"
        //     `
        // sass-loader 8开始使用下面方法
        prependData: `@import '~styles/mixins.scss';`
      }
    },
    // 是否启用css
    // modules: true
  },
  // webpack 配置
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
      .set('components', resolve('src/components'))

    // 生产环境配置
    if (isProduction) {
      // 删除预加载
      config.plugins.delete('preload')
      // 开启压缩代码
      config.optimization.minimize(true)
      // 分割代码 (把相同的代码打包在一起)
      config.optimization.splitChunks({
        chunks: 'all'
      })
      // 可以配置cdn
    }
    // 测试环境
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        // UglifyJsPlugin插件
        new UglifyJsPlugin({
          uglifyOptions: {
            // 删除console,
            warnings: false,
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log'] // 移除console
            },
            sourceMap: false,
            // 使用多进程并行来提高构建速度
            parallel: true
          }
        })
      )
    }
  },
  // 关闭整个生产环境sourceMap
  productionSourceMap: false,
  // 启用并行化 默认并发数：os.cpus().length
  parallel: require('os').cpus().length > 1
}
