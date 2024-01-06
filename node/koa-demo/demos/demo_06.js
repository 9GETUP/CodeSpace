//中间件
const Koa = require('koa')
const app = new Koa()

const fa = (ctx,next) =>{
    console.log('a')
    next()
    console.log(1)
}
const fb = (ctx,next) =>{
    console.log('b')
    next()
    console.log(2)
}
const fc = (ctx,next) =>{
    console.log('c')
    next()
    console.log(3)
}
//所有被use的函数就是都叫中间件函数，中间件执行是有规则的
//next可以调用中间件函数
//中间件执行顺序：洋葱模型，规则类似于 递归
app.use(fa)
app.use(fb)
app.use(fc)

app.listen(3000, () =>{
    console.log('项目运行在3000端口');
})