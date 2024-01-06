const Koa = require('koa')
const app = new Koa()
const Router = require('@koa/router') //引入路由
const router = new Router()

// 分别写不同的页面
const main = (ctx) =>{
    ctx.body = '首页页面'
}
const about = (ctx) =>{
    ctx.body = 'about page'
}

//这些use不能同时生效
//先配置路由
router.get('/main',main) //router的第一个参数能命中就运行第二个参数
router.get('/about',about)
app.use(router.routes())  //所有配置的路由都生效


app.listen(3000, () =>{
    console.log('项目运行在3000端口');
})