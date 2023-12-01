// main.js 是入口文件
//
import { createApp } from 'vue'
// 根组件 vue开发的基本单元
import App from './App.vue'

//js DOM 低效率 #app挂载在index.html
//vue 开创新世界，没有DOM，mvvm的世界。
//原生的js不支持 mvvm ，所以要mount
//web app
createApp(App).mount('#app')
