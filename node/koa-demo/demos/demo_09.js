const Koa = require('koa')
const app = new Koa()

const main = (ctx) =>{
    const n = Number(ctx.cookies.get('view') || 0) +1
    ctx.cookies.set('view', n) 
    //cookies存储在浏览器中，一般保存用户的身份凭证，后端控制它

    ctx.body = n + 'view'
}
app.use(main)

app.listen(3000, () =>{
    console.log('项目运行在3000端口');
})