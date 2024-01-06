const Koa = require('koa')

const app = new Koa()

const main = (ctx) => { // 只要被app use掉的函数一定具有ctx参数  ctx == koa
    // ctx.body = { //body 等同于 res.end
    //     msg:'hello world'
    // }
    ctx.response.type = 'json' //控制响应的类型
    if(ctx.url.startsWith('/home')){
        ctx.body = '<h2>hello world</h2>'
    }
}
app.use(main)

app.listen(3000, () =>{
    console.log('项目运行在3000端口');
})