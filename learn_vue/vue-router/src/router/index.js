//配置路由
import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Newest from '../views/homeChild/newest.vue'


const routes = [
    {
        path : '/',
        redirect: '/home'
    },
    //每个页面都是一个花括号
    {
        path: '/home', //路由配置的路径
        component: Home,
        //子路由
        children:[
            //重定向,通常用于初次加载页面时默认展示的页面
            {
                path :'/home', //执行条件
                redirect: '/home/newest' //默认去到该路径
            },
            {
                //二级页面的路径不要加 /
                path:'newest',
                component: Newest
            },
            {
                path:'recommend',
                //引入的第二种形式:函数调用方式，代替上述的import引入
                component: () => import('../views/homeChild/recommend.vue')
            }
        ]
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(), //创建路由模式：history、hash模式
    routes //key和value重名写一个即可
})

// 抛出路由
export default router