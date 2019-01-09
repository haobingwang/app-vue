// vue.config.js
module.exports = {
  // https://cli.vuejs.org/zh/config/#devserver-proxy
  devServer: {
    proxy: {
      // 开发环境中，将以 /api 开头的请求，重定向到局域网或者测试服务器上的数据服务
      '/api': {
        target: 'http://172.16.201.47:8080',
        changeOrigin: true
      }
    }
  }
}
