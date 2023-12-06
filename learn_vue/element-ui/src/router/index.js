import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    component:()=>import('@/views/Login.vue')
  },
  {
    //允许路径后带参
    //path:'/home/:user',
    path:'/home',
    name:'home',
    component:()=>import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
