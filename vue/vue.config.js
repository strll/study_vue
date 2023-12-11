const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    //浏览器异常屏蔽【element-plus表格自适应大小异常】
    client:{
      overlay:{
        runtimeErrors:false,
      },
    },
    //发送请求时通过代理发送
    proxy:{
      '/api':{
        target:'http://localhost:9000',
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },
});