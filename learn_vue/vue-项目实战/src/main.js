import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

//初始化项目样式
import '@/common/style/reset.css'

createApp(App).use(router).mount('#app')
