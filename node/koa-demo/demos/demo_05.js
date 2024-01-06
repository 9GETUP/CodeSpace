const Koa = require('koa')
const app = new Koa()
const Router = require('@koa/router') //引入路由
const router = new Router()

const logger = (ctx,next) =>{ //日志
    console.log(`${ctx.url} - ${ctx.method} - ${Date.now()} `);
//在koa中 多个use同时只会生效第一个use，类似于链式调用，若要多次生效，需要使用next
    next()
} 

// 分别写不同的页面
const main = (ctx) =>{
    ctx.body = '首页页面'
}
const about = (ctx) =>{
    ctx.body = 'about page'
}

//如何调用logger
app.use(logger)

//这些use不能同时生效
//先配置路由，目前有两个接口，都是映射关系
router.get('/main',main) //router的第一个参数能命中就运行第二个参数
router.get('/about',about)
app.use(router.routes())  //所有配置的路由都生效


app.listen(3000, () =>{
    console.log('项目运行在3000端口');
})