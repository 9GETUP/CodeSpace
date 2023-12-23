import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 全局使用 pinia
import { createPinia } from 'pinia'

const app = createApp(App)
app
    .use(createPinia())
    .mount('#app')
    