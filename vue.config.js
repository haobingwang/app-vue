// vue.config.js

const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  // https://cli.vuejs.org/zh/config/#devserver-proxy
  devServer: {
    proxy: {
      // 开发环境中，将以 /api 开头的请求，重定向到局域网或者测试服务器上的数据服务
      // http://43.254.153.111:9007/api/news/info?id=25C4E36E290D1642F9655899F89F9D26
      '/api/news': {
        target: 'http://172.16.201.47:8081',
        changeOrigin: true
      },
      '/api': {
        target: 'http://172.16.201.47:8080',
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
    // const svgRule = config.module.rule('svg')
    // svgRule.uses.clear()
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  configureWebpack: () => ({
    // resolve: {
    //   alias: require('./alias.config').webpack
    // }
    // module: {
    //   rules: [{
    //     test: /\.svg$/,
    //     use: [{
    //       loader: "svg-sprite-loader",
    //       options: {
    //         symbolId: 'icon-[name]'
    //       }
    //     }]
    //   }]
    // }
  })
}
