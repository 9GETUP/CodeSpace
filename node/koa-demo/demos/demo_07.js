const Koa = require('koa')
const app = new Koa()

const main = (ctx) =>{
    //throw(500)

    ctx.response.status = 404 //http的状态码，2开头的才不报错
    ctx.body = 'Page not found'
}
app.use(main)

app.listen(3000, () =>{
    console.log('项目运行在3000端口');
})