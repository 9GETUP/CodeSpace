const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    //配置代理
    //用'/api'代指目标地址，相当于给api发一个请求
    proxy: {
      '/api': {
        //目标地址
        target: 'http://ustbhuangyi.com/sell/',
        //允许跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
})
